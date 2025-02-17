import {
  ref,
  shallowRef,
  nextTick,
  onUnmounted,
  defineComponent,
  createVNode,
  render,
  h,
  onMounted,
} from 'vue'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer'
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { isFunction } from 'lodash'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import { Water } from 'three/addons/objects/Water.js'
import * as THREE from 'three'
import TWEEN from 'three/examples/jsm/libs/tween.module.js'

export function useThree() {
  const container = ref<HTMLElement>()
  const scene = shallowRef<THREE.Scene>()
  const camera = shallowRef<THREE.PerspectiveCamera>()
  const renderer = shallowRef<THREE.WebGLRenderer>()
  const cssRenderer = shallowRef<CSS2DRenderer>()
  const controls = shallowRef<OrbitControls>()
  const composers = new Map()
  const mixers: any = []
  const clock = new THREE.Clock()
  const renderMixins = new Map()

  const animate = () => {
    const delta = new THREE.Clock().getDelta()
    renderer.value!.render(scene.value!, camera.value!)
    const mixerUpdateDelta = clock.getDelta()
    mixers.forEach((mixer: any) => mixer.update(mixerUpdateDelta))
    composers.forEach((composer) => composer.render(delta))
    renderMixins.forEach((mixin) => isFunction(mixin) && mixin())
    cssRenderer.value!.render(scene.value!, camera.value!)
    TWEEN.update()
    requestAnimationFrame(() => animate())
  }

  const boostrap = () => {
    const { clientWidth, clientHeight } = container.value!
    //Scene
    scene.value = new THREE.Scene()
    //Camera
    camera.value = new THREE.PerspectiveCamera(
      45,
      clientWidth / clientHeight,
      1,
      10000
    )
    camera.value.position.set(250, 150, -300)
    //Renderer
    renderer.value = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.value.shadowMap.enabled = false
    renderer.value.outputEncoding = THREE.sRGBEncoding
    renderer.value.setSize(clientWidth, clientHeight)
    renderer.value.setClearAlpha(0.5)
    container.value!.appendChild(renderer.value.domElement)
    //CssRenderer
    cssRenderer.value = new CSS2DRenderer()
    cssRenderer.value.setSize(clientWidth, clientHeight)
    cssRenderer.value.domElement.className = 'css2d-renderer'
    cssRenderer.value.domElement.style.position = 'absolute'
    cssRenderer.value.domElement.style.top = '0px'
    cssRenderer.value.domElement.style.pointerEvents = 'none'
    container.value!.appendChild(cssRenderer.value.domElement)

    //Controls
    controls.value = new OrbitControls(camera.value, renderer.value.domElement)
    controls.value.minPolarAngle = 0
    controls.value.enableDamping = true
    controls.value.dampingFactor = 0.1
    controls.value.target.set(0, 0, 0)
    controls.value.maxPolarAngle = Math.PI / 2
    controls.value.minDistance = 10
    // controls.value.maxDistance = 100
    controls.value.update()

    //Lights
    const ambientLight = new THREE.AmbientLight(0x999999, 10)
    scene.value.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5) // 从正上方（不是位置）照射过来的平行光，0.7的强度
    directionalLight.position.set(20, 20, 20)
    directionalLight.position.multiplyScalar(1)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
    // scene.value.add(new THREE.DirectionalLightHelper(directionalLight, 5))
    scene.value.add(directionalLight)
  }

  const dracoLoader = new DRACOLoader()

  dracoLoader.setDecoderPath(
    `${import.meta.env.VITE_API_DOMAIN}/js/draco/gltf/`
  )

  dracoLoader.setDecoderConfig({ type: 'js' })

  const loadGltf = (url: string): Promise<GLTF> => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)
    const onCompleted = (object: GLTF, resolve: any) => resolve(object)
    return new Promise<GLTF>((resolve) => {
      loader.load(url, (object: GLTF) => onCompleted(object, resolve))
    })
  }

  const loadEXR = (url: string) => {
    const pmremGenerator = new THREE.PMREMGenerator(renderer.value!)
    return new Promise<{
      exrCubeRenderTarget: any
      exrBackground: any
    }>((resolve) => {
      new EXRLoader().load(url, (texture: any) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        const exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture)
        const exrBackground = texture
        resolve({
          exrCubeRenderTarget,
          exrBackground,
        })
      })
    })
  }

  const loadWater = (config: {
    width: number
    height: number
    texture: string
    options?: any
  }) => {
    return new Promise<THREE.Mesh>((resolve) => {
      const waterNormals = new THREE.TextureLoader().load(
        config.texture,
        (texture) => (texture.wrapS = texture.wrapT = THREE.RepeatWrapping)
      )
      const waterGeometry = new THREE.PlaneGeometry(config.width, config.height)

      const waterOptions = {
        textureWidth: 256,
        textureHeight: 256,
        waterNormals,
        sunColor: 0xf1e8d2,
        waterColor: 0x6183c1,
        distortionScale: 3.7,
        fog: false,
        side: THREE.DoubleSide,
      }
      const water = new Water(
        waterGeometry,
        Object.assign(waterOptions, config.options ?? {})
      )
      renderMixins.set(water, () => {
        water.material.uniforms.time.value += 1.0 / 60.0
      })
      resolve(water)
    })
  }

  //加载坐标轴
  const loadAxesHelper = () => {
    const axesHelper = new THREE.AxesHelper(5000)
    scene.value!.add(axesHelper)
  }

  // 加载测试场景
  const loadTestScene = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.value!.add(cube)
  }

  const addModelPick = (
    object: THREE.Object3D,
    callback: (
      intersects:
        | THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>[]
        | []
    ) => void
  ) => {
    const handler = (event: MouseEvent) => {
      const el = container.value as HTMLElement
      const rect = el.getBoundingClientRect()
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      )
      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera.value!)
      const intersects = raycaster.intersectObject(object, true)
      isFunction(callback) && callback(intersects)
      // if (intersects.length <= 0) return void 0
    }
    document.addEventListener('click', handler)
    onUnmounted(() => document.removeEventListener('click', handler))
  }

  const addModelHoverPick = (
    object: THREE.Object3D,
    callback: (
      intersects:
        | THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>[]
        | []
    ) => void
  ) => {
    const handler = (event: MouseEvent) => {
      const el = container.value as HTMLElement
      const rect = el.getBoundingClientRect()
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      )
      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera.value!)
      const intersects = raycaster.intersectObject(object, true)
      isFunction(callback) && callback(intersects)
      // if (intersects.length <= 0) return void 0
    }
    document.addEventListener('mousemove', handler)
    onUnmounted(() => document.removeEventListener('mousemove', handler))
  }

  const addWindowResize = () => {
    const handleResize = () => {
      const { clientWidth, clientHeight } = container.value!
      camera.value!.aspect = clientWidth / clientHeight
      camera.value!.updateProjectionMatrix()
      renderer.value!.setSize(clientWidth, clientHeight)
      cssRenderer.value!.setSize(clientWidth, clientHeight)
      controls.value!.update()
    }
    window.addEventListener('resize', handleResize)
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })
  }

  //过渡动画
  const transitionAnimation = (props: {
    from: Record<string, any>
    to: Record<string, any>
    duration: number
    easing?: any
    onUpdate?: (params: Record<string, any>) => void
    onComplete?: (params: Record<string, any>) => void
  }) => {
    const {
      from,
      to,
      duration,
      easing = TWEEN.Easing.Quadratic.Out,
      onUpdate,
      onComplete,
    } = props
    return new TWEEN.Tween(from)
      .to(to, duration)
      .easing(easing)
      .onUpdate((object: any) => isFunction(onUpdate) && onUpdate(object))
      .onComplete((object: any) => isFunction(onComplete) && onComplete(object))
  }

  //通过vue文件加载CSS2D
  const loadCSS2DByVue = (component: any, props: Record<string, any>) => {
    const crender = (component: any, props: Record<string, any>) => {
      const newComponent = defineComponent({
        render: () => h(component, props),
      })
      const instance = createVNode(newComponent)
      render(instance, document.createElement('div'))
      console.log('instance', instance)
      if (instance.el!.nodeName === '#text') {
        return instance.el!.nextElementSibling
      } else {
        return instance.el!
      }
    }
    const element = crender(component, props) as HTMLElement
    const css2dObject = new CSS2DObject(element)
    return css2dObject
  }

  onMounted(() => {
    boostrap()
    animate()
  })

  return {
    container,
    scene,
    camera,
    renderer,
    cssRenderer,
    controls,
    mixers,
    renderMixins,
    composers,
    loadGltf,
    loadEXR,
    loadWater,
    loadCSS2DByVue,
    loadAxesHelper,
    loadTestScene,
    addModelPick,
    addModelHoverPick,
    addWindowResize,
    transitionAnimation,
  }
}

export default useThree

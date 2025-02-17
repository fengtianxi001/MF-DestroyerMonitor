<template>
  <Layout>
    <BaseLoading :loading="loading" />
    <div class="container" ref="container"></div>
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from '@/layout'
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import { useThree } from '@/hooks'
import { BaseMarker, BaseLoading } from '@/components'

const loading = ref(true)

const {
  container,
  scene,
  loadGltf,
  loadEXR,
  loadWater,
  loadCSS2DByVue,
  addWindowResize,
  addModelPick,
} = useThree()

const sources = {
  water: `${import.meta.env.VITE_API_DOMAIN}/textures/waternormals.jpg`,
  hdr: `${import.meta.env.VITE_API_DOMAIN}/hdrs/aristea_wreck_puresky_2k.exr`,
  ship: `${
    import.meta.env.VITE_API_DOMAIN
  }/models/cn_type_055_nanchang_v3.0.glb`,
}

const points = [
  {
    name: 'H/PJ-45B (130mm)',
    point: {
      x: 0.14138107432110125,
      y: 24.165143216341583,
      z: -96.0002365535531,
    },
    desc: '130mm naval guns of the Chinese Navy. In fact, it is equipped with the H/PJ-45, but the model is usually equipped with stronger equipment.',
  },
  {
    name: 'GJB 5860-2006',
    point: {
      x: -0.3841052855757674,
      y: 20.799999594688416,
      z: -53.935075918036645,
    },
    desc: 'Large VLS of the Chinese Navy. Inside, the Chinese Navy ships YJ-12 and HHQ-9B are stored.',
  },
  {
    name: 'TYPE 1130',
    point: {
      x: 0.00968257654837057,
      y: 30.556166491636482,
      z: -36.73000121116638,
    },
    desc: '30mm caliber CIWS of the Chinese Navy',
  },
  {
    name: 'H/PJ-17C',
    point: {
      x: -0.062348653134737475,
      y: 35.366373907828674,
      z: 168.0691910414079,
    },
    desc: 'Original 30mm anti-ship automatic gun specially developed by FeriseCAT for the Chinese Navy',
  },
  {
    name: 'TYPE 346B',
    point: {
      x: 14.661111149851592,
      y: 37.74721611655127,
      z: -14.651002400944662,
    },
    desc: 'Anti-aircraft radar owned by the Chinese Navy. The actual exploration range is said to be 400km~600km.',
  },
]
onMounted(() => {
  addWindowResize()

  const promiseA = loadEXR(sources.hdr).then(
    ({ exrCubeRenderTarget, exrBackground }) => {
      scene.value!.background = exrBackground
      scene.value!.environment = exrCubeRenderTarget.texture
    }
  )
  const promiseB = loadWater({
    texture: sources.water,
    width: 1000 * 100,
    height: 1000 * 100,
  }).then((water) => {
    water.rotation.x = -Math.PI * 0.5
    scene.value!.add(water)
  })

  const promiseC = loadGltf(sources.ship).then((gltf) => {
    const group = gltf.scene
    group.scale.set(2, 2, 2)
    group.position.set(0, 2, 0)
    scene.value!.add(group)

    points.forEach((item, index) => {
      const object = loadCSS2DByVue(BaseMarker, {
        name: index + 1,
        desc: item.desc,
        title: item.name,
      })
      object.position.set(item.point.x, item.point.y, item.point.z)
      scene.value!.add(object)
    })
  })

  Promise.all([promiseA, promiseB, promiseC]).then(() => {
    loading.value = false
  })
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

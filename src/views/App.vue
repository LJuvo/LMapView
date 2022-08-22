<template>
  <div class='screen'>
    <div class='screen-bg'></div>
    <mask-map></mask-map>
  </div>
</template>

<script>
export default {
  components: {
    'mask-map': () => import('./../components/map/index.vue')
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
  }
}
</script>
<style lang='less' scoped>
.screen {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}
.screen-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../public/bg.jpg');
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(65px);
  opacity: .6;
  transform: translateZ(0);
  z-index: 0;
}
</style>

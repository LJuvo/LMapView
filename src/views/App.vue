<template>
  <div class="screen">
    <!-- <button @click="startDraw">开始绘制</button>
    <base-editor ref="editor" :initArea="[]"></base-editor> -->
    <!-- <area-editor></area-editor> -->
    <mask-map></mask-map>
    <!-- <ffcreator-editor></ffcreator-editor> -->
    <!-- <x6-editor></x6-editor> -->
    <!-- <g-editor></g-editor> -->
    <!-- <douyin-editor></douyin-editor> -->
    <!-- <trigger-editor></trigger-editor> -->
    <!-- <star-music></star-music> -->
  </div>
</template>

<script>
export default {
  components: {
    "base-editor": () => import("./components/editor/area.vue"),
    "area-editor": () => import("./components/editor/index.vue"),
    "mask-map": () => import("./components/map/index.vue"),
    "ffcreator-editor": () => import("./components/ffcreator/index.vue"),
    "x6-editor": () => import("./components/x6/index.vue"),
    "g-editor": () => import("./components/g/index.vue"),
    "douyin-editor": () => import("./components/douyin/index.vue"),
    "trigger-editor": () => import("./components/trigger/index.vue"),
    "star-music": () => import("./components/music/index.vue")
  },
  data() {
    return {
      mapXDomain: "0,200",
      mapXRange: "0,200",
      mapYDomain: "0,200",
      mapYRange: "200,0",
      defaultPath: "./china.json",
      checkedPath: "./china.json",
      pathList: [
        { name: "中国", path: "./china.json" },
        { name: "宁水", path: "./water.json" }
      ]
    };
  },
  mounted() {},
  methods: {
    startDraw() {
      this.$refs.editor.clear();
      this.$refs.editor.resetPoint();
    }
  }
};
</script>
<style lang="less">
@font-face {
  font-family: "Digital";
  src: url("./fonts/LED.ttf") format("truetype");
}
</style>
<style lang="less" scoped>
.screen {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // background: url("./screen/bg.png") no-repeat;
  background-size: cover;
  background-position: center 0;
  position: relative;
  &-tools {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 300px;
    color: #fff;
    z-index: 20;
  }
}
</style>

<template>
  <div id="box" class="bg-gray-200" style="width:100%;height:100%"></div>
</template>
<script>
export default {
  mounted() {
    // this.fetchVideo(
    //   "https://gw.alipayobjects.com/os/bmw-prod/d6da7ac1-8b4f-4a55-93ea-e81aa08f0cf3.json"
    // );
    // window.addEventListener("resize", () => {
    //   console.log("resize ->");
    // });
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.onResize("box");
      });
    });
  },
  methods: {
    fetchVideo(url) {
      fetch(url).then(response => {
        console.log("res ->", response);
      });
    },
    onResize(id) {
      console.log("res ->", this.getChartSize(document.getElementById(id)));
    },
    getElementSize(ele) {
      const style = ele.style;
      return {
        width:
          (ele.clientWidth || parseInt(style.width, 10)) -
          parseInt(style.paddingLeft, 10) -
          parseInt(style.paddingRight, 10),
        height:
          (ele.clientHeight || parseInt(style.height, 10)) -
          parseInt(style.paddingTop, 10) -
          parseInt(style.paddingBottom, 10)
      };
    },
    getChartSize(ele) {
      const size = this.getElementSize(ele);

      const w = size.width ? size.width : w;
      const h = size.height ? size.height : h;

      return {
        width: w,
        height: h
      };
    }
  },
  destroyed() {
    window.addEventListener("resize", null);
  }
};
</script>

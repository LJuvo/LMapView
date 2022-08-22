<template>
  <div id="c1" style="width:100%;height:100%;"></div>
</template>
<script>
import { Canvas } from "@antv/g-svg";
export default {
  mounted() {
    // or use SVG version
    // import { Canvas } from '@antv/g-svg';
    this.$nextTick(() => {
      this.initCanvas();
    });
  },
  methods: {
    resizeCanvas(canvas) {
      const boxId = "c1";
      const w = document.getElementById(boxId).offsetWidth;
      const h = document.getElementById(boxId).offsetHeight;
      console.log("canvas ->", w, h);
      canvas.changeSize(w, h);
    },
    debounce(fn, wait) {
      let timeout = null;
      return function() {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
      };
    },
    handle(canvas) {
      const boxId = "c1";
      const w = document.getElementById(boxId).offsetWidth;
      const h = document.getElementById(boxId).offsetHeight;
      console.log("canvas ->", w, h);
      canvas.changeSize(w, h);
      canvas._drawAll();
    },
    initCanvas() {
      const boxId = "c1";
      const w = document.getElementById(boxId).offsetWidth;
      const h = document.getElementById(boxId).offsetHeight;
      const padding = 20;
      const canvas = new Canvas({
        container: "c1",
        width: w,
        height: h
      });

      window.addEventListener("resize", () => {
        this.debounce(this.handle(canvas), 100);
      });
      //   window.addEventListener("resize", this.resizeCanvas(canvas));

      const originPoint = { x: padding, y: padding };
      const endPoint = { x: w - padding, y: h - padding };

      const group = canvas.addGroup();
      //   group.addShape("polygon", {
      //     attrs: {
      //       points: [
      //         [originPoint.x, (endPoint.y * 2) / 3 + endPoint.y / 3 / 2],
      //         [endPoint.x / 2, (endPoint.y * 2) / 3],
      //         [endPoint.x, (endPoint.y * 2) / 3 + endPoint.y / 3 / 2],

      //         [endPoint.x / 2, endPoint.y]
      //       ],
      //       stroke: "#cccccc",
      //       lineWidth: 1
      //     }
      //   });
      //   group.addShape("polygon", {
      //     attrs: {
      //       points: [
      //         [originPoint.x, endPoint.y / 3 / 2],
      //         [endPoint.x / 2 - 10, originPoint.y],
      //         [endPoint.x / 2 - 10, (endPoint.y * 2) / 3 - 10],

      //         [originPoint.x, (endPoint.y * 2) / 3 + endPoint.y / 3 / 2 - 10]
      //       ],
      //       stroke: "#cccccc",
      //       lineWidth: 1
      //     }
      //   });
      //   group.addShape("polygon", {
      //     attrs: {
      //       points: [
      //         [endPoint.x / 2 + 10, originPoint.y],
      //         [endPoint.x / 2 + 10, (endPoint.y * 2) / 3 - 10],
      //         [endPoint.x, (endPoint.y * 2) / 3 + endPoint.y / 3 / 2 - 10],
      //         [endPoint.x, endPoint.y / 3 / 2]
      //       ],
      //       stroke: "#cccccc",
      //       lineWidth: 1
      //     }
      //   });

      //   const picEle = canvas.addShape("dom", {
      //     attrs: {
      //       x: 100,
      //       y: 50,
      //       width: 200,
      //       height: 200,
      //       html: `
      //       <div class="canvas-tips">
      //         <h1>This is Title</h1>
      //         <img src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ" width="100" height="100" />
      //         </div>`
      //     }
      //   });

      group.addShape("dom", {
        attrs: {
          x: 200,
          y: 20,
          width: 220,
          height: 50,
          html: `
          <div class="base-road"></div>`
        }
      });

      group.addShape("dom", {
        attrs: {
          x: 120,
          y: 200,
          html: `
          <div class="wall"></div>`,
          class: "base-wall"
        }
      });

      //   picEle.on("mouseenter", () => {
      //     circle.attr("fill", "#2FC25B");
      //   });
    }
  },
  destroyed() {
    window.addEventListener("resize", null);
  }
};
</script>
<style lang="less">
.canvas-tips {
  transform: rotateX(-15deg) rotateY(53deg);
}
.wall {
  background: #ccc;
}
.road {
  background: #aaa;
}
.base-wall {
  width: 120px;
  height: 50px;
  background: #ccc;
  transform: rotateX(-15deg) rotateY(53deg);
}
.base-road {
  width: 220px;
  height: 50px;
  background: #aaa;
  transform: rotateX(-15deg) rotateY(53deg);
}
</style>

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

      const originPoint = { x: padding, y: padding };
      const endPoint = { x: w - padding, y: h - padding };

      const group = canvas.addGroup();
      group.addShape("polygon", {
        attrs: {
          points: [
            [130, 30],
            [130, 60],
            [160, 60],
            [160, 30]
          ],
          fill: "#ff0000"
        }
      });

      group.addShape("polygon", {
        attrs: {
          points: [
            [30, 30],
            [30, 60],
            [60, 60],
            [60, 30]
          ],
          fill: "#ffff00"
        }
      });

      group.addShape("polygon", {
        attrs: {
          points: [
            [30, 130],
            [30, 160],
            [60, 160],
            [60, 130]
          ],
          fill: "#ff00ff"
        }
      });
      group.addShape("polygon", {
        attrs: {
          points: [
            [130, 130],
            [130, 160],
            [160, 160],
            [160, 130]
          ],
          fill: "#0000ff"
        }
      });

      group.addShape("polygon", {
        attrs: {
          points: [
            [230, 130],
            [230, 160],
            [260, 160],
            [260, 130]
          ],
          fill: "#00ffff"
        }
      });

      canvas.getChildren().forEach(ele => {
        console.log("child ->", ele.getChildren());
      });
    }
  },
  destroyed() {
    window.addEventListener("resize", null);
  }
};
</script>
<style lang="less">
#c1 {
  transform: rotateX(-70deg) rotateY(0deg) rotateZ(-45deg);
}
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
  transform-origin: center;
  transform: rotateX(-15deg) rotateY(53deg);
}
.base-road {
  width: 220px;
  height: 50px;
  background: #aaa;
  transform: rotateX(-15deg) rotateY(53deg);
}
</style>

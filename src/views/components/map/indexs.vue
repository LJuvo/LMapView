<template>
  <div id="map" style="height: 100%;width: 100%;"></div>
</template>
<script>
import { Scene, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { PointInfo } from "./point.js";
export default {
  mounted() {
    this.$nextTick(() => {
      const scene = new Scene({
        id: "map",
        map: new GaodeMap({
          pitch: 35.210526315789465,
          mapStyle: "dark",
          center: [104.288144, 31.239692],
          zoom: 4.4,
          token: "15cd8a57710d40c9b7c0e3cc120f1200"
        })
      });
      window.scene = scene;
      scene.on("loaded", function() {
        const pointLayer = new PointLayer({})
          .source(PointInfo, {
            cluster: true
          })
          .shape("circle")
          .scale("point_count", {
            type: "quantile"
          })
          .size("point_count", [5, 10, 15, 20, 25])
          .active(true)
          .color("yellow")
          .style({
            opacity: 0.5,
            strokeWidth: 1
          });

        scene.addLayer(pointLayer);
      });
    });
  }
};
</script>

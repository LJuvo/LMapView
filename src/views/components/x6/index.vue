<template>
  <section class="x6-container">
    <div id="container"></div>
    <div class="x6-container-map" id="containerMap"></div>
  </section>
</template>
<script>
import { Graph } from "@antv/x6";
export default {
  mounted() {
    const data = {
      // 节点
      nodes: [
        {
          id: "node1", // String，可选，节点的唯一标识
          x: 40, // Number，必选，节点位置的 x 值
          y: 40, // Number，必选，节点位置的 y 值
          width: 80, // Number，可选，节点大小的 width 值
          height: 40, // Number，可选，节点大小的 height 值
          label: "hello" // String，节点标签
        },
        {
          id: "node2", // String，节点的唯一标识
          x: 160, // Number，必选，节点位置的 x 值
          y: 180, // Number，必选，节点位置的 y 值
          width: 80, // Number，可选，节点大小的 width 值
          height: 40, // Number，可选，节点大小的 height 值
          label: "world" // String，节点标签
        }
      ],
      // 边
      edges: [
        {
          source: "node1", // String，必须，起始节点 id
          target: "node2" // String，必须，目标节点 id
        }
      ]
    };

    const graph = new Graph({
      container: document.getElementById("container"),
      width: 800,
      height: 600,
      grid: {
        type: "mesh",
        size: 10, // 网格大小 10px
        visible: true // 渲染网格背景
      },
      scroller: {
        enabled: true
      },
      minimap: {
        enabled: true,
        container: document.getElementById("containerMap")
      }
    });

    graph.fromJSON(data);

    graph.zoom(-0.5);
    graph.translate(80, 40);
  }
};
</script>
<style lang="less" scoped>
.x6-container {
  position: relative;
  width: 100%;
  height: 100%;
  &-map {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
</style>

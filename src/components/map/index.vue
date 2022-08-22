<template>
  <div class="mask-map" id="map">
    <div></div>
  </div>
</template>
<script>
import * as L from 'leaflet'
export default {
  data () {
    return {
      map: ''
    }
  },
  mounted () {
    this.initDate()
  },
  methods: {
    initDate () {
      this.map = L.map('map', {
        center: [40.02404009136253, 116.50641060224784], // 地图中心
        zoom: 14, // 缩放比列
        zoomControl: true, // 禁用 + - 按钮
        doubleClickZoom: false, // 禁用双击放大
        attributionControl: false // 移除右下角leaflet标识
      })
      // let name = L.tileLayer(
      //   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      // ).addTo(this.map);
      L.tileLayer('/map/{s}/{z}/{x}/{y}.png').addTo(this.map)
      // this.map.removeLayer(name); // 移除图层

      this.map.pm.addControls({
        position: 'topleft',
        drawPolygon: false, // 添加绘制多边形
        drawMarker: false, // 添加按钮以绘制标记
        drawCircleMarker: false, // 添加按钮以绘制圆形标记
        drawPolyline: false, // 添加按钮绘制线条
        drawRectangle: true, // 添加按钮绘制矩形
        drawCircle: false, // 添加按钮绘制圆圈
        editMode: true, // 添加按钮编辑多边形
        dragMode: true, // 添加按钮拖动多边形
        cutPolygon: true, // 添加一个按钮以删除图层里面的部分内容
        removalMode: true // 清除图层
      })
      // 设置绘制后的线条颜色等
      this.map.pm.setPathOptions({
        color: 'orange',
        fillColor: 'green',
        fillOpacity: 0.4
      })
      this.map.pm.setLang('zh')
    }
  }
}
</script>
<style lang="less" scoped>
.mask-map {
  width: 100%;
  height: 100%;
  background: none;
}
</style>

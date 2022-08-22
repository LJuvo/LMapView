<template>
  <section>
    <div>
      <h3>触发条件</h3>
      <div class="condition-wrapper" v-if="!first">
        <div
          class="condition-wrapper-cell"
          v-for="(item, key) in data"
          :key="key"
          @click="selectCondition(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="condition-wrapper" v-else>
        <div class="condition-wrapper-cell active">
          {{ first.name }}
        </div>
      </div>
    </div>
    <div v-if="first && !second">
      <h3>选择条件</h3>
      <div class="condition-wrapper">
        <div
          class="condition-wrapper-cell"
          v-for="(item, key) in info"
          :key="key"
          @click="selectTerm(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div v-if="first && second">
      <h3>设置条件</h3>

      <div class="condition-wrapper">
        <h4>{{ second.name }}</h4>
        <condition-setting
          v-for="(item, key) in second.properties"
          :key="key"
          :data="item"
          :current="item.value"
          @on-select="selectSetting($event)"
        ></condition-setting>
      </div>
      <!-- <button @click="getSetting">当前值</button> -->
    </div>
  </section>
</template>
<script>
import ConditionSetting from "./setting.vue";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    info: {
      type: Array,
      default: () => []
    },
    first: {
      type: Object,
      default: () => {}
    },
    second: {
      type: Object,
      default: () => {}
    },
    third: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    "condition-setting": ConditionSetting
  },
  mounted() {
    if (this.first) {
      this.selectCondition(this.first);
    }
    if (this.second) {
      this.selectTerm(this.second);
    }
    if (this.third) {
      this.setSetting(this.third);
    }
  },
  methods: {
    selectCondition(val) {
      this.$emit("on-select", val);
    },
    selectTerm(val) {
      this.$emit("on-term", val);
    },
    selectSetting(val) {
      console.log("selectSetting ->", val);
    },
    setSetting(val) {
      for (let i = 0; i < this.second.properties.length; i++) {
        let ele = this.second.properties[i];
        this.setProperties(ele, val);
      }
      this.$forceUpdate();
    },
    setProperties(data, val) {
      data.value = val[data.key];
      const next = data.options.find(o => o.value === data.value);
      console.log("next->", next);
      if (next && next.options) {
        return this.setNext(next.options, val);
      } else {
        return false;
      }
    },
    setNext(val, obj) {
      val.forEach(ele => {
        if (ele.type === "select") {
          this.setProperties(ele, obj);
        } else {
          ele.info = obj[ele.key];
        }
      });
    },
    getSetting() {
      console.log("getSetting->", this.second.properties);

      let flag = true;
      let obj = {};
      for (let i = 0; i < this.second.properties.length; i++) {
        let ele = this.second.properties[i];
        if (!this.checkSetting(ele, obj)) {
          flag = false;
          break;
        }
      }
      return {
        state: flag,
        info: obj
      };
    },
    checkSetting(data, val) {
      val[data.key] = data.value;
      const next = data.options.find(o => o.value === data.value);
      if (next && next.options) {
        return this.checkNext(next.options, val);
      } else {
        return false;
      }
    },
    checkNext(val, obj) {
      let flag = true;
      val.forEach(ele => {
        if (ele.type === "select") {
          flag = this.checkSetting(ele, obj);
        } else {
          obj[ele.key] = ele.info;
          flag = !!ele.info;
        }
      });
      return flag;
    }
  }
};
</script>
<style lang="less" scoped>
.condition-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &-cell {
    border: 1px solid #eee;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
  }
  .active {
    color: rgb(14, 93, 240);
  }
}
</style>

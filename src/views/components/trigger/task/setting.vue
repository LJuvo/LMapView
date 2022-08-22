<template>
  <div>
    <h4>{{ data.label }}</h4>
    <div v-if="baseArr.length < options.length">
      <button class="setting-add" @click="addCell()">+</button>
    </div>
    <div class="setting-flex" v-for="(item, key) in baseArr" :key="key">
      <select v-model="item.value" @change="selectCell(item, key)">
        <option
          v-for="(cell, k) in options"
          :key="k"
          :value="cell.value"
          v-show="!cell.isSelect"
        >
          {{ cell.name }}
        </option>
      </select>
      <condition-setting
        v-for="(item, key) in item.options"
        :key="key"
        :data="item"
      ></condition-setting>
    </div>
  </div>
</template>
<script>
import ConditionSetting from "../condition/setting.vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    "condition-setting": ConditionSetting
  },
  data() {
    return {
      options: [],
      baseArr: [],
      lastSelect: []
    };
  },
  watch: {
    data(val) {
      this.initOptions();
    }
  },
  mounted() {
    this.initOptions();
  },
  methods: {
    initOptions() {
      this.options = this.data.options;
      this.baseArr.push({});
    },
    addCell() {
      this.baseArr.push({});
    },
    selectCell(val, index) {
      if (this.lastSelect.length > 0) {
        if (this.lastSelect[index]) {
          let last = this.options.find(o => o.value === this.lastSelect[index]);
          last.isSelect = false;
        }
      }
      let temp = this.options.find(o => o.value === val.value);
      temp.isSelect = true;
      val.options = [];
      val.options = temp.options;
      val.key = temp.name;
      console.log("temp ->", temp);
      this.lastSelect[index] = val.value;
      this.$forceUpdate();
    },
    setSetting(val) {
      let arr = [];
      val.forEach(ele => {
        arr.push({
          value: ele.value
        });
      });
      this.baseArr = arr;
    },
    getSetting() {
      let arr = [];
      this.baseArr.forEach(ele => {
        if (ele.value) {
          let temp = {};
          temp[ele.key] = ele.value;
          this.checkNext(ele.options, temp);
          arr.push(temp);
        }
      });
      return arr;
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
.setting-add {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #eee;
}
.setting-flex {
  display: flex;
  flex-direction: row;
}
</style>

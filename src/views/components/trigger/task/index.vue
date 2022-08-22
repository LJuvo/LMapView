<template>
  <section>
    <div>
      <h3>触发对象</h3>
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
      <h3>{{ second.name }}</h3>
      <div class="condition-wrapper">
        <task-setting
          v-for="(item, key) in second.properties"
          ref="taskSetting"
          :key="key"
          :data="item"
          @on-select="selectSetting($event)"
        ></task-setting>
      </div>
    </div>
  </section>
</template>
<script>
import TaskSetting from "./setting.vue";
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
    "task-setting": TaskSetting
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
    selectSetting() {},
    getSetting() {
      const temp = this.$refs.taskSetting[0].getSetting();
      console.log("123 ->", temp);
      return {
        state: true,
        info: temp
      };
    },
    setSetting(val) {
      this.$refs.taskSetting[0].setSetting(val);
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

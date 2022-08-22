<template>
  <div class="trigger-wrapper">
    <div class="trigger-wrapper-menu">
      <p
        v-for="(item, key) in steps"
        :key="key"
        :class="{
          active: key === currentStep
        }"
      >
        {{ item.title }}
      </p>
    </div>
    <div class="trigger-wrapper-content">
      <div class="trigger-wrapper-pane">
        <trigger-condition
          v-if="currentStep < 1"
          ref="triggerCondition"
          :data="steps[currentStep].conditionEvents"
          :info="steps[currentStep].taskEvents"
          :first="
            steps[currentStep].trigger
              ? steps[currentStep].trigger.first
              : undefined
          "
          :second="
            steps[currentStep].trigger
              ? steps[currentStep].trigger.second
              : undefined
          "
          :third="
            steps[currentStep].trigger
              ? steps[currentStep].trigger.third
              : undefined
          "
          @on-select="selectCondition($event)"
          @on-term="selectTerm($event)"
        ></trigger-condition>
        <trigger-task
          v-else-if="currentStep < steps.length - 1"
          ref="triggerTask"
          :data="steps[currentStep].conditionEvents"
          :info="steps[currentStep].taskEvents"
          :first="
            steps[currentStep].trigger
              ? steps[currentStep].trigger.first
              : undefined
          "
          :second="
            steps[currentStep].trigger
              ? steps[currentStep].trigger.second
              : undefined
          "
          @on-select="selectCondition($event)"
          @on-term="selectTerm($event)"
        ></trigger-task>
        <trigger-base
          v-else
          :info="steps[currentStep].trigger"
          ref="triggerBase"
        ></trigger-base>
      </div>
      <div>
        <button v-if="currentStep > 0" @click="stepBack()">上一步</button>
        <button
          v-if="steps[0].trigger && currentStep < steps.length - 1"
          @click="stepNext()"
        >
          下一步
        </button>
        <button
          v-if="
            steps[0].trigger &&
              currentStep > 0 &&
              currentStep < steps.length - 1
          "
          @click="addStep()"
        >
          添加执行任务
        </button>
        <button
          v-if="
            steps[0].trigger &&
              steps[0].trigger.first &&
              currentStep < steps.length - 1
          "
          @click="resetAutomate()"
        >
          重置
        </button>
        <button v-if="currentStep === steps.length - 1" @click="saveTrigger()">
          保存
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TriggerCondition from "./condition/index.vue";
import TriggerTask from "./task/index.vue";
import TriggerBase from "./base/index.vue";

import { conditionTable, conditionEvents, taskEvents } from "./api/condition";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "trigger-condition": TriggerCondition,
    "trigger-task": TriggerTask,
    "trigger-base": TriggerBase
  },
  data() {
    return {
      steps: [
        { id: "1231242", title: "配置触发条件" },
        { id: "1242423", title: "执行的任务" },
        { id: "1242555", title: "结束" }
      ],
      currentStep: 0,

      conditionEvents: undefined,
      taskEvents: []
    };
  },
  mounted() {
    let temp = JSON.parse(JSON.stringify(conditionTable));
    if (this.data.length > 0) temp = JSON.parse(JSON.stringify(this.data));
    this.steps[this.currentStep].conditionEvents = temp;
    this.$forceUpdate();
  },
  methods: {
    stepBack() {
      this.currentStep--;
    },
    stepNext() {
      let flag = true;
      if (this.currentStep < 1) {
        const temp = this.$refs.triggerCondition.getSetting();
        flag = temp.state;
        this.steps[this.currentStep].trigger.third = temp.info;

        // 获取第二步触发对象
        this.steps[this.currentStep + 1].conditionEvents = JSON.parse(
          JSON.stringify(conditionTable)
        );
        let info = this.steps[0].trigger;
        let obj = {
          first: info.first.id,
          second: info.second.id,
          third: temp.info
        };
        this.$emit("fetch-task", obj);
      } else if (this.currentStep < this.steps.length - 1) {
        const temp = this.$refs.triggerTask.getSetting();
        this.steps[this.currentStep].trigger.third = temp.info;
        if (this.currentStep < this.steps.length - 2)
          this.steps[this.currentStep + 1].conditionEvents = JSON.parse(
            JSON.stringify(this.conditionEvents)
          );
      }
      if (flag) this.currentStep++;
    },
    setConditionEvent(val) {
      this.conditionEvents = val;
      this.steps[this.currentStep + 1].conditionEvents = JSON.parse(
        JSON.stringify(val)
      );
    },
    findEventList(val) {
      const temp = this.taskEvents.find(o => o.id === val.id);
      if (temp) {
        this.steps[this.currentStep].taskEvents = JSON.parse(
          JSON.stringify(temp)
        );
      } else {
        this.$emit("fetch-event", val);
      }
    },
    setEventList(val) {
      // 事件获取
      this.taskEvents.push(val);
      this.findEventList(val);
    },
    addStep() {
      this.steps.splice(this.steps.length - 1, 0, {
        id: "1242423" + Math.random(1000).toFixed(2),
        title: "执行的任务"
      });
    },
    resetAutomate() {
      this.steps[this.currentStep].trigger = {};
      this.$forceUpdate();
    },
    selectCondition(val) {
      this.steps[this.currentStep].trigger = {
        first: val
      };
      if (this.currentStep < 1) {
        this.steps[this.currentStep].taskEvents = JSON.parse(
          JSON.stringify(conditionEvents)
        );
      } else if (this.currentStep < this.steps.length - 1) {
        this.steps[this.currentStep].taskEvents = JSON.parse(
          JSON.stringify(taskEvents)
        );
      }

      //   this.findEventList(val);

      this.$forceUpdate();
    },
    selectTerm(val) {
      this.steps[this.currentStep].trigger.second = val;
      this.$forceUpdate();
    },
    saveTrigger() {
      let arr = [];
      this.steps[this.currentStep].trigger = {
        third: this.$refs.triggerBase.getSetting()
      };
      this.steps.forEach((ele, i) => {
        let temp = {};
        if (i < this.steps.length - 1) {
          temp.first = ele.trigger.first.id;
          temp.second = ele.trigger.second.id;
          temp.third = ele.trigger.third;
        } else {
          temp = ele.trigger.third.info;
        }
        arr.push(temp);
      });
      console.log("save ->", arr);
    }
  }
};
</script>
<style lang="less" scoped>
.trigger-wrapper {
  display: flex;
  flex-direction: row;
  padding: 10px;
  height: 100%;
  width: 100%;
  &-menu {
    width: 300px;
    p {
      margin-top: 10px;
    }
    .active {
      color: rgb(15, 119, 238);
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  &-pane {
    flex: 1;
  }
}
</style>

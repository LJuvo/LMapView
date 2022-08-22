<template>
  <div>
    <p>
      {{ data.label }}:
      <select
        v-if="data.type === 'select'"
        v-model="data.value"
        @change="changeSelect($event)"
      >
        <option
          v-for="(item, key) in data.options"
          :value="item.value"
          :key="key"
        >
          {{ item.name }}
        </option>
      </select>
      <input v-else v-model="data.info" />
    </p>
    <condition-setting
      v-for="(item, key) in nextData.options"
      :key="key"
      :data="item"
    ></condition-setting>
  </div>
</template>
<script>
export default {
  name: "condition-setting",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      nextData: [],
      lastValue: ""
    };
  },
  watch: {
    data() {
      this.nextData = [];
    },
    "data.value"() {
      this.setSelect();
    }
  },
  mounted() {
    this.lastValue = this.data.value;
    this.setSelect();
  },
  methods: {
    setSelect() {
      if (this.data.value) {
        const temp = this.data.options.find(o => o.value === this.data.value);
        if (temp) {
          this.nextData = temp;
          console.log("changeSelect ->", temp, this.data.value);
          this.$forceUpdate();
          this.lastValue = this.data.value;
        }
      }
    },
    changeSelect() {
      setTimeout(() => {
        if (this.data.value) {
          let lastCell = this.data.options.find(
            o => o.value === this.lastValue
          );
          if (lastCell && lastCell.options) this.resetLastValue(lastCell);
          const temp = this.data.options.find(o => o.value === this.data.value);
          if (temp) {
            this.nextData = temp;
            console.log("changeSelect ->", temp, this.data.value);
            this.$forceUpdate();
            this.lastValue = this.data.value;
          }
        }
      }, 0);
    },
    resetLastValue(val) {
      val.options.forEach(ele => {
        if (ele.type === "select") {
          let temp = ele.options.find(o => o.value === ele.value);
          if (temp && temp.options) this.resetLastValue(temp);
          ele.value = "";
        } else {
          ele.info = "";
        }
      });
    }
  }
};
</script>

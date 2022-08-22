<template>
  <div>
    基础信息
    <input v-model="baseName" />
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      baseName: ""
    };
  },
  methods: {
    getSetting() {
      return {
        state: true,
        info: {
          title: this.baseName
        }
      };
    }
  }
};
</script>

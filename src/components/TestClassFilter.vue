<template>
    <div>
        <label>Minimum test time (ms)</label>
        <input type="number" v-model="minTime" @change="updateFunc">

        <label>Maximum test time (ms)</label>
        <input type="number" v-model="maxTime" @change="updateFunc">

        <label>Test class outcome</label>
        <input type="checkbox" @change="updateFunc" v-model="includeSuccess"> Success
        <input type="checkbox" @change="updateFunc" v-model="includePartial"> Partial failure
        <input type="checkbox" @change="updateFunc" v-model="includeFailure"> Failure
    </div>
</template>

<script>
export default {
  data() {
    return {
      minTime: 0,
      maxTime: 1000000,
      includeSuccess: true,
      includePartial: true,
      includeFailure: true,
      func: () => true
    };
  },
  methods: {
    updateFunc: function() {
      this.func = testClass =>
        testClass.totalTime >= this.minTime &&
        testClass.totalTime <= this.maxTime &&
        (testClass.testStatus == "success" && this.includeSuccess ||
        testClass.testStatus == "partial" && this.includePartial ||
        testClass.testStatus == "failure" && this.includeFailure)
      this.$emit("changed", this.func);
    }
  }
};
</script>

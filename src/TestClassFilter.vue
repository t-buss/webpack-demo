<template>
    <div>
        <label>Minimum test time (ms)</label>
        <input type="number" v-model="minTime" @change="updateFunc">

        <label>Maximum test time (ms)</label>
        <input type="number" v-model="maxTime" @change="updateFunc">

        <label>Test class outcome</label>
        <select v-model="testStatus" @change="updateFunc">
            <option value="all" selected>All test classes</option>
            <option value="success">Only fully successful test classes</option>
            <option value="failure">Only fully failed test classes</option>
            <option value="partial">Only partially failed test classes</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            minTime: 0,
            maxTime: 1000000,
            testStatus: "all",
            func: () => true
        }
    },
    methods: {
        updateFunc: function() {
            this.func = (testClass) => 
                testClass.totalTime >= this.minTime &&
                testClass.totalTime <= this.maxTime &&
                (testClass.testStatus == this.testStatus || this.testStatus == "all")
            this.$emit("changed", this.func)
        }
    }
}
</script>

<style scoped>

</style>


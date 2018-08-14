<template>
    <div class="sorter">
        <label>Test class outcome</label>
        <select v-model="sortByValue" @change="updateFunc">
            <option value="name">Test class name</option>
            <option value="totalDuration">Total Duration</option>
            <option value="starup">Start-up time</option>
            <option value="cooldown">Cool-down time</option>
        </select>
        <select v-model="ascending" @change="updateFunc">
            <option v-bind:value="true">Ascending</option>
            <option v-bind:value="false">Decending</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortByValue: "name",
            ascending: true,
            func: (a, b) => a.name.localeCompare(b.name)
        }
    },
    created: function() {
      this.$emit("changed", this.func)
    },
    methods: {
        updateFunc: function() {
            switch (this.sortByValue) {
                case "name":
                    this.func = (a, b) => a.name.localeCompare(b.name)
                    break
                case "totalDuration":
                    this.func = (a, b) => a.totalTime < b.totalTime ? -1 : a.totalTime == b.totalTime ? 0 : 1
            }
            this.$emit("changed", this.ascending ? this.func : (a, b) => -1 * this.func(a, b))
        }
    }
}
</script>

<style scoped>
</style>


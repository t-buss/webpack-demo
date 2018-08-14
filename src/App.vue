<template>
  <div id="app">
    <TestClassSorter @changed="sortFunction = $event"/>
    <TestClassFilter @changed="filterFunction = $event"/>
    <div v-for="testClass in filteredAndSorted">
      <p>name: {{ testClass.name }}, totalTime: {{ testClass.totalTime }}, testStatus: {{ testClass.testStatus }}</p>
    </div>
  </div>
</template>

<script>
import TestClassSorter from './TestClassSorter.vue'
import TestClassFilter from './TestClassFilter.vue'

export default {
  name: 'app',
  data () {
    return {
      testClasses: [
        { totalTime: 1, testStatus: "success", name: "testC" },
        { totalTime: 2, testStatus: "failure", name: "testA" },
        { totalTime: 3, testStatus: "partial", name: "testB" },
      ],
      sortFunction: () => -1,
      filterFunction: () => true
    }
  },
  computed: {
    filteredAndSorted: function() {
	return this.testClasses
		.filter(this.filterFunction)
		.sort(this.sortFunction)
	}
  },
  components: {
    TestClassSorter,
    TestClassFilter
  }
}
</script>

<template>
  <div id="app">
    <TestClassSorter @changed="sortFunction = $event"/>
    <TestClassFilter @changed="filterFunction = $event"/>
    <div v-for="testClass in filteredAndSorted" v-bind:key="testClass.name">
      <p>{{ testClass }}</p>
    </div>
  </div>
</template>

<script>
import TestClassSorter from './components/TestClassSorter.vue'
import TestClassFilter from './components/TestClassFilter.vue'

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

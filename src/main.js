import App from './App.vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

var testClasses = [
  { totalTime: 1, testStatus: "success", name: "testC" },
  { totalTime: 2, testStatus: "failure", name: "testA" },
  { totalTime: 3, testStatus: "partial", name: "testB" }
]

new Vue({
  el: '#app',
  render: h => h(App, {
    props: {testClasses: testClasses}
  })
})


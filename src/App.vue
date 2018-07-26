<template>
  <div id="app">
    <h1>\{{ msg }}</h1>
    <p>Glass icon on a button:
      <button type="button" class="btn btn-primary">
	<i class="material-icons">android</i>
      </button>
    <Item />
    </p>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Item
  }
}
</script>

<template>
	<div class="item">
		<p>{{ msg }}</p>
	</div>
</template>

<script>
export default {
	name: 'item',
	data() {
		return {
			msg: "Hello World"
		}
	}
}
</script>

<style scoped>
p {
	background: yellow;
}
</style>

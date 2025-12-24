<template>
	<h1 class="title">{{ count }}</h1>
	<button @click="count++">+</button>
	<button @click="count--">-</button>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const count = ref(0)
</script>

<style>
	.title {
		color: red;
	}
	button {
		margin: 0 5px;
		outline: none;
		border: none;
		padding: 5px 10px;
		background-color: #409eff;
		color: #fff;
	}
</style>


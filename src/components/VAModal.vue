<template>
	<div class="va-modal">
		<div @click="close" class="overlay" />
		<div class="va-card">
			<slot></slot>
		</div>
	</div>
</template>

<script lang='ts'>
import anime from "animejs";

import Vue from "vue";

export default Vue.extend({
	name: "va-modal",
	mounted() {
		const duration = 750;
		anime({
			duration,
			targets: ".va-modal .overlay",
			opacity: [0, 1]
		});
		anime({
			duration,
			targets: ".va-modal .va-card",
			translateY: -15
		});
	},
	methods: {
		delay(ms: number) {
			return new Promise(resolve => {
				setTimeout(() => resolve(), ms);
			});
		},
		close() {
			const duration = 750;
			anime({
				duration,
				targets: ".va-card",
				translateY: 15
			});
			this.delay(200).then(() => this.$emit("close"));
		}
	}
});
</script>

<style lang='scss' scoped>
	@mixin hw100 {
		height: 100vh;
		width: 100%;
	}
	.va-modal {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 100;
		&,
		.overlay {
			@include hw100();
		}
		.overlay {
			position: absolute;
			background-color: rgba(0, 0, 0, 0.35);
		}
		.va-card {
			margin: 0 auto;
			width: 32rem;
			background-color: white;
			border-radius: 0.4rem;
		}
	}
</style>

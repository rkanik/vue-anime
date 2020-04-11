<template>
	<div :class="'va-dropdown va-dropdown-'+id">
		<button class="vad-toggler" @click="show=!show">{{selected}}</button>
		<va-card :did="id" v-if="show" class="va-dropdown-content">
			<ul class="fruits">
				<li v-for="fruit in fruits" :key="fruit" @click="(selected=fruit,show=false)">{{fruit}}</li>
			</ul>
		</va-card>
	</div>
</template>

<script>
import anime from 'animejs';

import Vue from 'vue';

export default Vue.extend({
	name: 'va-dropdown',
	data: () => ({
		show: false,
		selected: 'Apple',
		fruits: ['Apple', 'Orange', 'Banana', 'Mango', 'Watermelon'],
		id: 'abc'
	}),
	created() {
		this.id = this.uid(3)
		// window.onclick = ({ pageX, pageY }) => {
		// 	console.log(document.querySelectorAll('.va-dropdown'),this.id)
		// 	const outsideBtn = this.isOutside(pageX, pageY, `.va-dropdown-${this.id} .vad-toggler`);
		// 	const outsideCard = this.isOutside(pageX, pageY, `.va-dropdown-${this.id} .va-card`);
		// 	if (outsideBtn && outsideCard) { this.show = false; }
		// };
	},
	methods: {
		isOutside(x, y, target) {
			const el = document.querySelector(target);
			//console.log(el)
			if (!el) return;
			const { top, right, bottom, left } = el.getBoundingClientRect();
			return x < left || y < top || x > right || y > bottom;
		},
		uid(count = 6) {
			const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
			var result = '';
			for (var i = 0; i < count; i++) {
				var x = Math.floor(Math.random() * chars.length);
				result += chars[x];
			}
			return result;
		}
	},
});
</script>

<style lang='scss' scoped>
	.va-dropdown {
		width: 14rem;
		// .va-dropdown-content {
		// 	position: absolute;
		// 	background-color: white;
		// }
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}
		.fruits {
			li {
				padding: 0.6rem 1rem;
				cursor: pointer;
				text-transform: uppercase;
				//letter-spacing: 1px;
				font-size: 0.9em;
				font-weight: 500;
				color: #212121;
				&:hover {
					background-color: #e0e0e0;
				}
			}
		}
	}
</style>

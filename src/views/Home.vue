<template>
	<div class="home ta-c">
		<button @click="modal=true">SHOW MODAL</button>

		<!-- Modal Component -->
		<va-modal v-if="modal" @close="modal=false">
			<div class="ta-l" style="padding:1rem;">
				<h1>Hello</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati sint natus provident consequuntur, consectetur sunt officia eum id maiores quam. Repellat impedit obcaecati alias error accusantium, facilis aperiam quam quo, aliquam ab ipsa sit natus facere laudantium dolore quas dicta vero odit ullam dolor. Quam ducimus aut harum architecto adipisci? Ipsa, molestias asperiores culpa ut ratione libero repellendus quam! Omnis, porro assumenda rem aspernatur voluptatum totam nulla. Sunt eos quisquam quod vero, autem unde. Aperiam, recusandae libero. Ipsam, aperiam. Dolorem, saepe culpa. Accusamus, enim natus alias quasi earum libero amet? Inventore, laboriosam autem quam eveniet aut officiis nulla libero.</p>
			</div>
		</va-modal>

		<!-- Dropdown Component -->
		<va-dropdown style="margin:0.5rem 0"></va-dropdown>

		<va-list shadow>
			<p class="va-list-label">Fruits</p>
			<va-list-item @click="handleClick">Lorem ipsum dolor sit amet.</va-list-item>
			<va-list-item>Amet consectetur adipisicing elit.</va-list-item>
			<va-list-item>Saepe, adipisci.</va-list-item>
		</va-list>

		<va-list shadow dark style="margin-top:1rem">
			<p class="va-list-label">Fruits</p>
			<va-list-item @click="handleClick">Lorem ipsum dolor sit amet.</va-list-item>
			<va-list-item>Amet consectetur adipisicing elit.</va-list-item>
			<va-list-item>Saepe, adipisci.</va-list-item>
		</va-list>

		<va-list outlined label="List" style="margin-top:1rem">
			<va-list-item>List item</va-list-item>
			<va-list-item>List item</va-list-item>
			<va-list-item>List item</va-list-item>
		</va-list>

		<!-- End -->
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
	data: () => ({
		modal: false,
	}),
	created() {
		window.onclick = ({ pageX, pageY }) => {
			const outsideBtn = this.isOutside(pageX, pageY, '.va-dropdown .vad-toggler');
			const outsideCard = this.isOutside(pageX, pageY, '.va-dropdown .va-card');
			if (outsideBtn && outsideCard) { this.show = false; }
		};
	},
	methods: {
		handleClick(e) {
			//console.log(e)
		},
		isOutside(x, y, target) {
			const els = document.querySelectorAll(target);
			if (els.length === 0) return;
			let outside = false
			for (let el of els) {
				const { top, right, bottom, left } = el.getBoundingClientRect();
				if (x < left || y < top || x > right || y > bottom) {
					outside = true;
					break;
				}
			}
			return outside
		}
	}
};
</script>

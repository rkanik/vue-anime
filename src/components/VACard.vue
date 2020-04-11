<template>
	<div class="va-card">
		<slot></slot>
	</div>
</template>

<script>
import anime from 'animejs';

import Vue from 'vue';

export default Vue.extend({
  name: 'va-card',
  props:['did'],
  mounted() {
    anime({
      duration: 500,
      targets: `.va-dropdown-${this.did} .va-card`,
      translateY: [15, 0],
    });
  },
});
</script>

<style lang='scss' scoped>
	.va-card {
		border-radius: 0.4rem;
		border: 1px solid #dadce0;
	}
</style>

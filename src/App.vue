<template>
  <div id="app">
    <router-view />
	<apo-foot></apo-foot>
  </div>
</template>

<script>
import Foot from '@/components/Foot.vue';

export default {
	components: {
		'apo-foot': Foot
	}
};
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

@import "asserts/styles/weui.min.css"

</style>

<script>
//importazione app
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import  { store }  from './components/store.js';


export default{
	data() {
		return{
			store
		};
	},
	components:{
		AppHeader,
		AppMain,
		AppFooter
	},
	methods:{

	}
}

</script>

<template>
	<AppHeader/>
	<AppMain/>
	<AppFooter/>
</template>

<style lang="scss">
@use"assets/scss/main.scss" as *;
@use "assets/scss/partials/variables.scss" as *;
@import "bootstrap/scss/bootstrap";
</style>

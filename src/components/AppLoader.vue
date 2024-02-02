<script>
//importazione store
import  { store }  from './store.js';


export default{
	data() {
		return{
			store,
		};
	},
	components:{

	},
	methods:{
		inverterFlagLoader(){
			this.store.flagLoader = !(this.store.flagLoader);
		}
	},
	mounted(){
		setTimeout(() => {
			this.inverterFlagLoader();
		}, 1000);
	},

}

</script>

<template>
	<div class="loading-screen">
    	<div class="loading-spinner">
			<div class="loading-spinner-second">
			</div>
		</div>
  	</div>
</template>

<style lang ="scss" scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .loading-spinner {
	background-color: #3498db;
	width: 40px;
	height: 40px;
	animation: spin 2s linear infinite;
	}
	.loading-spinner-second {
	background-color: #3498db;
	width: 40px;
	height: 40px;
	animation: spin-second 2s linear infinite;
	} 
}

@keyframes spin {
  	0% { transform: rotate(0deg); }
  	25% { transform: rotate(90deg); }
  	50% { transform: rotate(180deg); }
  	75% { transform: rotate(270deg); }
  	100% { transform: rotate(360deg); }
}
@keyframes spin-second {
	0% { transform: rotate(45deg); }
  	25% { transform: rotate(135deg); }
  	50% { transform: rotate(225deg); }
  	75% { transform: rotate(315deg); }
	100% { transform: rotate(45deg); }	
}
</style>
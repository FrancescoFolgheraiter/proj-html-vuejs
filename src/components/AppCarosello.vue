<script>
import  { store }  from './store.js';
import CardReview from './CardReview.vue';

export default{
	data() {
		return{
			store,
			counter: 0,
			autoplay: null,
		};
	},
	components:{
		CardReview,
	},
	methods:{
		Prev(){
            if ( this.counter > 0){
        
                this.counter--;
            }
            else{
        
                this.counter = this.store.review.length -1;
            }
        },
        Next(){
            if ( this.counter < (this.store.review.length - 1) ){
                this.counter++;
            }
            else{
                this.counter = 0;
            }
        }
	},
	mounted(){
		this.autoplay = setInterval(this.Next, 2500);
	}
}

</script>

<template>
	<div>
		<div class="row">
			<div class="col-5">
				<CardReview :userObj="this.store.review[this.counter]"/>
			</div>
			<div class="col-5">
				<CardReview v-if="(this.counter < this.store.review.length-1)" :userObj="this.store.review[this.counter+1]"/>
				<CardReview v-if="(this.counter >= this.store.review.length-1)" :userObj="this.store.review[0]"/>
			</div>
		</div>
	</div>
</template>

<style lang ="scss" scoped>
</style>
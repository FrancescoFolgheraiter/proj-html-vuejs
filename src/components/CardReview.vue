<script>

export default{
	data() {
		return{

		};
	},
	props:{
		userObj:Object,
	},
	components:{
		
	},
	methods:{
		getImagePath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
	}
}

</script>

<template>
	<div class="card-review p-4">
		<div>
			<i class="fa-solid fa-star" v-for="(font,j) in 5" :key="j" :class="{yellowStar: userObj.stars > j}"></i>
		</div>
		<h4>
			{{ userObj.title }}
		</h4>
		<p>
			{{ userObj.text }}
		</p>
		<div class="user d-flex">
			<div class="my-img-container me-3">
				<img :src="getImagePath('/img/'+ userObj.userImage)" :alt="userObj.userName ">
			</div>
			<div>
				<h5>
					{{ userObj.userName }}
				</h5>
				<h5>
					{{ userObj.userType }}
				</h5>
			</div>
		</div>
		<div class="yellowBar">
			<!--barra laterale card-->
		</div>
	</div>
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.card-review{
	position: relative;
	background-color: $bg-second-section;
	padding:10px 10px;
	margin:0 20px;
	border-radius: 15px;
	
	.yellowBar{
		height: 180px;
		width: 3px;
		position: absolute;
		left:0;
		top:15%;
		z-index: 1;
		border-radius: 25%;
		background-color:goldenrod;
	}
	.yellowStar{
		color:goldenrod;
	}
	.my-img-container{
		width: 60px;
		height: 60px;
		border-radius:50%;
		overflow:hidden;

		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	h5:first-of-type{
		font-weight: bold;
	}

	h5{
		font-size: 0.8rem;
	}
}
</style>
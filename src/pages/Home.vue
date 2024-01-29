<script>
export default{
	data() {
		return{
			service:[
				{
					title: "Pet sitting",
					text: "The readable content of a page when looking at is layout",
					image: "d-1.png"
				},
				{
					title: "Puppy Sitting",
					text: "The readable content of a page when looking at is layout",
					image: "d-2.png"
				},
				{
					title: "Dog Walking",
					text: "The readable content of a page when looking at is layout",
					image: "d-3.png"
				},
				{
					title: "Night Care",
					text: "The readable content of a page when looking at is layout",
					image: "d-4.png"
				},
				{
					title: "Pet Sitting",
					text: "The readable content of a page when looking at is layout",
					image: "d-2.png"
				},
			]
		};
	},
	components:{
		
	},
	methods:{

	}
}

</script>

<template>
	<!--Prima sezzione-->
	<section id="welcome">
		<div class = "container">
			<div class = "row">
				<div class = "col-4 d-flex justify-content-center flex-column align-items-center">
					<h2>
						Welcome to DogMilo Pets
					</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
					<div>
						<button>
							Get Started
						</button>
						<button>
							Play
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--fine prima sezione-->
	<!--seconda sezione-->
	<section id="about">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<div class="my-img-container">
						<img src="/img/about.png" alt="">
					</div>
				</div>
				<div class="col-8">
					<h3>
						[img]About Us
					</h3>
					<h4>
						Welcome DogMilo Pets
					</h4>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indutry's standard dummy text ever since the 1500s, when an unknow printer took a galery of type and scrambled
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indutry's standard dummy text ever since the 1500s, when an unknow printer took a galery of type and scrambled
					</p>
				</div>
			</div>
		</div>
	</section>
	<!--fine seconda sezione-->
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
#welcome{
	background-image: url(/img/b.png);
	height: 500px;
	background-size: cover;
	> .container, .row, .col-4{
		height: 100%;
	}
}
#about{
	height: 500px;
	background-color: $bg-main-section;
	background-image: url(/img/dog-logo.png);
	background-repeat: no-repeat;
	background-position-y: center;
	background-position: right;
	.my-img-container{
		height: 350px;
		img{
			height: 100%;
		}
	}
}
</style>

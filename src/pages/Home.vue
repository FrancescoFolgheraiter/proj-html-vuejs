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
					image: "d-5.png"
				},
			]
		};
	},
	components:{
		
	},
	methods:{
		getImagePath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		}
	}
}

</script>

<template>
	<!--Prima sezzione-->
	<section id="welcome">
		<div class = "container">
			<div class = "row">
				<div class = "col-4 d-flex flex-column justify-content-center">
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
	<!--terza sezione-->
	<section id="service">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h3>
						Service
					</h3>
					<p>
						DogMilo Pet care Services <br> For your best Friends
					</p>
				</div>
				<div v-for="(elem, i) in service" class="col-2 flex-grow-1">
					<div class="card-service text-white d-flex flex-column justify-content-center align-items-center p-3">
						<div class="my-img-container">
							<img :src="getImagePath('/img/' + elem.image)" alt="">
						</div>
						<div>
							{{ elem.title }}
						</div>
						<div>
							{{ elem.text }}
						</div>
						<div class="my-arrow-container">
							<img src="/img/right.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--fine terza sezione-->
	<!--quarta sezione-->
	<section id="choose-us">
		<div class="row">
			<div class="col-5">
				<div class="my-img-container">
					<img src="/img/why.png" alt="">
				</div>
			</div>
			<div class="col-5">
				<div class="row">
					<div class="col-12">
						<h3>
							[img]Choose Us
						</h3>
						<p>
							Why Choose Us?
						</p>
					</div>
					<div class="col-12">
						<div class="my-img-container">
							<img src="/img/w-3.png" alt="">
						</div>
						<div>
							<h4>
								Safety First
							</h4>
							<p>
								It is long established fact that a readr will be distructed by the readable content of a page when lookign in its layout.
							</p>
						</div>
					</div>
					<div class=" offset-2">

					</div>
					<div class="col-8">
						prova
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--fine quarta sezione-->
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
#welcome{
	background-image: url(/img/b.png);
	min-height: 500px;
	background-size: cover;
	> .container, .col-4{
		min-height: 500px;
	}

}
#about{
	min-height: 500px;
	background-color: $bg-main-section;
	background-image: url(/img/dog-logo.png);
	background-repeat: no-repeat;
	background-position: right;
	.my-img-container{
		width: 350px;

		img{
			width: 100% ;
		}
	}
}
#service{
	min-height: 500px;
	background-color: $bg-second-section;
	background-image: url(/img/dog-left.png);
	background-repeat: no-repeat;
	background-position-y: center;
	background-position: left;
	.card-service{
		background-color: $second-color;
		min-height: 350px;
		border-radius: 40%;
		.my-img-container{
			width:75px;
			img{
				width: 100%;
			}
		}
		.my-arrow-container{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: $bg-button-home;
	
			img{
				height: 100%;
			}
		}
	}
}

</style>

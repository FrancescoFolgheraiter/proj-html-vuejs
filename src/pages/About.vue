<script>
//importazione js bootstrap
import * as bootstrap from 'bootstrap';
//importazione store
import  { store }  from '../components/store.js';

export default{
	data() {
		return{
			aboutDogmilo: [
				{
					title: "Our Mission",
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
					image: "img/mision.png"
				},
				{
					title: "Our Vision",
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
					image: "img/vision.png"
				},
				{
					title: "Our Value",
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
					image: "img/value.png"
				},
			],
			petFood: [
				{
					title: "Pet Food",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
					image: "img/f-1.png"
				},
				{
					title: "Pet Accessories",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
					image: "img/f-2.png"
				},
				{
					title: "Pet Clothes",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
					image: "img/f-3.png"
				}
			],
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
	unmounted(){
		this.inverterFlagLoader();
	},
}

</script>

<template>
	<!-- Prima sezione -->
	<section id="jumbotron">
		<div class = "container jumbo">
			<div class = "jumbotron-text">
				<h2>
					About Us
				</h2>

				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
				
				<a href="#">
					<img src="/img/up-a.png" alt="up-a">
				</a>
			</div>
		</div>
	</section>	
	<!-- Fine prima sezione -->

	<!-- Seconda sezione -->
	<section id="about">
		<div class="container">
			<div class="row">
				
				<div class="col-6 text-about-container">
					<div class="sub-title d-flex align-items-center ">
						<div class="dog-logo">
							<img src="/img/dog-icon.png" alt="">
						</div>
						<h6>
							About Dogmilo
						</h6>
					</div>
					
					<h2>
						Welcome DogMilo Pets
					</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indutry's standard dummy text ever since the 1500s, when an unknow printer took a galery of type and scrambled
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</p>
				</div>

				<div class="col-6">
					<div class="img-container">
						<img src="/img/about-dog.png" alt="about-dog">
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Fine seconda sezione -->

	<!-- Inizio terza sezione -->
	<section id="table">
		<div class="container">
			<div class="row">
				<div v-for="(section, i) in aboutDogmilo" 
				class="col-4 aboutdog"
				:class="{'reverse': i == [1] }">
					<div class="text-container-table">
						<h3>
							{{ section.title }}
						</h3>
						<p>
							{{ section.text }}
						</p>
						
					</div>
					<div class="img-container-table">
						<img :src="section.image" :alt="section.title">
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- Fine terza sezione -->

	<!-- Inizio quarta sezione -->
	<section id="story">
		<section class="background-gray">
			<div class="container">
			<div class="text-section">
				<h6>
					Our Story
				</h6>
				<h2>
					DogMilo Pet Care Story <br>
					For Your Best Friends.
				</h2>
			</div>
			<div class="img-video">
				<div class="button-play-container">
					<button type="button" id="play-button" @focus="openModal" data-bs-toggle="modal" data-bs-target="#videoYoutube">
						<img src="/img/play.png" alt="">
					</button>
				</div>				
			</div>

			<div class="modal fade modal-lg" id="videoYoutube" tabindex="-1" aria-labelledby="videoYoutubeLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="videoYoutubeLabel">Dog Milo</h1>
							<button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<iframe width="700" height="350" src="https://www.youtube.com/embed/c1NgIvjXCMA?si=6dZobOJ7YuC0HSC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		</section>
		
	</section>
	<!-- Fine quarta sezione -->

	<!-- Inizio quinta sezione -->
	<section id="food">
		<div class="container">
			<div class="row">
				<div class="col-5">
					<div class="img-food-container">
						<img src="/img/ser-card-3.png" alt="">
					</div>
				</div>
				
				<div class="col-7 text-container">
					<div class="row">
						<div class="col-12">
							<h2>
								Fresh & Healthy Food
							</h2>
						</div>
					</div>
					
					<div v-for="(food, i) in petFood" class="row sections-container">
						<div class="col-2 icon-image-container me-4"> 
							<div class="dot-img-container">
								<img :src="food.image" :alt="food.title">
							</div>
							
						</div>
						<div class="col-10 text-food-container"> 
							<div class="food-title"> 
								{{ food.title }}
							</div>
							<div>
								{{ food.text }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="background-gray-food"></section>
		

	</section>
	<!-- Fine quinta sezione -->
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.container {
	height: 500px;
	
}
#jumbotron {
	background-image: url(/img/banner4.png);
	background-repeat: no-repeat cover;
	background-size: 100%;
	background-position-y: center;
	min-height: 500px;

	.jumbotron-text {
		color: white;
		vertical-align: middle;
		width: 50%;
		padding: 150px  0px;

		h2 {
			font-size: 3rem;
			font-weight: 600;
		} 
		p {
			font-size: 1.1rem;
		}

		img {
			width: 60px;
			height: auto;
			background-color: #01D7EC;
			border-radius: 5px;
		}
}
}

#about {
	.text-about-container {
		padding-top: 60px;
		h2 {
			margin-bottom: 15px;
		}

		.sub-title{
			margin-bottom: 20px;
			.dog-logo {
				margin-right: 15px;
			}
			h6 {
				color: $main-color;
			}
		}

		
	}
	
	.img-container img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}
#table {
	.row {
		height: 100%;
		.aboutdog {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			margin: 0;
			padding: 0;
			align-content: normal;

			.text-container-table {
				display: flex;
				flex-wrap: wrap;
				height: 49%;
				color: white;
				background-color: $main-color;
				align-items: center;
				padding: 0 20px;
			}
			.img-container-table {
				height: 51%;
				width: 100%;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.reverse {
			flex-direction: column-reverse;
		}
	}
}


#story {
	height: 770px;
	margin-top: 50px;
	.container {
		height: 475px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.text-section {
		text-align: center;
		font-weight: bold;

		h6 {
			color: $main-color;
		}
		h2 {
			margin-top: 25px;
			margin-bottom: 40px;
			font-weight: 700;
		}
	}
	.img-video {    
		background-image: url(/img/video-bg.png);
		background-repeat: no-repeat;
		background-size: 100%;
		width: 85%;
		height: 100%;	
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
    		height: 100%;
		}
		.button-play-container {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(0, 0, 0, 0.5);

			#play-button{
				height: 90px;
				width: 100px;
				background-color: transparent;
				border: transparent;
			}
		}
		
	}
	.modal-header {
		background-color: #4054b2;		
	}
}
.background-gray {
	background-color: #F6F6F6;
	height: 500px;
	width: 100%;
	padding-top: 20px;
}

#food {
	.img-container img {
		width: 50%;
	}
	.img-food-container {
		width: 100%;
	}
	.text-container {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		padding-left: 70px;

		h2 {
			font-weight: bold;
		}

		.sections-container {
			display: flex;
			height: 80px;
		
			.icon-image-container {
				height: 80px;
				width: 80px;

				.dot-img-container {
					width: 80px;
					height: 80px;
					background-color: #A69A79;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				

					img {
						width: 80%;
						height: 80%;
					}
				}
			}

			.text-food-container {
				.food-title {
					font-weight: bold;
				}
			}
		}
	}

}
.background-gray-food{
	background-color: #F6F6F6;
    height: 650px;
    width: 2144px;
    margin-top: -555px;
    margin-left: 520px;
}

</style>
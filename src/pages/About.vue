<script>
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
				
				<div class="col-6">
					<h6>
						<img src="/img/d-1.png" alt="">
						About Dogmilo
					</h6>
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
				<div v-for="(section, i) in aboutDogmilo" class="col-4 aboutdog">
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
				<img src="/img/video-bg.png" alt="">
			</div>
		</div>
	</section>
	<!-- Fine quarta sezione -->

	<!-- Inizio quinta sezione -->
	<section id="food">
		<div class="container">
			<div class="row">
				<div class="col-5 img-container">
					<img src="/img/ser-card-3.png" alt="">
				</div>
				<div class="col-7 text-container">
					<h2>
						Fresh & Healthy Food
					</h2>
					<div v-for="(food, i) in petFood" class="sections-container">
						<div class="icon-image-container"> 
							<div class="dot-img-container">
								<img :src="food.image" :alt="food.title">
							</div>
							
						</div>
						<div> 
							<div> 
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

	</section>
	<!-- Fine quinta sezione -->
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.container {
	height: 500px;
	
}
#jumbotron {
	background-image: url(/img/smalldog.jpeg);
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
	.img-container img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}

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
		height: 45%;
		color: white;
		background-color: $main-color;
		align-items: center;
		padding: 0 20px;
	}
	.img-container-table {
		height: 55%;
		img {
			width: 100%;
		}
	}
}

#story {
	height: 700px;
	.container {
		height: 600px;
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
	}
	.img-video {    
		width: 85%;
		display: flex;
		justify-content: center;

		img {
			width: 100%;
    		height: 100%;
		}
	}
}

#food {
	.img-container img {
		width: 100%;
	}
	.text-container {
		display: flex;
		flex-wrap: wrap;

		.sections-container {
			display: flex;
		
			.icon-image-container {
				height: 80px;
				width: 80px;

				.dot-img-container {
					width: 100%;
					height: 100%;
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
		}
	}

}

</style>
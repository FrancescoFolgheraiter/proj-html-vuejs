<script>
//importazione store
import  { store }  from '../components/store.js';
export default{
	data() {
		return{
			Cards: [
				{
					url:"img/ser-card-1.png",
					title:"Coat Handler Pet",
					text:"The standard chunk of Lorem Ipsum used since."
				},
				{
					url:"img/ser-card-2.png",
					title:"Pet Security",
					text:"The standard chunk of Lorem Ipsum used since."
				},
				{
					url:"./img/ser-card-3.png",
					title:"Night Care",
					text:"The standard chunk of Lorem Ipsum used since."
				},
				{
					url:"./img/ser-card-4.png",
					title:"Dog Walking",
					text:"The standard chunk of Lorem Ipsum used since."
				},
				{
					url:"./img/ser-card-5.png",
					title:"Puppy Sitting",
					text:"The standard chunk of Lorem Ipsum used since."
				},
				{
					url:"./img/ser-card-6.png",
					title:"Pet Sitting",
					text:"The standard chunk of Lorem Ipsum used since."
				},
			],
			store
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
	}
}

</script>

<template>

		<section id="service-jumbo">
			<div class="jumbo container">
				<div class="jumbo-text">
					<h2>Services</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
					<a href="#">
						<img src="/img/up-a.png" alt="up-a">
					</a>
				</div>
			</div>
		</section>

		<section id="passion" class="container">
			<div class="row">
				<div class="col-5 pe-5">
					<img src="/img/cani-service-passion.png" alt="cani-img">
				</div>
				<div class="col-7">

					<div class="passion-text">
						<div class="row passion-intro">
							<div class="col-auto">
								<img src="/img/dog-icon.png" alt="dog-icon">
							</div>
							<div class="col">
								<p>Service</p>
							</div>
						</div>
						<h2>Your Pet Our Passion</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
						</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="cards-sec" >
			<div class="container">
				<p class="intro-sect">Service</p>
				<h2>DogMilo Pet Care Services For Your Best Friends.</h2>
				<div class="row">
					<div v-for = "(card, i) in Cards" class="service-card m-3">

						<div class="my-card">

							<img :src="card.url" :alt="card.title" class="card-icon">
							<h3 class="card-title">{{ card.title }}</h3>
							<p class="card-text">{{ card.text }}</p>
							<div class="card-arrow">
								<div>
									<a href="#">
										<img src="/img/uparrow.png" alt="up-arrow" class="up-arrow">
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

</template>

<style lang ="scss" scoped>


	// Sezione Jumbotron
	#service-jumbo { 
		background-image: url(/img/jumbo-services-bg.png);
		background-repeat: no-repeat cover;
		background-size: 100%;
		background-position-y: center;

		.jumbo {
			color: white;
			padding: 150px 0px;

			.jumbo-text {
				vertical-align: middle;
				width: 50%;

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
	}

	// Sezione passion
	#passion {
		margin: 80px auto;

		.row {

			justify-content: center;
			align-items: center;

			img {
				width: 100%;
				height: auto;
			}

			.passion-intro {
				justify-content: center;
				align-items: center;
				line-height: 3rem;
	
				p {
					font-size: 1.1rem;
					font-weight: 600;
					color: #7F7045;
					vertical-align: middle;
				}
			}
			h2 {
				font-weight: 700;
			}
			p {
				font-weight: 300;
				width: 90%;
			}
		}

	}

	// sezione cards
	#cards-sec {

		background-color: #F5F5F5;
		text-align: center;
		padding: 0px 50px 100px;

		.intro-sect {
			font-size: 1.1rem;
			font-weight: 600;
			color: #7F7045;
			vertical-align: middle;
			padding-top: 80px;
			padding-bottom: 15px;
		}

		h2 {
			font-weight: 700;
			line-height: 3rem;
			width: 40%;
			margin: 20px auto;
		}

		.row {

			justify-content: center;
			.service-card {
				
				background-color: white;
				position: relative;
				text-align: center;
				width: calc(80% / 3);
				padding: 0;

				&:hover {
					background-color: #7F7045;
					transition: 0.4s;
				}

				
	
				.card-icon {
					margin: 40px;
					height: 150px;
					width: 150px;
					border-radius: 50%;
					border: 2px solid white;
					box-shadow: 0px 2px 8px 0px;
				}

				.card-title {
					font-weight: 600;
				}

				.card-text {
					color: black;
					font-weight: 500;
					font-size: 0.9rem;
					width: 50%;
					margin: 20px auto;
				}

				.card-arrow {
					background-color: transparent;
					width: 10px;
					height: 10px;
					border-top: 95px solid transparent;
					border-left: 100px solid #7F7045;

					a {
						background-color: #7F7045;
						
						img {
							position: absolute;
							bottom: 0;
							left: 0;
							width: 50px;
							height: 50px;
						}
					}

				}
			}
		}
	}


</style>

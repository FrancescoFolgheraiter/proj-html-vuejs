<script>
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
	<main>
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
				<div class="col">
					<img src="/img/cani-service-passion.png" alt="cani-img">
				</div>
				<div class="col">

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

		<section id="cards-sec" class="container">
			<div>
				<p>Service</p>
				<h2>DogMilo Pet Care Services For Your Best Friends.</h2>
				<div class="row">
					<div v-for = "(card, i) in Cards" class="service-card col-md-4">
						<img :src="card.url" :alt="card.title">
						<div>{{ card.title }}</div>
						<div>{{ card.text }}</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang ="scss" scoped>

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

	#passion {
		margin: 80px auto;

		.row {

			justify-content: space-around;

			.col img {
				width: 80%;
				height: auto;
			}

			.passion-intro {
				justify-content: center;
				line-height: 3rem;
	
				p {
					font-size: 1.1rem;
					font-weight: 600;
					color: #CE7C2A;
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

	.service-card {
		img {
			height: 150px;
			width: 150px;
			border-radius: 50%;
			border: 2px solid white;
		}
	}


</style>

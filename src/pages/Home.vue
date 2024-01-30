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
			],
			review:[
				{
					title:"Great Place",
					text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
					userName:"Tobias May",
					userType:"UI/Ux Designer",
					userImage:"t1.png",
					star:5
				},
				{
					title:"Great Place",
					text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
					userName:"Tobias May",
					userType:"UI/Ux Designer",
					userImage:"t1.png",
					star:5
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
				<div class = "col-5 d-flex flex-column justify-content-center">
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
				<div class="col-5">
					<div class="my-img-container">
						<img src="/img/about.png" alt="">
					</div>
				</div>
				<div class="col-7">
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
					<div class="col-12 d-flex">
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
					<div class="col-12 d-flex">
						<div class="my-img-container">
							<img src="/img/w-2.png" alt="">
						</div>
					</div>
					<div>
						<h4>
							Play Yards
						</h4>
						<p>
							It is long established fact that a readr will be distructed by the readable content of a page when lookign in its layout.
						</p>
					</div>
					<div class="col-12 d-flex">
						<div class="my-img-container">
							<img src="/img/w-1.png" alt="">
						</div>
					</div>
					<div>
						<h4>
							Monitor Your Pets
						</h4>
						<p>
							It is long established fact that a readr will be distructed by the readable content of a page when lookign in its layout.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--fine quarta sezione-->
	<!--quinta sezione-->
	<section id="review">
		<div class="container">
			<div class="row">
				<div class="col-5">
					<h3>
						[img] Review & Raiting
					</h3>
					<h4>
						Over 8000 Customers
					</h4>
					<h4>
						With 5-Star Review
					</h4>
					<p>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
					</p>
				</div>
				<div class="col-7 d-flex">
					<div v-for="(elem,i) in review" class="card-review">
						<div>
							{{ elem.star }}
						</div>
						<h4>
							{{ elem.title }}
						</h4>
						<p>
							{{ elem.text }}
						</p>
						<div class="user d-flex">
							<div class="my-img-container">
								<img :src="getImagePath('/img/'+ elem.userImage)" alt="">
							</div>
							<div>
								<h5>
									{{ elem.userName }}
								</h5>
								<h5>
									{{ elem.userType }}
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--fine quinta sezione-->
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
//section welcome
#welcome{
	background-image: url(/img/b.png);
	min-height: 500px;
	background-size: cover;
	> .container, .col-5{
		min-height: 500px;
	}

}
//section about
#about{
	min-height: 500px;
	background-color: $bg-main-section;
	background-image: url(/img/dog-logo.png);
	background-repeat: no-repeat;
	background-position: right;
	.my-img-container{
		width: 450px;

		img{
			width: 100% ;
		}
	}
}
//section service
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
			padding: 10px;
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
//section choos us
#choose-us{
//colonna dell'immagine grande della section choose us
	.col-5:first-child{
		.my-img-container{
					max-width: 600px;
				img{
					width: 100%;
				}	
		}
	}
//seconda colonna dove è contenuto il testo della section choose us
	.col-5:last-child{
		.my-img-container{
			max-width: 110px;
			img{
				width:100%;
			}
		}
	}
}
//section review
#review{
	.card-review{
		.my-img-container{
			width: 60px;
			
			img{
				width:100%;
				border-radius:50%;
			}
		}
	}
}

</style>

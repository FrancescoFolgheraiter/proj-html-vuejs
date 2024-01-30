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
					stars:4
				},
				{
					title:"Great Place",
					text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
					userName:"Tobias May",
					userType:"UI/Ux Designer",
					userImage:"t1.png",
					stars:5
				},
			],
			flagModal:false,
		};
	},
	components:{
		
	},
	methods:{
		getImagePath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
		openModal(){
			this.flagModal = !(this.flagModal)
		}
	}
}

</script>

<template>
	<!--Prima sezzione-->
	<section id="welcome">
		<div class = "container">
			<div class = "row">
				<div class = "col-5 d-flex flex-column justify-content-center text-white ">
					<h2 class="mb-4">
						Welcome to <br> <span class="fw-normal">DogMilo</span>  Pets
					</h2>
					<p class="mb-4">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
					<div class="d-flex align-items-center">
						<button id="get-started" class="me-4">
							Get Started
						</button>
						<button id="play" @focus="openModal">
							<i class="fa-regular fa-circle-play fa-2x"></i>
						</button>
						<div v-if="(this.flagModal)" id="modalYoutube" @click="openModal">
							<div>
								<iframe width="700" height="350" src="https://www.youtube.com/embed/c1NgIvjXCMA?si=6dZobOJ7YuC0HSC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
						</div>
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
					<div v-for="(elem,i) in review" :key="i" class="card-review">
						<div>
							<i class="fa-solid fa-star" v-for="(font,j) in 5" :key="j" :class="{yellowStar: elem.stars > j}"></i>
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
	min-height: 550px;
	background-size: cover;
	> .container, .col-5{
		min-height: 500px;

		#get-started{
			border:none;
			border-radius: 25px;
			padding:15px 20px;
			background-color: $second-color;
			color:white;
			font-weight: bold;

			&:hover{
				background-color: $bg-main-section;
				color:black;
				text-decoration: underline;
				transition: background-color .2s ease-in-out;
			}
		}

		#play{
			border:none;
			border-radius: 5px;
			padding:8px 20px;
			background-color: #00D7EC;
			color:white;
			transition: background-color .2s ease-in-out, color .2s ease-in-out;

			&:hover{
				background-color: $second-color;
			}

			&:focus{
				color:#173b67;
			}
		}
		#modalYoutube{
			width: 100vw;
			height: 100vh;
			opacity: 0.5;
			background-color: black;
			position: absolute;
			top:50%;
			left:50%;
			transform: translate(-50%, -50%);
			z-index: 1;
			>div{
				position: absolute;
				top:50%;
				left:50%;
				transform: translate(-50%, -50%);
				z-index: 2;
			}
		}
	}

}
//section about
#about{
	min-height: 500px;
	padding: 70px 0;
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
	padding: 70px 0;
	background-color: $bg-second-section;
	background-image: url(/img/dog-left.png);
	background-repeat: no-repeat;
	background-position-y: center;
	background-position: left;
	.card-service{
		background-color: $second-color;
		min-height: 350px;
		border-radius: 40%;

		&:hover{
			background-color: $main-color;
		}
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
	background-color: $bg-main-section;
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
		padding: 70px 0;
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
	background-color: $bg-main-section;
	min-height: 500px;
	padding: 70px 0;
	.card-review{
		background-color: $bg-second-section;
		padding:10px 10px;
		margin:0 20px;
		border-radius: 15px;
		border:1px solid grey;

		.yellowStar{
			color:goldenrod;
		}
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

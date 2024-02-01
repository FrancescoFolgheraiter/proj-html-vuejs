<script>
import  { store }  from './store.js';


export default{
	data() {
		return{

			store,

			lists: [
				{
					title: "Support",
					links: [
						"Contact Us",
						"Online Chat",
						"Whatsapp",
						"Telegram",
						"Snapchat",
					]
				},
				{
					title: "About",
					links: [
						"About Us",
						"Blog",
						"Career",
						"Job",
						"In Press",
					]
				},
				{
					title: "Faq",
					links: [
						"Account",
						"Order",
						"Delivery",
						"Payments",
						"Returns",
					]
				}
			],
		};
	},
	components:{
		
	},
	methods:{

	}
}

</script>

<template>
	<footer>
		<section class="footer-newsletter">
			<div class="newsletter">

				<div class="row">

					<div class="col-4">
						<div class="img-newsletter">
							<img src="/img/news.png" alt="news.png">
						</div>
					</div>
					<div class="col-8">
						<div class="sub-newsletter">
							<h4>Subscribe to Our Newsletter</h4>
							<form action="">
								<div class="input-group">
									<input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2">
									<span class="input-group-text" id="basic-addon2">@</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="lists-sections">
			<section class="get-in-touch">
				<h3>Get In Touch</h3>
				<p>
					Have a Question for us ?
					We'll answer your problem here
				</p>

				<div class="social-icon">

					<a href="#" v-for="(social, i) in store.socials"
					:style="{backgroundColor: social.color}">
						<i :class="social.icon"></i>
					</a>
				</div>
			</section>
			<section class="links-and-contacts">
				<ul>
					<li v-for="(listItem, i) in lists">
						<h3>
							{{ listItem.title }}
						</h3>
						<ul>
							<li v-for = "(link, j) in lists[i].links">
								<a href="#">
									{{ listItem.links[j] }}
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section class="contact-me">
				<h3>Contact Me</h3>

				<ul>
					<li>
						<div class="contact-me-icon">
							<img src="/img/send.png" alt="send.png">
						</div>
						<div class="adress">4500 Mercantile plaza , Suite 300 , Fort Worth , TX,76137,USA</div>
					</li>
					<li>
						<div class="contact-me-icon"></div>
						<div class="">+0 123-456-7890</div>
					</li>
					<li>
						<div class="contact-me-icon">
							<img src="/img/email.png" alt="email.png">
						</div>
						<div class="">info@example.com</div>
					</li>
				</ul>
			</section>
		</div>
		<hr>
		<section class="copywright">
			<p>
				Copywright © 2024 dogmilo-wordpress | Powered by dogmilo-wordpress
			</p>
		</section>
	</footer>
</template>

<style lang ="scss" scoped>

@use "../assets/scss/partials/variables.scss" as *;

	footer {

		background-color: black;
		color: white;

		h3 {
			color: $second-color;
		}

		li {
			font-size: 1rem;
			line-height: 2rem;
		}

		ul,
		ol,
		li {
			list-style: none;
			padding: 0px;
		}

		a {
			text-decoration: none;
			color: lightgray;
		}

		a:hover {
			text-decoration: underline;
		}

		// Sezione Newsletter
		.footer-newsletter {
	
			
			width: 70%;
			margin: 180px auto 0;
			color: white;
			position: relative;
			bottom: 100px;
			
			
			// Contenuto newsletter
			.newsletter {
				
				height: 200px;
				border-radius: 10px;
				background-color: $second-color;
				position: relative;
				
				
				.row{

					height: 100%;
					align-content: center;
					justify-content: space-evenly;
					.img-newsletter {
						width: 320px;
						position: absolute;
						bottom: 0;
						left: 0;
						margin: 0px 10px;
						
						img {
							width: 100%;
						}
					}

					.sub-newsletter {
						padding: 45px;

						h4 {
							margin-bottom: 20px;
						}

						* {
							border-radius: 0%;

						}

						form {

							
							span {
								border: black;
								line-height: 2rem;
								background-color: black;
								color: white;
								padding: 0.5rem 2rem;
								font-size: 1.8rem;
							}

							input {
								width: 80%;
								font-size: 1rem;
								
							}
						
						}
						

						
					}
				}
			}
		}
	
		.lists-sections {
			display: flex;
			justify-content: space-between;
			width: 80%;
			margin: 30px auto;
			color: lightgray;
	
			.get-in-touch {

				text-align: left;

				p {
					line-height: 2rem;
				}
	
				.social-icon {
					display: flex;
					text-align: center;
					vertical-align: middle;
					
					a {
						
						width: 25px;
						height: 25px;
						border-radius: 10%;
						margin-right: 10px;
						line-height: 50px;
						display: flex;
						justify-content: center;
						align-content: center;
						flex-wrap: wrap;
					}
				}
			}
	
			.links-and-contacts {
	
				width: 100%;
	
				
				> ul {
					display: flex;
					justify-content: space-evenly;
				}
			}

			.contact-me {

				ul li {
					display: flex;

					.adress{
						line-height: 1.2rem;
					}

					.contact-me-icon {
						width: 40px;

						img {
							width: 20px;
							height: 20px;
						}
					}
				}

			}
		}

		hr{
			width: 90%;
			margin: 0 auto;
		}

		.copywright {
			color: grey;
			text-align: center;
			padding: 30px;
			font-size: 0.9rem;
		}
	}

</style>
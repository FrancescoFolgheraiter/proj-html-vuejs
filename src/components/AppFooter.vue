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
				<div class="img-newsletter">
					<img src="/img/news.png" alt="news.png">
				</div>
				<div class="sub-newsletter">
					<h2>Subscribe to Our Newsletter</h2>
					<form action="">
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2">
							<span class="input-group-text" id="basic-addon2">@</span>
						</div>
					</form>
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
				<p v-for="(social, i) in store.socials">
					<i :class="social.icon"></i>
				</p>
			</section>
			<section class="links-and-contacts">
				<ul>
					<li v-for="(listItem, i) in lists">
						<h3>
							{{ listItem.title }}
						</h3>
						<ul>
							<li v-for = "(link, j) in lists[i].links">
								{{ listItem.links[j] }}
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section class="contact-me">
				<h3>Contact Me</h3>

				<ul>
					<li>
						<div class="">freccia</div>
						<div class="">4500 Mercantile plaza , Suite 300 , Fort Worth , TX,76137,USA</div>
					</li>
					<li>
						<div class=""></div>
						<div class="">+0 123-456-7890</div>
					</li>
					<li>
						<div class="">posta</div>
						<div class="">info@example.com</div>
					</li>
				</ul>
			</section>
		</div>
	</footer>
</template>

<style lang ="scss" scoped>
</style>
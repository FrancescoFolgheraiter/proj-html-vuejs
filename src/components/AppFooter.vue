<script>
export default{
	data() {
		return{
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
			Socials: [],
			Contacts:[]
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
		<section class="links-and-contacts">
			<ul>
				<li v-for="(listItem, i) in lists" >
					<ul>{{ listItem.title }}
						<li v-for = "(link, j) in lists[i].links">
							{{ listItem.links[j] }}
						</li>
					</ul>
					
				</li>
			</ul>
		</section>

		footer
	</footer>
</template>

<style lang ="scss" scoped>
</style>
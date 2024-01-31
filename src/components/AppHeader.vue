<script>
export default{
	data() {
		return{
			socials: [
				{
					app: "Facebook",
					color: "#3744B3",
					icon: "fa-brands fa-facebook"
				},
				{
					app: "Twitter",
					color: "#7CC6C5",
					icon: "fa-brands fa-twitter"
				},
				{
					app: "Instagram",
					color: "#A329A8",
					icon: "fa-brands fa-instagram"
				},
				{
					app: "Linkedin",
					color: "#1164C2",
					icon: "fa-brands fa-linkedin"
				},
				{
					app: "Pinterest",
					color: "#B61220",
					icon: "fa-brands fa-pinterest"
				}

			],
			navigatioItems: [
				{
					label: 'Home',
					route: '/'
				},
				{
					label: 'About',
					route: '/about'
				},
				{
					label: 'Services',
					route: '/services'
				},
				{
					label: 'Contact',
					link: '/contact'
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
	<header>
		<section class="info-header">
			<div class="container">
				<div class="row">
					<div class="col-3">
						<i class="fa-solid fa-envelope"></i>
						info@example.com
					</div>
					<div class="col">
						<i class="fa-solid fa-phone"></i>
						+0 123-456-7890
					</div>
					<div class="col socials">
						<div v-for="(social, i) in socials" 
						:style="{backgroundColor: social.color}">
							<i :class="social.icon"></i>
						</div>
						
					</div>
				</div>
			</div>
		</section>

		<section class="main-header">
			<div class="container">
				<div class="row">

					<div class="col-3 logo-container">
						<img src="/img/logo.png" alt="">
					</div>

					<div class="col-9 prova-nav">

						<nav>
							<ul>
								<li>
									<routerLink :to="{name: 'home'}">
										Home
									</routerLink>									
								</li>
								<li>
									<routerLink :to="{name: 'about'}">
										About
									</routerLink>									
								</li>
								<li>
									<routerLink :to="{name: 'service'}">
										Services
									</routerLink>									
								</li>
								<li>
									Training
								</li>
								<li>
									Blogs
								</li>
								<button class="rounded-pill">
									Get In Touch
								</button>
							</ul>
						</nav>
<!--<nav class="navbar navbar-expand-lg">
						
							<div id="navbarNavDropdown">
								<ul class="navbar-nav">
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Home
										</a>
										<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
											<a class="dropdown-item" href="#">Home One</a>
											<a class="dropdown-item" href="#">Home Two</a>
											<a class="dropdown-item" href="#">Home Three</a>
										</div>
									</li>

									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											About
										</a>
										<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
											<a class="dropdown-item" href="#">About One</a>
											<a class="dropdown-item" href="#">About Two</a>
										</div>
									</li>

									<li class="nav-item active">
										<a class="nav-link" href="#">Services <span class="sr-only">(current)</span></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Training</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">Blogs</a>
									</li>

									<button class="rounded-pill">
										Get In Touch
									</button>

								
								</ul>
							</div>
						</nav> -->
						
					</div>

				</div>
			</div>
		</section>
			

			
	</header>
</template>

<style lang ="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.info-header {
	background-color: $main-color;
	height: 50px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	color: white;

}
.fa-envelope,
.fa-phone {
	color: $second-color;
	font-size: 1.3em;
}
.socials {
	width: auto;
	display: flex;
	justify-content: flex-end;


	>div {
		display: flex;
		flex-wrap: wrap;
		width: 30px;
		height: 30px;
		border-radius: 10%;
		margin: 0 3px;
		justify-content: center;
		align-content: center;

		>i {
			color: white;
		}
	}
}

.main-header {	
	height: 80px;
	display: flex;	
	flex-wrap: wrap;
	align-items: center;
}
.logo-container {
	align-self: center;
}
button {
	background-color: $second-color;
	border: none;
	border-radius: 5%;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 1em;
	font-weight: bold;
}
.col-9 {
	justify-content: space-between;
	align-items: center;
}
.prova-nav {
	nav {
		color: #fff;
		padding: 10px;

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;

			li, a {
				display: inline-block;
				margin-right: 10px;	
				color: $text-color;
				text-decoration: none;
				
				

			}
		}
	
	}
}
.navbar-expand-lg {
    flex-wrap: wrap;
    justify-content: center;
	margin: 0 20px;
	font-weight: 600;
	font-size: larger;
	color: $text-color;
		
		:not(button):hover {
			color: $second-color
		}

}
.navbar-nav {
	display: flex;
    justify-content: space-evenly;
    align-items: baseline;
}

</style>

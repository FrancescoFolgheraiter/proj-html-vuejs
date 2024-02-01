<script>
import  { store }  from './store.js';

export default{
	data() {
		return{
			store,
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
			],
			homeDropdownOpen: false,
			aboutDropdownOpen: false,
			activeDropdown: null,
		};
	},
	components:{
		
	},
	methods:{
		showHomeDropdown(){
			this.homeDropdownOpen = true
		},
		hideHomeDropdown() {
			this.homeDropdownOpen = false
		},
		showAboutDropdown() {
			this.aboutDropdownOpen = true
		},
		hideAboutDropdown() {
			this.aboutDropdownOpen = false
		}

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
						<div v-for="(social, i) in store.socials" 
						:style="{backgroundColor: social.color}">
							<a href="#">
								<i :class="social.icon"></i>
							</a>							
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

						<nav class="navbar navbar-expand-lg navbar-light">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item dropdown" 
									@mouseover="showHomeDropdown" 
									@mouseleave="hideHomeDropdown"
									>
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Home											
									</a>
									<div class="dropdown-menu" 
									v-if="homeDropdownOpen"
									:class="{ show: homeDropdownOpen }" aria-labelledby="navbarDropdown">
										<a class="dropdown-item" href="#">
											<routerLink :to="{name: 'home'}">
											Home One
											</routerLink>
										</a>
										<a class="dropdown-item" href="#">
											<routerLink :to="{name: 'home'}">
											Home Two
											</routerLink>
										</a>
										<a class="dropdown-item" href="#">
											<routerLink :to="{name: 'home'}">
												Home Three
											</routerLink>
										</a>
									</div>							
								</li>


								<li class="nav-item dropdown" 
									@mouseover="showAboutDropdown" 
									@mouseleave="hideAboutDropdown" 
									>
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										About
									</a>
									<div class="dropdown-menu" 
									v-if="aboutDropdownOpen"
									:class="{ show: aboutDropdownOpen }" aria-labelledby="navbarDropdown">
										<a class="dropdown-item" href="#">
											<routerLink :to="{name: 'about'}">
												About One
											</routerLink>
										</a>
										<a class="dropdown-item" href="#">
											<routerLink :to="{name: 'about'}">
												About Two
											</routerLink>
										</a>
									</div>							
								</li>

								<li class="nav-item">
									<a>
										<routerLink :to="{name: 'service'}">
											Services
										</routerLink>
									</a>
																		
								</li>
								<li class="nav-item">
									<a href="#">
										Training
									</a>
									
								</li>
								<li class="nav-item">
									<a href="#">
										Blogs
									</a>
									
								</li>
								<button class="rounded-pill nav-item">
									Get In Touch
								</button>
							</ul>
						</nav>

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

		a {
			padding: 5px;

			>i {
				color: white;
			}
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
	width: 180px;
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
			margin-left: 60px;
			padding: 0;
			li {
				width: 100px;
				margin: 0 10px;
			}
			li, a {
				display: inline-block;
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

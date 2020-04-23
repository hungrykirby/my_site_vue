<template>
	<header class="header">
		<div class="header-title">
			<h1><a href="/">きゃりかつルーム</a></h1>
		</div>
		<nav>
			<input id="nav-input" type="checkbox" class="nav-unshown" v-model="isChecked">
			<label for="nav-input" id="nav-open">
				<span></span>
			</label>
			<label for="nav-input" id="nav-close" class="nav-unshown nav-close-common"></label>
			<label for="nav-input" id="nav-close2" class="nav-unshown nav-close-common"></label>
			<div id="nav-content">
				<ul>
					<li>
						<nuxt-link to="/" @click.native="spHeaderClick">Top</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/about" @click.native="spHeaderClick">About</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/contact" @click.native="spHeaderClick">Contact</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>
<script>
export default {
	data(){
		return{
			isChecked: false
		}
	},
	methods:{
		spHeaderClick(){
			this.isChecked = false;
		}
	}
}
</script>
<template>
	<v-app class="app">
		<div class="head">
			<span class="title">Test Frontend</span>
		</div>
		<div class="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/pokemon">Pokemon</router-link> |
			<router-link to="/function1">Function 1</router-link> |
			<router-link to="/function2">Function 2</router-link> |
			<router-link to="/function3">Function 3</router-link>
		</div>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
  
</template>

<style lang="scss">
.app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	color: #2c3e50;
	padding: 10px;
}
.head {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	border-radius: 7px;
	background-color: #828282;
	color: white;
}
.nav {
  	padding: 30px;
	margin: auto;
}
.nav a {
	font-size: 20px;
 	font-weight: bold;
  	color: #2c3e50 !important;
	margin: 0px 10px;
	text-decoration: none;
}
.nav a.router-link-exact-active {
  	color: #42b983 !important;
}
</style>

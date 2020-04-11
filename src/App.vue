<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Roboto, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		.ta-l {
			text-align: left;
		}
		.ta-a {
			text-align: center;
		}
		button {
			margin-bottom: 0.2rem;
			border: 1px solid #616161;
			background-color: white;
			padding: 0.6rem 1rem;
			width: 14rem;
			text-transform: uppercase;
			font-weight: bold;
			cursor: pointer;
		}
		p {
			margin: 0;
		}
	}

	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>

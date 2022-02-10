<template>
    <v-row>
        <v-col cols="10" class="container">
            <v-row>
				<v-col cols="12" class="d-flex justify-center mb-5">
					<span class="title-form">Test fetch API</span>
				</v-col>
			</v-row>
            <v-row>
                <v-col
                    cols="2"
                    v-for="(item, index) in pokemonList"
                    :key="`${item.name}-${index}`"
                    class="d-flex justify-center align-center"
                >
                    <div v-if="loading">
                        <div class="skeleton-box image-box"></div>
                        <div class="skeleton-box name-box mt-2"></div>
                    </div>
                    <div v-else>
                        <div class="image-box" :style="`background-color: ${bgColorFormType(item.types[0].type.name)};`">
                            <v-img
                                :src="item.sprites.front_default"
                                :lazy-src="item.sprites.front_default"
                                max-width="100"
                            ></v-img>
                        </div>
                        <div class="name-box mt-2" :style="`background-color: #293242`">
                            {{ item.name }}
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Pokemon',
	data() {
		return {
			pokemonList: [],
			loading: false
		}
	},
	created() {
		this.onFetchPokemonApi()
	},
	methods: {
		async onFetchPokemonApi () {
			this.loading = true
			try {
				const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=104&offset=0')
				const pokemonArr = response.data.results
				let newPokemonArray = []
				newPokemonArray = pokemonArr.reduce((array, d) => {
					array.push(this.onGetPokemon(d.name))
					return array
				}, [])
				await Promise.all(newPokemonArray)

				this.loading = false
			} catch (error) {
				console.log('error -->', error)
			}
		},
		onGetPokemon (pokemonName) {
			return new Promise(async (resolve, reject) => {
				const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
				this.pokemonList.push(res.data)
				resolve({ success: true })
			})
		},
		bgColorFormType (type) {
			switch (type) {
			case 'grass':
				return '#D0F4DE'
			case 'fire':
				return '#F898A4'
			case 'water':
				return '#A8D1E7'
			case 'bug':
				return '#FFE2D1'
			case 'poison':
				return '#E8CFF8'
			case 'flying':
				return '#EBECE7'
			case 'normal':
				return '#E1FEFE'
			case 'electric':
				return '#FCF6BD'
			case 'ground':
				return '#B5A3A1'
			case 'fairy':
				return '#F8D5F8'
			default:
				return 'white'
			}
		}
	},
}
</script>

<style lang="scss">
.container {
	margin: auto;
	background-color: #E8E8E8;
	border-radius: 7px;

    .skeleton-box {
        display: inline-block;
        height: 1em;
        position: relative;
        overflow: hidden;
        background-color: #DDDBDD;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
                90deg,
                rgba(rgb(176, 187, 204), 0) 0,
                rgba(rgb(176, 187, 204), 0.2) 20%,
                rgba(rgb(176, 187, 204), 0.5) 60%,
                rgba(rgb(176, 187, 204), 0)
            );
            animation: loading 1.5s infinite;
        }

        @keyframes loading {
            100% { transform: translateX(100%); }
        }
    }
    .image-box {
        width: 200px;
        height: 180px;
        border-radius: 7px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .name-box {
        width: 200px;
        height: 40px;
        border-radius: 7px;
        font-weight: bold;
        color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

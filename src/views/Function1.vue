<template>
    <v-row>
        <v-col cols="8" class="container">
            <v-row>
				<v-col cols="12" class="d-flex justify-center mb-5">
					<span class="title-form">Function 1</span>
				</v-col>
			</v-row>
            <v-row>
                <v-col
                    cols="4"
                    v-for="(item, index) in newProductData"
                    :key="`${item.name}-${index}`"
                >
                    <v-card
                        class="mx-auto"
                        max-width="344"
                    >
                        <v-card-text>
                            <p class="product-name">
                                Product name: {{ item.name }}
                            </p>
                            <span class="text--primary">
                                Product weight: {{ item.totalSubProductWeight }}
                            </span>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
	name: 'Function1',
	data() {
		return {
			newProductData: []
		}
	},
	created() {
		this.testFunction()
	},
	methods: {
		testFunction () {
			const productData = require('../exam-data.json')
			this.newProductData = productData.filter(e => !e.is_editable_price).map((e) => {
				let sumWeight = 0
				e.products.forEach(e => {
					sumWeight += e.weight
				})
				return {
					name: e.name,
					totalSubProductWeight: sumWeight
				}
			})
		}
	},
}
</script>

<style lang="scss">
.container {
    margin: auto;
	background-color: #E8E8E8;
	border-radius: 7px;

    .product-name {
        font-size: 18px;
        font-weight: bold;
        color: black;
    }
}
</style>

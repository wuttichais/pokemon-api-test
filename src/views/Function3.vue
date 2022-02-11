<template>
    <v-row>
        <v-col cols="4" class="container">
            <v-row>
				<v-col cols="12" class="d-flex justify-center mb-5">
					<span class="title-form">Function 3</span>
				</v-col>
			</v-row>
            <v-row>
                <v-col offset="2">
                    <p>Array 1: [] --> {{ testFunction(this.arr1) }}</p>
                    <p>Array 2: [1] --> {{ testFunction(this.arr2) }}</p>
                    <p>Array 3: [1,2,3] --> {{ testFunction(this.arr3) }}</p>
                    <p>Array 4: [1,1] --> {{ testFunction(this.arr4) }}</p>
                    <p>Array 5: [1,2,3,4,5,6] --> {{ testFunction(this.arr5) }}</p>
                    <p>Array 6: [1,5,3,2,5,10] --> {{ testFunction(this.arr6) }}</p>
                    <p>Array 7: [100,5,3,2,99] --> {{ testFunction(this.arr7) }}</p>
                    <p>Array 8: [35,5,3,2,5,100] --> {{ testFunction(this.arr8) }}</p>
                    <p>Array 9: [1,5,101,2,5,10] --> {{ testFunction(this.arr9) }}</p>
                    <p>Array 10: [10,10,9] --> {{ testFunction(this.arr10) }}</p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
	name: 'Function3',
	data() {
		return {
			arr1: [],
			arr2: [1],
			arr3: [1,2,3],
			arr4: [1,1],
			arr5: [1,2,3,4,5,6],
			arr6: [1,5,3,2,5,10],
			arr7: [100,5,3,2,99],
			arr8: [35,5,3,2,5,100],
			arr9: [1,5,101,2,5,10],
			arr10: [10,10,9]
		}
	},
	methods: {
		testFunction (arrayData) {
			let max = 0, 
				result = 0, 
				array = [], 
				beforeMax = 0

			array = arrayData
			if (array.length === 0) {
				result = null
				return result
			} else if (array.length === 1) {
				result = array[0]
				return result
			}

			for (let index = 0; index < array.length; index++) {
				const element = array[index]

				if (element >= max) {
					beforeMax = max
					max = element
				}

				if ((element < max && element > result) || beforeMax === max) {
					result = element
				} else if (beforeMax < max) {
					result = beforeMax
				}
			}
			
			return result
		}
	},
}
</script>

<style lang="scss">
.container {
    margin: auto;
	background-color: #E8E8E8;
	border-radius: 7px;
}
</style>

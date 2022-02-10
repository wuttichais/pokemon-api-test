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
                    <p>Array 1: [] --> </p>
                    <p>Array 2: [1] --> </p>
                    <p>Array 3: [1,2,3] --> </p>
                    <p>Array 4: [1,1] --> </p>
                    <p>Array 5: [1,2,3,4,5,6] --> </p>
                    <p>Array 6: [1,5,3,2,5,10] --> </p>
                    <p>Array 7: [100,5,3,2,99] --> </p>
                    <p>Array 8: [35,35,5,3,2,5,100] --> </p>
                    <p>Array 9: [1,5,101,2,5,10] --> </p>
                    <p>Array 10: [10,10,9,9] --> </p>
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
			arr8: [35,35,5,3,2,5,100],
			arr9: [1,5,101,2,5,10],
			arr10: [10,10,9,9]
		}
	},
	created() {
		const arr = this.arr10
		const n = arr.length
		this.testFunction(arr, n)
	},
	methods: {
		testFunction (arr, arrSize) {
			let max = null, result = null
            
			for (const value of arr) {
				if (arrSize === 0) {
					result = null
				} else if (arrSize === 1) {
					result = arr[0]
				} else if (value > max) {
					[result, max] = [max, value]
				} else if (value < max && value > result) {
					result = value
				}
			}
			console.log('result -->', result)
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

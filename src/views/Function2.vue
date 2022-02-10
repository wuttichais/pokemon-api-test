<template>
    <v-row>
        <v-col cols="4" class="container">
            <v-row>
				<v-col cols="12" class="d-flex justify-center mb-5">
					<span class="title-form">Function 2</span>
				</v-col>
			</v-row>
            <v-row>
                <v-col offset="2">
                    <p class="default-date">Default Date: {{ defaultDate }}</p>
                    <p>US Date: {{ usDate }}</p>
                    <p>TH Date: {{ thDate }}</p>
                    <p>Number of Days: {{ numberOfday }}</p>
                    <p>Quarter: {{ quarter }}</p>
                    <p>Unix timestamp: {{ unixTimestamp }}</p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
	name: 'Function2',
	data() {
		return {
			defaultDate: '2020-08-10T14:54:52+07:00',
			usDate: null,
			thDate: null,
			numberOfday: null,
			quarter: null,
			unixTimestamp: null
		}
	},
	created() {
		this.testFunction()
	},
	methods: {
		testFunction () {
			this.defaultDate = '2020-08-10T14:54:52+07:00'
			this.usDate = new Date(this.defaultDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				hour12: false,
				minute:'2-digit'
			})
			this.thDate = new Date(this.defaultDate).toLocaleDateString('th-TH', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
			const month = new Date(this.defaultDate).getMonth() + 1
			const year = new Date(this.defaultDate).getFullYear()
			this.numberOfday = new Date(year, month, 0).getDate()
			this.quarter = Math.ceil(month / 3)
			this.unixTimestamp = new Date(this.defaultDate).getTime() / 1000
		}
	},
}
</script>

<style lang="scss">
.container {
    margin: auto;
	background-color: #E8E8E8;
	border-radius: 7px;

    .default-date {
        font-weight: bold;
    }
}
</style>

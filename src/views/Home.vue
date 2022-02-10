<template>
	<v-row>
		<v-col cols="8" class="container py-10 my-10">
			<v-row>
				<v-col cols="12" class="d-flex justify-center">
					<span class="title-form">Test form and validation</span>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4" class="d-flex justify-end align-center">
					<span class="title-text">First Name</span>
				</v-col>
				<v-col cols="7" class="d-flex justify-start">
					<v-text-field
						v-model="firstName"
						placeholder="First Name"
						solo
						class="input"
						:error-messages="firstNameErrors"
						@input="$v.firstName.$touch()"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4" class="d-flex justify-end align-center">
					<span class="title-text">Last Name</span>
				</v-col>
				<v-col cols="7" class="d-flex justify-start">
					<v-text-field
						v-model="lastName"
						placeholder="Last Name"
						solo
						class="input"
						:error-messages="lastNameErrors"
						@input="$v.email.$touch()"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4" class="d-flex justify-end align-center">
					<span class="title-text">E-mail</span>
				</v-col>
				<v-col cols="7" class="d-flex justify-start">
					<v-text-field
						v-model="email"
						placeholder="E-mail"
						solo
						class="input"
						:error-messages="emailErrors"
						@input="$v.email.$touch()"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4" class="d-flex justify-end align-center">
					<span class="title-text">Password</span>
				</v-col>
				<v-col cols="7" class="d-flex justify-start">
					<v-text-field
						v-model="password"
						placeholder="Password"
						solo
						class="input"
						:error-messages="passwordErrors"
						:append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
						:type="isShowPassword ? 'text' : 'password'"
						@click:append="isShowPassword = !isShowPassword"
						@input="$v.password.$touch()"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4" class="d-flex justify-end align-center">
					<span class="title-text">Verify Password</span>
				</v-col>
				<v-col cols="7" class="d-flex justify-start">
					<v-text-field
						v-model="verifyPassword"
						placeholder="Verify Password"
						solo
						class="input"
						:error-messages="verifyPasswordErrors"
						:append-icon="isShowVerifyPassWord ? 'mdi-eye' : 'mdi-eye-off'"
						:type="isShowVerifyPassWord ? 'text' : 'password'"
						@click:append="isShowVerifyPassWord = !isShowVerifyPassWord"
						@input="$v.verifyPassword.$touch()"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4" class="d-flex justify-end align-center">
					<span class="title-text">Gender</span>
				</v-col>
				<v-col cols="7" class="d-flex justify-start">
					<v-select
						v-model="gender"
						item-text="text"
						item-value="value"
						solo
						class="input"
						:items="genderList"
						:menu-props="{ overflowY: true, bottom: true, nudgeBottom: 50 }"
						:error-messages="genderErrors"
						@input="$v.gender.$touch()"
					></v-select>
				</v-col>
			</v-row>
			<v-row>
				<v-col offset="4" cols="7" class="d-flex justify-start mb-5">
					<v-btn
						color="success"
						@click="submitForm"
					>
						Submit
					</v-btn>
				</v-col>
			</v-row>
			<v-row v-show="isShowResult">
				<v-col offset="1" class="result">
					<p class="result-title">Result:</p>
					<p>First Name: {{ firstName }}</p>
					<p>Last Name: {{ lastName }}</p>
					<p>E-mail: {{ email }}</p>
					<p>Gender: {{ gender }}</p>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
	name: 'Home',
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			verifyPassword: '',
			gender: '',
			isShowPassword: false,
			isShowVerifyPassWord: false,
			genderList: [
				{ text: 'Please Select', value: '' },
				{ text: 'Male', value: 'Male' },
				{ text: 'Female', value: 'Female' },
			],
			isShowResult: false
		}
	},
	validations: {
		firstName: {
			required,
		},
		lastName: {
			required,
		},
		email: {
			required,
			email
		},
		password: {
			required,
			minLength: minLength(6),
			maxLength: maxLength(12)
		},
		verifyPassword: {
			required,
			sameAsPassword: sameAs('password')
		},
		gender: {
			required,
		},
	},
	computed: {
		firstNameErrors () {
			const errors = []
			if (!this.$v.firstName.$dirty) return errors
			!this.$v.firstName.required && errors.push('First Name is required!')
			return errors
		},
		lastNameErrors () {
			const errors = []
			if (!this.$v.lastName.$dirty) return errors
			!this.$v.lastName.required && errors.push('Last Name is required!')
			return errors
		},
		emailErrors () {
			const errors = []
			if (!this.$v.email.$dirty) return errors
			!this.$v.email.required && errors.push('E-mail is required!')
			!this.$v.email.email && errors.push('Invalid email format!')
			return errors
		},
		passwordErrors () {
			const errors = []
			if (!this.$v.password.$dirty) return errors
			!this.$v.password.required && errors.push('Password is required!')
			!this.$v.password.minLength && errors.push(`Password must be between ${this.$v.password.$params.minLength.min} - ${this.$v.password.$params.maxLength.max} characters!`)
			!this.$v.password.maxLength && errors.push(`Password must be between ${this.$v.password.$params.minLength.min} - ${this.$v.password.$params.maxLength.max} characters!`)
			return errors
		},
		verifyPasswordErrors () {
			const errors = []
			if (!this.$v.verifyPassword.$dirty) return errors
			!this.$v.verifyPassword.required && errors.push('Verify Password is required!')
			!this.$v.verifyPassword.sameAsPassword && errors.push('Passwords do not match!')
			return errors
		},
		genderErrors () {
			const errors = []
			if (!this.$v.gender.$dirty) return errors
			!this.$v.gender.required && errors.push('Gender is required!')
			return errors
		},
	},
	methods: {
		submitForm() {
			this.$v.$touch()

			if (!this.$v.$invalid) {
				this.isShowResult = true
			} else {
				this.isShowResult = false
			}
		}
	},
}
</script>

<style lang="scss">
.container {
	width: 500px;
	margin: auto;
	background-color: #E8E8E8;
	border-radius: 7px;
	padding: 20px 0px;
	.title-form {
		font-size: 20px;
		font-weight: bold;
	}
	.title-text {
		font-size: 16px;
		font-weight: bold;
	}
	.input {
		height: 55px;
	}
	.result {
		.result-title {
			font-size: 16px;
			font-weight: bold;
		}
		p {
			margin: 0px;
		}
	}
}
	
</style>

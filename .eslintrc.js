module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/base',
		'plugin:vue/essential',
		// 'eslint:recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': 'warn',
		'no-debugger': 'warn',
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		indent: ['error', 'tab'],
		'no-mixed-spaces-and-tabs': 'off',
		'vue/html-indent': 'off',
	},
}

module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'standard'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'react/react-in-jsx-scope': 0,
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'never'
		],
		'no-unused-vars': [
			'warn',
			{ 
				'vars': 'all', 
				'args': 'after-used', 
				'ignoreRestSiblings': false
			}
		],
		"no-multiple-empty-lines": [
			'warn', 
			{
				"max": 2
			}
		],
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
}

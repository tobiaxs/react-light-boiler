module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"react-app/jest",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["prettier", "simple-import-sort"],
	rules: {
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/accessible-emoji": "off",
		"react/prop-types": "off",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
};

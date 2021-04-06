module.exports = {
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
	},
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	setupFiles: ['<rootDir>/src/setupTest.js'],
};
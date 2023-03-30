module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testTimeout: 15_000,
	// fakeTimers: { enableGlobally: true },
	roots: ['<rootDir>/src'],
	testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
}

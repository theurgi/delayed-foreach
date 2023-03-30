import { delayedForEach, delayedForEachSync } from './main'

describe('delayedForEach', () => {
	it('should work', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		await delayedForEach({
			array,
			delay: 100,
			forEach: async (item) => {
				result.push(item)
			},
		})
		expect(result).toEqual(array)
	})
	it('should work with a delay of 0', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		await delayedForEach({
			array,
			delay: 0,
			forEach: async (item) => {
				result.push(item)
			},
		})
		expect(result).toEqual(array)
	})
	it('should work with a forEach that returns a promise', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		await delayedForEach({
			array,
			delay: 100,
			forEach: async (item) => {
				await new Promise((resolve) => setTimeout(resolve, 100))
				result.push(item)
			},
		})
		expect(result).toEqual(array)
	})
	it('should take the expected amount of time', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		const startTime = Date.now()
		await delayedForEach({
			array,
			delay: 100,
			forEach: async (item) => {
				await new Promise((resolve) => setTimeout(resolve, 100))
				result.push(item)
			},
		})
		const endTime = Date.now()
		expect(endTime - startTime).toBeGreaterThanOrEqual(300)
	})
	it('should call the forEach function the expected amount of times', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		const forEach = jest.fn(async (item) => {
			await new Promise((resolve) => setTimeout(resolve, 100))
			result.push(item)
		})
		await delayedForEach({
			array,
			delay: 100,
			forEach,
		})
		expect(forEach).toHaveBeenCalledTimes(array.length)
	})
})

describe('delayedForEachSync', () => {
	it('should work', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		await delayedForEachSync({
			array: array,
			delay: 100,
			forEach: (item) => {
				result.push(item)
			},
		})
		expect(result).toEqual(array)
	})
	it('should work with a delay of 0', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		await delayedForEachSync({
			array: array,
			delay: 0,
			forEach: (item) => {
				result.push(item)
			},
		})
		expect(result).toEqual(array)
	})
	it('should take the expected amount of time', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		const startTime = Date.now()
		await delayedForEachSync({
			array: array,
			delay: 100,
			forEach: (item) => {
				result.push(item)
			},
		})
		const endTime = Date.now()
		expect(endTime - startTime).toBeGreaterThanOrEqual(300)
	})
	it('should call the forEach function the expected amount of times', async () => {
		const array = [1, 2, 3]
		const result: number[] = []
		const forEach = jest.fn((item) => {
			result.push(item)
		})
		await delayedForEachSync({
			array: array,
			delay: 100,
			forEach,
		})
		expect(forEach).toHaveBeenCalledTimes(array.length)
	})
})

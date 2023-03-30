export type DelayedForEachOptions<T> = {
	array: T[]
	delay: number
	forEach: (item: T) => void
	onCompletion?: () => void
}

/**
 * Synchronously loops over an array and executes a function on each element of
 * the array, pausing for a specified delay between iterations.
 *
 * @param options - An object containing the options for the function.
 * @param options.array - The array to loop over.
 * @param options.delay - The delay, in milliseconds, between iterations.
 * @param options.forEach - The function to execute on each element of the
 * array.
 * @param options.onCompletion - An optional function to call when the loop is
 * completed.
 * @returns void
 */
export function delayedForEachSync<T>({
	array,
	delay,
	forEach,
	onCompletion,
}: DelayedForEachOptions<T>): void {
	for (const item of array) {
		forEach(item)
		if (delay > 0) {
			const start = Date.now()
			while (Date.now() - start < delay) {
				/* empty */
			}
		}
	}
	if (onCompletion) {
		onCompletion()
	}
}

/**
 * Asynchronously loops over an array and executes a function on each element of
 * the array, pausing for a specified delay between iterations.
 *
 * @param options - An object containing the options for the function.
 * @param options.array - The array to loop over.
 * @param options.delay - The delay, in milliseconds, between iterations.
 * @param options.forEach - The function to execute on each element of the
 * array.
 * @param options.onCompletion - An optional function to call when the loop is
 * completed.
 * @returns A promise that resolves when the loop is completed.
 */
export async function delayedForEach<T>({
	array,
	delay,
	forEach,
	onCompletion,
}: DelayedForEachOptions<T>): Promise<void> {
	for (const item of array) {
		await forEach(item)
		if (delay > 0) {
			await new Promise((resolve) => setTimeout(resolve, delay))
		}
	}

	if (onCompletion) {
		onCompletion()
	}
}

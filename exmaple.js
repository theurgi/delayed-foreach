import DelayedForEach from './main.js'

// Construct a new instance of DelayedForEach with an object containing:
// - an array as `array`. Required
// - a number in milliseconds as `delay`. Required
// - a function as `forEach`, called on each element of `array`. Required
// - a function as `onCompletion` to be called when all done. Optional
const dfe = new DelayedForEach({
  array: [1, 2, 3, 4, 5],
  delay: 1000,
  forEach: el => console.log(el),
  onCompletion: () => console.log('done')
})

// Finally run the instance of DelayedForEach by calling its `run` method
dfe.run()

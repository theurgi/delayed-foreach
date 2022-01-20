export default class DelayedForEach {
  constructor({
    array = [],
    delay = 0,
    forEach = arr => {},
    onCompletion = null
  } = {}) {
    this.array = array
    this.len = array.length
    this.currentLen = this.len
    this.delay = delay
    this.forEach = forEach
    this.onCompletion = onCompletion
  }

  run() {
    if (this.currentLen === this.len) {
      this.currentLen--
      this.forEach(this.array[this.currentLen])
      return this.run()
    } else {
      const interval = setInterval(() => {
        if (this.currentLen--) {
          this.forEach(this.array[this.currentLen])
        } else {
          clearInterval(interval)
          if (this.onCompletion) this.onCompletion()
        }
      }, this.delay)
    }
  }
}

# delayed-foreach

Sometimes you want to call an API endpoint many, many times (for example, inside of a loop). But, there are rate limits imposed.

That's why this package was created, to call API endpoints at regular intervals without exceeding the rate limit.

However, `delayed-foreach` can have many other creative uses, like triggering sounds to make music or generating algorithmic art etc. Use your imagination!

## Usage

See `example.js` for usage details. Try running it!

```
cd delayed-foreach
node example.js
```

## To do

- [ ] write tests
- [ ] rewrite in TypeScript
- [ ] add an option to run the `forEach` function immediately or after the initial delay
- [ ] improve documentation
- [ ] release as an npm package

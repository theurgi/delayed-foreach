# delayed-foreach

This package provides synchronous and asynchronous `forEach`-like functions that
loop over an array and execute a specified function on each element, pausing for
a specified delay between iterations. The synchronous function uses a blocking
loop, while the asynchronous function uses `async/await` and `Promise`.

## Installation

To install the package, use the following command:

```sh
pnpm add delayed-foreach
# or
npm install delayed-foreach
# or
yarn add delayed-foreach
```

## Usage

The package exports two functions: `delayedForEachSync` and `delayedForEach`.

```ts
import { delayedForEachSync, delayedForEach } from 'delayed-foreach'

// Example array of items
const items = [1, 2, 3, 4, 5]

// Example function to execute on each item
function logItem(item: number) {
  console.log(`Processing item ${item}`)
}

// Example options object
const options = {
  array: items,
  delay: 1000,
  forEach: logItem,
  onCompletion: () => console.log('Completed processing items'),
}

// Use the synchronous function
delayedForEachSync(options)

// Use the asynchronous function
await delayedForEach(options)
```

## Use Cases

Here are a few possible use cases for the `delayedForEach` function:

### Rate Limiting API Requests

If you need to make successive API calls without hitting a rate limit, you can
use the `delayedForEach` function to introduce a delay between each request. For
example:

```ts
import axios from 'axios'
import { delayedForEach } from 'delayed-foreach'

const userProfileEndpoint = 'https://api.example.com/profiles?user='

// Assume this gets an array of user IDs
const userIDs = await axios.get('https://api.example.com/users')

const users: User[] = []

// Example function to call an API endpoint
async function retrieveUser(userID: string) {
  const response = await axios.get(`${userProfileEndpoint}${userID}`)
  users.push(response.data)
}

// Example options object
const options = {
  array: userIDs,
  delay: 500, // introduce a half-second delay between requests
  forEach: retrieveUser,
  onCompletion: () => {
    console.log('All users have been retrieved.')
    renderUserProfiles(users)
  },
}

// Use the asynchronous function
await delayedForEach(options)
```

### Animating Elements on a Web Page

If you need to animate a set of elements on a web page, you can use the
`delayedForEach` function to introduce a delay between each animation. For
example:

```ts
import { delayedForEach } from 'delayed-foreach'

// Example array of elements to animate
const elements = document.querySelectorAll('.my-element')

// Example function to animate an element
async function animateElement(element: Element) {
  element.classList.add('animated') // add a CSS class to animate the element
  await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for 1 second
  element.classList.remove('animated') // remove the CSS class to stop the animation
}

// Example options object
const options = {
  array: elements,
  delay: 1000, // introduce a 1-second delay between animations
  forEach: animateElement,
}

// Use the asynchronous function
await delayedForEach(options)
```

## License

[MIT](./LICENSE)

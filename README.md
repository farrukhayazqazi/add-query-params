# add-query-params

## About

add-query-params as the name suggests is a function that returns URL with the provided query parameters.

<!-- Installation -->
## Installation

* npm
  ```sh
  npm i add-query-params-to-url
  ```

<!-- USAGE EXAMPLES -->
## Usage

Add the ``addQueryParams`` function in your Application. Pass down your `URL` as the first and your `query parameters` as the second parameter.


Query parameters are passed down as object in the form of ``key:value`` pairs:



```
import addQueryParams from 'add-query-params';
// OR
const addQueryParams = require('add-query-params');




const url = 'https://www.somerandomurl.com/';

const withQueryParams = addQueryParams(url, {'username': 'farrukhayazqazi', age: '24'}); 

// returns https://www.somerandomurl.com/?username=farrukhayazqazi&age=24;

```

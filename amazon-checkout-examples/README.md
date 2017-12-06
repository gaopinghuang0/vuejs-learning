# vuejs-learning
Mini examples of [Vue.js](https://vuejs.org/v2/guide/index.html)

## Demo
1. The `Billing address` will update with `Shipping address`.
2. The `Order total` will update with the change of each item's `Quantity`. 

<kbd>
<img src="./examples/comprehensive-example/demo-checkout-via-vuejs.png" alt="checkout" style="width: 200px;"/>
</kbd>

Code is in `/examples/comprehensive-example/`

## Getting Started
```bash
$ python -m SimpleHTTPServer   
# OR if npm is installed
$ npm start

# Then head to http://localhost:8000
```

## Development with Grunt
Open a new terminal tab:
```bash
$ npm install  # install all dependencies

# use Grunt to auto reload whenever file changes
# there are two ways to run Grunt
# 1. install grunt command line tool globally, if w/ root permission
$ npm install grunt-cli -g
$ grunt

# 2. run local grunt, if w/o root permission
$ ./node_modules/.bin/grunt

# Then add this script to each html file that needs auto-reloading
<script src="//localhost:35729/livereload.js"></script>
```

## ~~Webpack~~
~~See [beginner guide](https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/)~~


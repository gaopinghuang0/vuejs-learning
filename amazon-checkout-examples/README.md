# vuejs-learning
Mini examples of vuejs. See [official guide](https://vuejs.org/v2/guide/index.html)

## Demo
1. The `Billing address` will update with `Shipping address`.
2. The `Order total` will update with the change of each item's `Quantity`. 

![checkout](./examples/comprehensive-example/demo-checkout-via-vuejs.png)

Code is in `/examples/comprehensive-example/`

## Getting Started
```bash
python -m SimpleHTTPServer   
# OR if npm is installed
npm start

# Then head to http://localhost:8000
```

## Development
Open a new tab that is different from the above one.
```bash
npm install  # install all dependency modules

# use Grunt to auto reload once file changes
# there are two ways to run Grunt
# 1. install grunt command line tool globally if has root access
npm install grunt-cli -g
grunt

# 2. run local grunt
./node_modules/.bin/grunt

# Then add this script to each html file that needs auto-reloading
<script src="//localhost:35729/livereload.js"></script>
```

## ~~Webpack~~
~~See [beginner guide](https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/)~~


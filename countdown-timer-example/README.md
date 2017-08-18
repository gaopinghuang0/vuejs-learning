## Countdown Timer Vuejs Component
This component is a Single File Vue.js Components Using Webpack. It builds all the stuff under `src/*` into `dist/build.js` via

```shell
npm install
# npm install webpack
webpack
```

In index.html, include this component and script (`dist/build.js`). That's it.

```html
<!-- add countdown-timer component and specify the endtime-->
<div id="countdown-timer-wrapper">
  <countdown-timer endtime_iso="2017-08-22T15:00:00-0400"></countdown-timer>
</div>
<script src="dist/build.js"></script>
```

To make your own edits, open `src/countdown-timer.vue` and run `webpack` to compile it again.

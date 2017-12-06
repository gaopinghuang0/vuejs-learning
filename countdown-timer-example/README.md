## Countdown Timer Vuejs Component
This component is a Single File Vue.js Components Using Webpack. It builds all the stuff under `src/*` into `dist/build.js` via

### Demo
![countdown-timer](./countdown-timer.png)

### Getting Started
Include the below code into your html page and specify the endtime via `endtime_iso`:

```html
<!-- specify the endtime at endtime_iso-->
<div id="countdown-timer-wrapper">
  <countdown-timer endtime_iso="2017-12-07T15:00:00-0400"></countdown-timer>
</div>
<script src="dist/build.js"></script>
```

### Make edits
```bash
$ npm install # install all dependencies
```
Edit `src/countdown-timer.vue` to make your own edits, then
```bash
$ webpack  # re-compile js and *.vue into dist/build.js
```

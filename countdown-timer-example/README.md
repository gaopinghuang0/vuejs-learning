## Countdown Timer Vuejs Component
This component is a Single File Vue.js Components Using Webpack. It builds all the stuff under `src/*` into `dist/build.js` via

### Demo
![countdown-timer](./countdown-timer.png)

### Get Started
```bash
npm install webpack
```

Include the below code into your html page and specify the endtime via `endtime_iso`:

```html
<!-- specify the endtime at endtime_iso-->
<div id="countdown-timer-wrapper">
  <countdown-timer endtime_iso="2017-12-07T15:00:00-0400"></countdown-timer>
</div>
<script src="dist/build.js"></script>
```

### Make edits
To make your own edits, edit `src/countdown-timer.vue` then
```bash
$ webpack  # re-compile js and *.vue into dist/build.js
```

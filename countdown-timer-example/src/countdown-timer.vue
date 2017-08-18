<template>
  <!-- Credit: https://codepen.io/SitePoint/pen/MwNPVq  -->
  <div id="clockdiv">
    <div>
      <span class="days">{{days}}</span>
      <div class="smalltext">Days</div>
    </div>
    <div>
      <span class="hours">{{hours}}</span>
      <div class="smalltext">Hours</div>
    </div>
    <div>
      <span class="minutes">{{minutes}}</span>
      <div class="smalltext">Minutes</div>
    </div>
    <div>
      <span class="seconds">{{seconds}}</span>
      <div class="smalltext">Seconds</div>
    </div>
  </div>
</template>

<script>
/* Credit: https://codepen.io/SitePoint/pen/MwNPVq */
export default {
  props: ['endtime_iso'],
  data () {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null,
    }
  },
  computed: {
    endtime () {
      return new Date(Date.parse(this.endtime_iso))
    }
  },
  methods: {
    getTimeRemaining (endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    },
    updateClock () {
      var t = this.getTimeRemaining(this.endtime);

      this.days = t.days
      this.hours = ('0' + t.hours).slice(-2)
      this.minutes = ('0' + t.minutes).slice(-2)
      this.seconds = ('0' + t.seconds).slice(-2)

      if (t.total <= 0) {
        clearInterval(this.interval);
      }
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.updateClock()
    }, 1000)
  },
  beforeDestroy () {
     clearInterval(this.interval)
  },
}
</script>

<style>
/* Credit: https://codepen.io/SitePoint/pen/MwNPVq */
#clockdiv{
  font-family: sans-serif;
  color: #fff;
  display: inline-block;
  font-weight: 100;
  text-align: center;
  font-size: 30px;
}

#clockdiv > div{
  padding: 10px;
  border-radius: 3px;
  background: #00BF96;
  display: inline-block;
}

#clockdiv div > span{
  padding: 15px;
  border-radius: 3px;
  background: #00816A;
  display: inline-block;
}

.smalltext{
  padding-top: 5px;
  font-size: 16px;
}
</style>
(function() {

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue!',
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'Hello Vue!',
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the app3 instance
      return this.message.split('').reverse().join('')
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue!',
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    picked: '',
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    items: [
      {message: 'Foo'},
      {message: 'Bar'}
    ],
  }
})


var app7 = new Vue({
  el: '#app-7',
  data: {
    counter: 0,
  },
  methods: {
    decrease: function() {
      if (this.counter > 0) {
        this.counter -= 1
      }
    },
    increase: function() {
      this.counter += 1
    }
  }
})

})()
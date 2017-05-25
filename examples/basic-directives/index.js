(function() {

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue!'
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'Hello Vue!'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    // a computed getter
    reverseMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

})()
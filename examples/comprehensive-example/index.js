

Vue.component('order-item', {
  template: '#item-template',  // include template from <script type="x-template">
  props: ['item'],  // properties passed from parent
  methods: {
    decrease: function() {
      this.$emit('decrease', this.item.id)
    },
    increase: function() {
      this.$emit('increase', this.item.id)
    }
  }
})

Vue.component('my-sidebar', {
  template: '#sidebar-template',  // include template from <script type="x-template">
  props: ['items', 'totalCostWithTax', 'tax', 'totalCostNoTax'],
  computed: {
    itemNumber: function() {
      var res = 0
      this.items.forEach(function(item) {
        res += item.number
      })
      return res
    }
  }
})

new Vue({
  el: '#app',
  data: {
    items: [{
      id: 1,
      name: 'Wireless mouse',
      imgUrl: 'mouse.jpg',
      seller: 'Amazon.com LLC',
      price: 9.99,
      number: 2
    }, {
      id: 2,
      name: 'Wireless keyboard',
      imgUrl: 'keyboard.png',
      seller: 'Amazon.com LLC',
      price: 19.99,
      number: 1
    }]
  },
  computed: {
    totalCostWithTax: function() {
      return (Number(this.totalCostNoTax) + Number(this.tax)).toFixed(2)
    },
    tax: function() {
      return (this.totalCostNoTax * 0.07).toFixed(2)
    },
    totalCostNoTax: function() {
      var total = 0
      this.items.forEach(function(item) {
        total += item.price * item.number
      })
      return total.toFixed(2)
    }
  },
  methods: {
    decreaseNumber: function(id) {
      this.items.forEach(function(item) {
        if (item.id === id && item.number > 0) {
          item.number -= 1
        }
      })
    },
    increaseNumber: function(id) {
      this.items.forEach(function(item) {
        if (item.id === id) {
          item.number += 1
        }
      })      
    }
  }
})
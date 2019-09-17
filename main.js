var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos: [
        { text : "The first item", done: true },
        { text : "The second item", done: false },
        { text : "The third item" },
    ]
  },
  methods: {
    toggle: function(todo){
        todo.done = !todo.done
    }
  }
})
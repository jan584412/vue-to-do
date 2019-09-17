var app = new Vue({
    el: '#app',
    data: {
        inputValue: null,
        message: 'Hello Vue!',
        todos: [
            { text: "The first item", done: true },
            { text: "The second item" },
            { text: "The third item" },
        ]
    },
    methods: {
        toggle: function (todo) {
            // console.log("Before", todo.done)
            todo.done = !todo.done
            // console.log("After", todo.done)
        },
        add: function () {
            this.todos.push({ text: this.inputValue, done: false });
            this.inputVaule = "";
        }
    }
})
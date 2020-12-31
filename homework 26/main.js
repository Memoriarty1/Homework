const toDoList = [
    'play gyitar',
    'watch tv',
    'surf internet',
    'do my homework!!!!!!'
];
const doneList = [];

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        toDoList: toDoList,
        doneList: doneList
    },
    methods: {
        transfer: function () {
            if (toDoList.length > 0) {
                this.doneList.unshift(this.toDoList.pop())
            }
        }
    }
});
app.message = 'TaskManager';
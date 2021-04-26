Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

// direct 
var object = new Vue({
    el: '#vue-app',
    data: {
        firstName: 'Khodidas',
        lastName: 'Gamdha',
        address: 'Rajkot',
        tutorial: 'https://www.youtube.com/',
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    methods: {
        quota: function() {
            return 'Good Morning !!';
        },
        time: function() {
            return Date.now();
        }
    },
    computed: {
        now: function() {
            return Date.now();
        }
    }
})
// console.log(object.firstName);
// console.log(object.$data);
// console.log(object.$data.firstName);

var obj = {
    foo: 'bar'
}
  
Object.freeze(obj)
  
new Vue({
    el: '#app',
    data: obj
})
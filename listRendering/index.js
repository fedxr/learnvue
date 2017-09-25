var example1 = new Vue({
    el:'#exmaple-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ] 
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
});

new Vue({
    el: '#v-for-project',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
          }
    }
});

var exmaple3 = new Vue({
    el: '#example-3',
    // data: {
    //     numbers: [ 1, 2, 3, 4, 5 ]
    // },
    // computed: {
    //     evenNumbers: function() {
    //         return this.numbers.filter(function(number){
    //             return number % 2 === 0;
    //         });
    //     }
    // }
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
      },
      methods: {
        evenNumbers: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }
});

//一个组件的 v-for
Vue.component('todo-item',{
    template: '\
        <li>\
            {{title}}\
            <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
    ',
    props:['title']
});

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
              },
              {
                id: 2,
                title: 'Take out the trash',
              },
              {
                id: 3,
                title: 'Mow the lawn'
              }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function(){
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});
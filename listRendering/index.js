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
        even: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }
});
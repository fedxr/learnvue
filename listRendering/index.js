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
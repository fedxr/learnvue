var example1 = new Vue({
    el:'#example-1',
    data: {
        counter:0
    }
});

var example2 = new Vue({
    el:'#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            // `this` 在方法里指当前 Vue 实例
            alert('Hello ' + this.name + '!');
            // `event` 是原生 DOM 事件
            if(event){
                alert(event.target.tagName);
            }
        }
    }
});

var example3 = new Vue({
    el: '#example-3',
    methods: {
        say: function(message){
            alert(message);
        }
    }
});
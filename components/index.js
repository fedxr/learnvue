//全局注册
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});

// 局部注册
var Child = {
    template: '<div>A custom child component!</div>'
}

// 创建根实例
new Vue({
    el: '#example',
    components: {
        'child-component': Child
    }
});


Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        };
    }
});

new Vue({
    el: '#example-2'
});


// 组合组件
// 使用prop传递数据
Vue.component('child', {
    // 声明 props
    props: ['myMessage'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{ myMessage }}</span>'
})

var example3 = new Vue({
    el: '#example-3',
    data: {
        parentMsg: '',
    },
});


//使用v-on绑定自定义事件
Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function() {
            this.counter += 1;
            this.$emit('increment');
        }
    }
})

new Vue({
    el: '#counter-event-example',
    data: {
        total:0
    },
    methods: {
        incrementTotal: function() {
            this.total += 1;
        }
    }
});
// 全局注册
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
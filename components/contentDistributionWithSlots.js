// single slot
Vue.component('my-component', {
    template: '<div>\
                <h2>我是子组件的标题</h2>\
                <slot>\
                    只有在没有要分发的内容时才会显示。\
                </slot>\
            </div>'
});

new Vue({
    el: '#singleSlot'
});

// named slot
Vue.component('app-layout', {
    template: '<div class="container">\
                <header>\
                    <slot name="header"></slot>\
                </header>\
                <main>\
                    <slot></slot>\
                </main>\
                <footer>\
                    <slot name="footer"></slot>\
                </footer>\
            </div>'
})

new Vue({
    el: '#namedSlot'
});

// scoped slots
Vue.component('my-awesome-list', {
    template: '<ul>\
                <slot name="item"\
                    v-for="item in items"\
                    :text="item.text">\
                </slot>\
            </ul>',
    props: ['items']
})
new Vue({
    el: '#app',
    data: {
        items: [
            { text: '逛' },
            { text: '吃' },
            { text: '逛' },
            { text: '吃' },
            { text: '逛' },
            { text: '吃' }
        ]
    }
})

// dynamic components
var Home = {
    template: '<p>Welcome home!</p>'
};
var Posts = {
    template: '<p>Welcome posts!</p>'
};
var Archive = {
    template: '<p>Welcome archive!</p>'
};

var vm = new Vue({
    el: '#keepAlive',
    data: {
        currentView: Posts
    },
    // components: {
    //     home: {
    //         template: '<p>Welcome home!</p>'
    //     },
    //     posts: {
    //         template: '<p>Welcome posts!</p>'
    //     },
    //     archive: {
    //         template: '<p>Welcome archive!</p>'
    //     }
    // }
});

// async components
Vue.component('async-example', function (resolve, reject) {
    setTimeout(function () {
        // 将组件定义传入 resolve 回调函数
        resolve({
            template: '<div>I am async</div>'
        })
    }, 1000);
});

new Vue({
    el: '#async'
});

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

Vue.component('app-layout', {
    template:'<div class="container">\
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
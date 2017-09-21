Vue.component('my-component',{
    template:'<p class="foo bar">Hi</p>'
});

var vm = new Vue({
    el:'#exmaple',
    data: {
        isActive: true,
        hasError: true,
        classObject: {
            isActive: true,
            hasError: false
        },
        activeColor: 'red',
        fontSize: 24,
        styleObject:{
            color: 'red',
            fontSize: '30px'
        }
    }
});
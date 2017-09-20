var vm = new Vue({
    el:'#exmaple',
    data: {
        message: 'Hello'
    },
    computed: {
        //a computed getter
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
});
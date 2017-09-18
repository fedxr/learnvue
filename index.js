var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on' + new Date(),
		message2: 'Hello Vue.js!',
		message3: 'input something',
		seen: true,
		todos: [{
			text: 'Learn JavaScript'
		}, {
			text: 'Learn Vue'
		}, {
			text: 'Build something awesome'
		}]
	},
	methods: {
		reverseMessage: function() {
			this.message2 = this.message2.split('').reverse().join('');
		}
	}
});

Vue.component('todo-item',{
	props: ['todo'],
	template:'<li>{{todo.text}}</li>'
});

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList:[
			{ id: 0, text: '蔬菜' },
			{ id: 1, text: '奶酪' },
			{ id: 2, text: '随便其他什么人吃的东西' }
		]
	}
});
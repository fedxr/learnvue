new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js',
		todos: [
			{text: 'Learn JavaScript'},
			{text: 'Learn Vue.js'},
			{text: 'Build Something Awesome'}
		],
		newTodo: '',
		dos: [
			{text: 'Add some todos'}
		]
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('');
		},
		addTodo: function () {
			var text = this.newTodo.trim();
			if (text) {
				this.dos.push({text: text});
				this.newTodo = '';
			}
		},
		removeTodo: function (index) {
			this.dos.splice(index, 1);
		}
	}
});
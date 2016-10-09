var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on' + new Date(),
		seen: true,
		todos: [
			{ text: 'Learn JavaScript' },
      		{ text: 'Learn Vue' },
      		{ text: 'Build something awesome' }
		]
	}
});
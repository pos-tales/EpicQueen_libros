

const getBookData = () => {
	const url = 'https://www.googleapis.com/books/v1/volumes?q=FRASE'
	return fetch (url, 
		{method:'GET'})
	.then((response) => {
		return response.json();
	//console.log(response, 'response, mi primer valor que voy)
	})
	.catch(error=> console.log(error))
}

const render = (response) => {
	//console.log(response.items, 'response')
	const listCards = document.getElementById("tarjeteroid");

	const card = response.items.map((item) => {
		console.log(item)
		return `
		<div class="card" style="width: 18rem; border:10rem;">
		<img src=${item.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="portadaLibro">
		<div class="card-body">
			<h5 class="card-title">${item.volumeInfo.title}</h5>
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
		</div>´
	`;

		console.log(item.volumeInfo.title)
	})
	//console.log(listCards,'tarjeteroid')
	
	listCards.innerHTML = card;
}


//mando a llamar a la función
getBookData() 
.then(response => {
	render(response)
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

// fetch('https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     console.log(response)


const getData = async () => {
    let data = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
    let parsedData = await data.json()
    console.log(parsedData)
}

export default getData
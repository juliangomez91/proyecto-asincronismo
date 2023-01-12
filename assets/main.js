const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a089609f47msh00170b9fa0d7b8bp12315ejsnfa2290d04a45',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
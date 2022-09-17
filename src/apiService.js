const API_KEY = '24236724-a89ab3fbc60694d0f9dea8e28';


export default class ApiPixabay {
	constructor() {
		this.page = 1;
		this.image = "";
	}

	get numbPage() {
		return this.page
	};

	newPage() {

		this.page += 1
	};
	get nameImage() {
		return this.image
	}
	set newImage(search) {
		this.image = search

	}
	cleanPage() {
		this.page = 1

	}
	fufel(searchImage) {
		return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.image}&page=${this.page}&per_page=12&key=${API_KEY}`)
			.then(data => data.json())
	}
}


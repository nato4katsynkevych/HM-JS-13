// import './sass/main.scss';
import ApiPixabay from './apiService'
import images from './imageCard.hbs'

const inputRef = document.querySelector('input')
const ulRef = document.querySelector('.ul')
const btnRef = document.querySelector('.button')

const test = new ApiPixabay()
const debounce = require('lodash.debounce');

inputRef.addEventListener('input', debounce(onInput, 2000))
btnRef.addEventListener('click', onClick)

function onInput(e) {
	ulRef.innerHTML = '';
console.log(test.numbPage);
	const searchImage = e.target.value;
test.newImage=searchImage;
test.cleanPage();
// console.log(test.nameImage);

	test.fufel(searchImage)
		.then(data => renderGallery(data.hits)
		)
}

function onClick(e) {
	
	test.newPage()
	test.fufel()
		.then(data => renderGallery(data.hits)
			// console.log(data.hits)
		)
		// console.log(test.newImage='vladik');
		// console.log(test.newPage());
		// console.log(test.numbPage);

}

function renderGallery(img) {
	const gallery = images(img);

	
	ulRef.insertAdjacentHTML('beforeend', gallery);
}
// console.log(test.nameImage);
// console.log(test.newPage());
// console.log(test.numbPage);
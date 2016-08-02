var slideshow = {

	photoList: ["photo1", "photo2", "photo3", "photo4", "photo5"],

	currentPhotoIndex: 0,

	getCurrentPhoto: function() {
		console.log(this.photoList[this.currentPhotoIndex]);
	},

	nextPhoto: function() {
		if (this.currentPhotoIndex < ( this.photoList.length - 1 )) {
			this.currentPhotoIndex += 1;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("End of slideshow");
		}
	},

	previousPhoto: function() {
		if (this.currentPhotoIndex > 0) {
			this.currentPhotoIndex -= 1;
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("Beginning of slideshow");
		}
	}
}

function runSlides() {
	slideshow.getCurrentPhoto();
	var slidePhotos = slideshow.photoList;
	if ( slideshow.currentPhotoIndex === 0 ) {	
		for ( var i = 0; i < slidePhotos.length; i++) {
			slideshow.nextPhoto();
		};
		slideshow.getCurrentPhoto();
		for (var j = slideshow.currentPhotoIndex; j >= 0; j--) {
			slideshow.previousPhoto();
		}
	}
}

runSlides();


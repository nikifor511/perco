'use strict';

class Slider {

    constructor(images) {
        this.images = images;
        this.currentImage = 0;
        this.position = 0;
        this.fullWidth = 0;
        let self = this;

        let ul = document.getElementById('imagesID');
        for (let i = 0; i < this.images.length; i++) {
              let li = document.createElement("li");

              let img = document.createElement('img');
              img.src = './images/' + this.images[i].src;
              img.id = this.images[i].src;
              img.onload = function() {
                  self.fullWidth = self.fullWidth + img.clientWidth + 4;
              }
              img.setAttribute('onclick', 'openModal(this.id);');
              li.append(img);
              ul.append(li);
        }
    }

    next() {
        this.position = this.position - document.getElementById( this.images[this.currentImage].src ).clientWidth - 4;
        if (++this.currentImage >= this.images.length ) {
            this.currentImage = 0;
            this.position = 0;
        }
        console.log(this.position);
        return this.position;
    }

    previous() {
        // this.calcFullWidthGallery();
        if (--this.currentImage <= -1 ) {
            this.currentImage = this.images.length - 1;  //
            this.position =  document.getElementById( this.images[this.currentImage].src ).clientWidth - this.fullWidth;
        } else {
            this.position = this.position + document.getElementById( this.images[this.currentImage].src ).clientWidth + 4;
        }

        console.log(this.position);
        return this.position;
    }

    like() {
        this.images[this.currentImage].isLike = !this.images[this.currentImage].isLike;
        this.render();
    }

    renderModal() {

        let imageSrc = './images/' + this.images[this.currentImage].src;
        let imageHTML = '<img src="' + imageSrc + '" alt="' + this.images[this.currentImage].src + '">';
        console.log(imageHTML);
        // let imageHTML = '<a href="' + imageSrc + '" data-lightbox="' + imageSrc +
        //            '" data-title="' + this.images[this.currentImage].caption +
        //            '"><img src="' + imageSrc + '" alt="sunrise"></a>';
        $('.modalImage').html(imageHTML);

        let likeHTML = '';
        if (this.images[this.currentImage].isLike) {
            likeHTML = '<img src="./images/like.png"  class="like" alt="like">';
        } else {
            likeHTML = '<img src="./images/no-like.png"  class="like" alt="like">';
        }
        $('.modalLike').html(likeHTML);

        $('.modalCaption').html(this.images[this.currentImage].caption);
    }
}

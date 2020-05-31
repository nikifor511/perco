'use strict';

class Gallery {

    constructor(images) {
        this.images = images;
        this.currentSlyderImage = 0;
        this.currentModalImageID = null;
        this.position = 0;
        this.fullWidth = 0;
        let self = this;

        let ul = document.getElementsByClassName('images')[0];
        for (let i = 0; i < this.images.length; i++) {
              let li = document.createElement("li");

              let img = document.createElement('img');
              img.src = './images/' + this.images[i].src;
              img.id = this.images[i].src;
              img.onload = function() {
                  self.fullWidth = self.fullWidth + img.clientWidth + 4;
              }
              img.onclick = function() {
                  self.currentModalImageID = this.id;
                  self.renderModal();
                  document.getElementById('myModal').style.display = "block";
              }
              li.append(img);
              ul.append(li);
        }

    }

    next() {
        this.position = this.position - document.getElementById( this.images[this.currentSlyderImage].src ).clientWidth - 4;
        if (++this.currentSlyderImage >= this.images.length ) {
            this.currentSlyderImage = 0;
            this.position = 0;
        }
        console.log(this.position);
        return this.position;
    }

    previous() {
        // this.calcFullWidthGallery();
        if (--this.currentSlyderImage <= -1 ) {
            this.currentSlyderImage = this.images.length - 1;  //
            this.position =  document.getElementById( this.images[this.currentSlyderImage].src ).clientWidth - this.fullWidth;
        } else {
            this.position = this.position + document.getElementById( this.images[this.currentSlyderImage].src ).clientWidth + 4;
        }

        console.log(this.position);
        return this.position;
    }

    renderModal() {
        let self = this;
        let img = this.images.find(function(image) {
            return image.src == self.currentModalImageID;
        });
        console.log(img);
        
        let modalImage = document.getElementsByClassName('modalImage')[0];
        modalImage.src = './images/' + img.src;

        let modalLike = document.getElementsByClassName('modalLike')[0];
        modalLike.onclick = function() {
            img.isLike = !img.isLike;
            if (img.isLike) {
                modalLike.src = './images/like.png';
            } else {
                modalLike.src = './images/no-like.png';
            }   
        }
        if (img.isLike) {
            modalLike.src = './images/like.png';
        } else {
            modalLike.src = './images/no-like.png';
        }   

        let modalCaptionText = document.getElementById('modalCaptionText');
        modalCaptionText.value = img.caption;

        let modalCaptionChange = document.getElementById('modalCaptionChange');
        modalCaptionChange.onclick = function() {
            img.caption = modalCaptionText.value;
            modalCaptionText.style.backgroundColor = "#9999";
        }        
        
        console.log(modalImage);
    }

}


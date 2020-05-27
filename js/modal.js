function renderModal(imageID) {

    let imgDiv = document.getElementsByClassName('modalImage')[0];
    console.log(imgDiv);

    let img = document.createElement('img');
    img.src = './images/' + imageID;

    imgDiv.appendChild(img);
}

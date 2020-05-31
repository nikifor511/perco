function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    myImages = [
        {
            src: 'perco0.jpg',
            caption: 'this is 0 image',
            isLike: true,
        },
        {
            src: 'perco1.jpg',
            caption: 'this is 1 image',
            isLike: true,
        },
        {
            src: 'perco2.jpg',
            caption: 'this is 2 image',
            isLike: false,
        },
        {
            src: 'perco3.jpg',
            caption: 'this is 3 image',
            isLike: false,
        },
        {
            src: 'perco4.jpg',
            caption: 'this is 4 image',
            isLike: false,
        },
        {
            src: 'perco5.jpg',
            caption: 'this is 5 image',
            isLike: false,
        },
        {
            src: 'perco6.jpg',
            caption: 'this is 6 image',
            isLike: false,
        },
        {
            src: 'perco7.jpg',
            caption: 'this is 7 image',
            isLike: false,
        },
        {
            src: 'perco8.jpg',
            caption: 'this is 8 image',
            isLike: false,
        },
    ];

    let gallery = new Gallery(myImages);
    console.log(gallery);

    document.getElementsByClassName('next')[0].onclick = function() {
        document.getElementsByClassName('images')[0].style.marginLeft = gallery.next() + 'px';  
    }

    document.getElementsByClassName('previous')[0].onclick = function() {
        document.getElementsByClassName('images')[0].style.marginLeft = gallery.previous() + 'px';  
    }

    document.getElementById('modalCaptionText').oninput = function() {
        document.getElementById('modalCaptionText').style.backgroundColor = "white";
    }
});
function openModal(imageID) {
    renderModal(imageID);
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

$(document).ready(function() {

    myImages = [
        {
            src: 'perco0.jpg',
            caption: 'it is 0 perco',
            isLike: true,
        },
        {
            src: 'perco1.jpg',
            caption: 'it is 1 perco',
            isLike: true,
        },
        {
            src: 'perco2.jpg',
            caption: 'it is 2 perco',
            isLike: false,
        },
        {
            src: 'perco3.jpg',
            caption: 'it is 3 perco',
            isLike: false,
        },
        {
            src: 'perco4.jpg',
            caption: 'it is 4 perco',
            isLike: false,
        },
        {
            src: 'perco5.jpg',
            caption: 'it is 5 perco',
            isLike: false,
        },
        {
            src: 'perco6.jpg',
            caption: 'it is 6 perco',
            isLike: false,
        },
        {
            src: 'perco7.jpg',
            caption: 'it is 7 perco',
            isLike: false,
        },
        {
            src: 'perco8.jpg',
            caption: 'it is 8 perco',
            isLike: false,
        },
    ];

    let slider = new Slider(myImages);
    console.log(slider);

    $('.next').on('click', function() {
        $('.images').css('margin-left', slider.next());
    });

    $('.previous').on('click', function() {
        // let list = carousel.querySelector('ul');
        $('.images').css('margin-left', slider.previous());

    });
});


const nave = document.getElementById("nave");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    if (nave.style.top === "-100vh") {
        nave.style.top = "0";
    } else {
        nave.style.top = "-100vh";
    }
});
//////////////////////////////////////////////////

const iconPage1 = document.getElementById("iconPage1")
const iconPage2 = document.getElementById("iconPage2")
const iconPage3 = document.getElementById("iconPage3")



//////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.body-section1');
    const carts = Array.from(container.children);

    function duplicateElements() {
        const totalWidth = container.scrollWidth;
        const viewportWidth = container.offsetWidth;
        const requiredRepetitions = Math.ceil(viewportWidth / totalWidth) + 1;

        for (let i = 0; i < requiredRepetitions; i++) {
            carts.forEach(cart => {
                const clone = cart.cloneNode(true);
                container.appendChild(clone);
            });
        }
    }

    duplicateElements();

    container.addEventListener('scroll', () => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            duplicateElements();
        }
    });
});

////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const textItems = document.querySelectorAll('.text-hover-section2 h1');
    const images = document.querySelectorAll('.blog-images-section2 .image');

    textItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            images.forEach(img => img.classList.remove('active'));
            images.forEach(img => img.classList.remove('hide'));

            if (index > 0) {
                images[index - 1].classList.add('hide');
            }

            images[index].classList.add('active');

            textItems.forEach(textItem => textItem.querySelector('i').style.opacity = '0');
            const icon = item.querySelector('i');
            icon.style.opacity = '1';
        });
    });
});
/////////////////////////////////////////////
document.querySelectorAll('.product-card').forEach(card => {
    const decreaseButton = card.querySelector('.decrease');
    const increaseButton = card.querySelector('.increase');
    const quantityElement = card.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
    });
});
/////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const textItems = document.querySelectorAll('.blog-text-section4 h1');
    const images = document.querySelectorAll('.blog-image-section4 .image');

    textItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            images.forEach(img => img.classList.remove('active'));
            images.forEach(img => img.classList.remove('hide'));

            if (index > 0) {
                images[index - 1].classList.add('hide');
            }

            images[index].classList.add('active');

            textItems.forEach(textItem => textItem.querySelector('i').style.opacity = '0');
            const icon = item.querySelector('i');
            icon.style.opacity = '1';
        });
    });
});
///////////////////////////////////////////
const scrollContainerSection6 = document.getElementById('scrollContainerSection6');

function cloneFirstToLast6() {
    const firstElement = scrollContainerSection6.firstElementChild;
    const clone = firstElement.cloneNode(true);
    scrollContainerSection6.appendChild(clone);
    scrollContainerSection6.removeChild(firstElement);
}

function cloneLastToFirst6() {
    const lastElement = scrollContainerSection6.lastElementChild;
    const clone = lastElement.cloneNode(true);
    scrollContainerSection6.insertBefore(clone, scrollContainerSection6.firstElementChild);
    scrollContainerSection6.removeChild(lastElement);
}


function scrollLeft3() {
    scrollContainerSection6.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
    setTimeout(cloneLastToFirst6, 300);
}

function scrollRight() {
    scrollContainerSection6.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
    setTimeout(cloneFirstToLast6, 300);
}
///////////////////////////////////
const scrollContainerSection7 = document.getElementById('scrollContainerSection7');

function cloneFirstToLast7() {
    const firstElement = scrollContainerSection7.firstElementChild;
    const clone = firstElement.cloneNode(true);
    scrollContainerSection7.appendChild(clone);
    scrollContainerSection7.removeChild(firstElement);
}

function cloneLastToFirst7() {
    const lastElement = scrollContainerSection7.lastElementChild;
    const clone = lastElement.cloneNode(true);
    scrollContainerSection7.insertBefore(clone, scrollContainerSection7.firstElementChild);
    scrollContainerSection7.removeChild(lastElement);
}

function scrollLeft7() {
    scrollContainerSection7.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
    setTimeout(cloneLastToFirst7, 300);
}

function scrollRight7() {
    scrollContainerSection7.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
    setTimeout(cloneFirstToLast7, 300);
}
////////////////////////////////////////////////
function validateForm() {
    var fullName = document.getElementById("fullName").value;
    if (fullName == "") {
        alert("Full name must be filled out");
        return false;
    }
    return true;
}
/// page3
document.getElementById('videoThumbnail').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    videoPlayer.classList.add('fullscreen');
    videoOverlay.style.display = 'block';
    videoPlayer.play();
});

document.getElementById('videoOverlay').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    videoPlayer.classList.remove('fullscreen');
    videoOverlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.style.display = 'none';
});
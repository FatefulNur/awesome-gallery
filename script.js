const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = document.querySelector(".close");

function generateHTML([h, v]) {
    return `
                <div class="item h${h} v${v}">
                    <img src="images/${randomDigit(44)}.jpg" alt="nothing">
                    <div class="image__overlay">
                        <button class="view">View &RightArrow;</button>
                    </div>  
                </div>
            `;
}

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;

    overlay.classList.add('open');
    overlayImage.src = src;
}

function close(e) {
    overlay.classList.remove('open');
}

function randomDigit(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({ length: 50 }, () => [randomDigit(4), randomDigit(4)]).concat([[1, 1], [2, 1], [1, 2], [1, 1], [3, 2], [1, 1], [1, 1], [2, 2], [1, 1], [3, 3],]);

const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener("click", handleClick));

overlayClose.addEventListener('click', close);
overlay.addEventListener('click', function (e) {
    if (e.target !== overlayImage) {
        close();
    }
});
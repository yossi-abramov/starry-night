// Night Sky element

const $el = document.body;

// Generate a random number between min and max values

const genRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

// Generate a star <div>

const genStar = () => {

    const star = document.createElement("div");
    star.classList.add("star");

    // Gen star coordinates relative to $el size
    let x = genRandomNumber(1, $el.offsetWidth);
    let y = genRandomNumber(1, $el.offsetHeight);

    const { style } = star;

    style.left = Math.floor(x) + "px";
    style.top = Math.floor(y) + "px";

    style.setProperty(
        "--star-size",
        genRandomNumber(1, 3) + "px"
    );

    style.setProperty(
        "--twinkle-duration",
        Math.ceil(genRandomNumber(1, 5)) + "s"
    );

    style.setProperty(
        "--twinkle-delay",
        Math.ceil(genRandomNumber(1, 5)) + "s"
    );

    return star;
}

for (let index = 0; index < 800; index++) {
    $el.append(genStar());
}
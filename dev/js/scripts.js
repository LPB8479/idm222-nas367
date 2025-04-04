const data = [
    {
        "name": "Transit Map Project",
        "year": "2024",
        "path": "transit-maps.html",
        "bkgdSrc": "assets/dcbaltimore-min.png",
        "bkgdSize": "400%",
        "bkgdPosition": "40% 60%",
        "class": "doubleWidth"
    },
    {
        "name": "Rodeo Orchestra Poster",
        "year": "2024",
        "path": "rodeo.html",
        "bkgdSrc": "assets/rodeoposter-min.jpg",
        "bkgdSize": "cover",
        "bkgdPosition": "top",
        "class": "doubleWidth"
    },
    {
        "name": "The Franklin Institute Rebrand",
        "year": "2023",
        "path": "franklin-institute.html",
        "bkgdSrc": "assets/franklin0-min.gif",
        "bkgdSize": "contain",
        "bkgdPosition": "center"
    },
    {
        "name": "Amtrak Site Redesign",
        "year": "2023",
        "path": "amtrak.html",
        "bkgdSrc": "assets/amtkhome-min.png",
        "bkgdSize": "cover",
        "bkgdPosition": "center"
    },
    {
        "name": "Agatha Christie Book Covers",
        "year": "2024",
        "path": "book-covers.html",
        "bkgdSrc": "assets/bookcoverthumbnail-min.gif",
        "bkgdSize": "cover",
        "bkgdPostition": "center"  
    },
    {
        "name": "Panton Chair Poster",
        "year": "2022",
        "path": "panton-chair.html",
        "bkgdSrc": "assets/chairposter-min.jpg",
        "bkgdSize": "cover",
        "bkgdPosition": "center"
    },
    {
        "name": "Dirty Napkin",
        "year": "",
        "path": "dirty-napkin.html",
        "bkgdSrc": "assets/dirtynapkin-min.gif",
        "bkgdSize": "cover",
        "backgroundPosition": "center"
    }
];

function remToPx(remValue) {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return remValue * rootFontSize;
}

function hamburger() {
    const burgerBtn = document.querySelector("header button");
    const nav = document.querySelector(".main-menu");
    if (!burgerBtn.dataset.eventAdded) {
        burgerBtn.addEventListener("click", () => {
            nav.classList.toggle("open");
            burgerBtn.classList.toggle("X");
        })
        burgerBtn.dataset.eventAdded = "true";
    }
}

function showInfo(id) {
    const div = document.getElementById(id + 'Cover');
    $(div).animate({ opacity: 0.9 });
}
function hideInfo(id) {
    const div = document.getElementById(id + 'Cover');
    $(div).animate({ opacity: 0 });
}

//homepage content
let mainGal = document.getElementById('mainGallery');
if (mainGal) {
    data.forEach((page) => {
        //create anchor
        const a = document.createElement('a');
        a.id = page.path.replace('.html', '');
        a.href = page.path;
        a.style.backgroundImage = `url(${page.bkgdSrc})`;
        a.style.backgroundSize = page.bkgdSize;
        a.style.backgroundPosition = page.bkgdPosition;
        a.classList.add("noLink");
        a.addEventListener('mouseenter', () => showInfo(a.id), false);
        a.addEventListener('mouseleave', () => hideInfo(a.id), false);
        mainGal.appendChild(a);

        //double width
        if (page.class === "doubleWidth") {
            a.classList.add("doubleWidth");
            if(page.bkgdSize === "400%") {
                a.style.backgroundSize = "300%";
            }
        }

        //create info
        const info = document.createElement('div');
        info.classList.add('coverInfo');
        info.id = page.path.replace('.html', '') + 'Cover';
        a.appendChild(info);

        //create year
        const year = document.createElement('p');
        year.classList.add('mainYear');
        year.innerHTML = page.year;
        info.appendChild(year);

        //create name
        const name = document.createElement('h1');
        name.classList.add('mainName');
        name.innerHTML = page.name;
        info.appendChild(name);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    hamburger();
});

//make sure nav is always collapsed when resizing
window.addEventListener("resize", () => {
    document.querySelector(".main-menu").classList.remove("open");
    document.querySelector("header button").classList.remove("X");
});
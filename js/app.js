/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */


/**
 * Define Global Variables
 * 
 */
const SectionsDN = document.querySelectorAll('section');
const Lists__Nav = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
const navtext = ["Programming", "HTML", "CSS", "JavaScript"];

function createnavLists() {

    SectionsDN.forEach((section) => {
        const Li = document.createElement('li');
        Li.textContent = section.dataset.nav;
        Li.classList.add('menu__link');
        Li.setAttribute('data-nav', section.dataset.nav)
        Lists__Nav.appendChild(Li)

    })

}

function getSecByLi(li) {

    let _section;
    SectionsDN.forEach((section) => {

        if (li.dataset.nav === section.dataset.nav) {

            _section = section;
        }
    })

    return _section

}

function getLiBySec(section) {


    let _list;
    Lists__Nav__li.forEach((li) => {

        if (section.dataset.nav === li.dataset.nav) {

            _list = li;
        }

    })

    return _list;

}

// Set sections as active
function sectionAddAct(li) {

    const section = getSecByLi(li)
    section.classList.add('your-active-class');
    sectionremoveAct(section);

}

function sectionremoveAct(_section) {

    SectionsDN.forEach((section) => {

        if (section.dataset.nav !== _section.dataset.nav) {

            section.classList.remove('your-active-class')

        }

    })

}

function Sections__scroll(section) {

    section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function ActiveLists(Listaya) {

    Lists__Nav__li.forEach((li) => {

        if (Listaya.dataset.nav == li.dataset.nav) {
            li.classList.remove('menu__link');
            li.classList.add('menu__link2', 'active');
            sectionAddAct(li)


        } else {
            li.classList.remove('menu__link2', 'active');
            li.classList.add('menu__link');
        }
    })

}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// Build menu 
createnavLists();
const Lists__Nav__li = document.querySelectorAll('#navbar__list li');

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Scroll to section on link click
Lists__Nav__li.forEach((li) => {

    li.addEventListener('click', (e) => {

        const section = getSecByLi(li)
        Sections__scroll(section);
        sectionAddAct(e.target);


    })
})

// Add class 'active' to section when near top of viewport
window.onscroll = function() {
    topscrollbtn()
    const scrollTop = document.body.scrollTop
    SectionsDN.forEach((section) => {

        const topSec = scrollTop + (section.getBoundingClientRect().top - 200);
        if (scrollTop >= topSec) {
            ActiveLists(section);

        }

    })

}

// Scrolling to top


// لما المستخدم يدوس هيحقق الدالة دي
function totopscrl() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


// بركز على الزرار عن طريق الأي دي
var topbutton = document.getElementById("totop");


// بعمل دالة الظهور انه لما ينزل 10 بكسل بس الزرار بظهر

function topscrollbtn() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}



/**
 * End Events
 */
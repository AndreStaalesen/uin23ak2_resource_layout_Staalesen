const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

printHTML()

function printHTML() {
    htmlHTML = "";
    const htmltab = resources.filter((catg) => catg.category === "HTML");
    htmltab.map((catg) => {
        htmlHTML += `
        <h1>${catg.category}</h1>
        <p>${catg.text}
        `
        catg.sources.map((links) => {
            htmlHTML += `
            <ul><li><a href="${links.url}">${links.title}</a></li></ul>
            `
        })
         })
         document.getElementById("printarea").innerHTML = htmlHTML;
        }


function printCSS() {
CSSHTML = "";
const CSStab = resources.filter((catg) => catg.category === "CSS");
CSStab.map((catg) => {
    CSSHTML += `
    <h1>${catg.category}</h1>
    <p>${catg.text}
    `
    catg.sources.map((links) => {
        CSSHTML += `
        <ul><li><a href="${links.url}">${links.title}</a></li></ul>
        `
    })
     })
     document.getElementById("printarea").innerHTML = CSSHTML;
    }


    function printJS() {
        jsHTML = "";
        const jstab = resources.filter((catg) => catg.category === "JavaScript");
        jstab.map((catg) => {
            jsHTML += `
            <h1>${catg.category}</h1>
            <p>${catg.text}
            `
            catg.sources.map((links) => {
                jsHTML += `
                <ul><li><a href="${links.url}">${links.title}</a></li></ul>
                `
            })
             })
             document.getElementById("printarea").innerHTML = jsHTML;
            }

function printReact() {
reactHTML = "";
const reacttab = resources.filter((catg) => catg.category === "React");
reacttab.map((catg) => {
    reactHTML += `
    <h1>${catg.category}</h1>
    <p>${catg.text}
    `
    catg.sources.map((links) => {
        reactHTML += `
        <ul><li><a href="${links.url}">${links.title}</a></li></ul>
        `
    })
     })
     document.getElementById("printarea").innerHTML = reactHTML;
    }


    function printSanity() {
        sanityHTML = "";
        const sanitytab = resources.filter((catg) => catg.category === "Sanity and headless CMS");
        sanitytab.map((catg) => {
            sanityHTML += `
            <h1>${catg.category}</h1>
            <p>${catg.text}
            `
            catg.sources.map((links) => {
                sanityHTML += `
                <ul><li><a href="${links.url}">${links.title}</a></li></ul>
                `
            })
             })
             document.getElementById("printarea").innerHTML = sanityHTML;
            }





var btns = document.querySelectorAll(".btn");
   Array.from(btns).forEach(item => {
      item.addEventListener("click", () => {
         var selected = document.getElementsByClassName("active");
         selected[0].className = selected[0].className.replace(" active", "");
         item.className += " active";
      });
   });
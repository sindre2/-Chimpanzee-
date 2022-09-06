// Constants & eventlisteners for the buttons //

const venstre = document.getElementById("ape");
const hoyre = document.getElementById("phil");
const images = document.getElementsByClassName("bigPic");
const wise = document.getElementsByClassName("wiseShit");

console.log(images);

venstre.addEventListener("click", newChimp);
hoyre.addEventListener("click", philosophical);

// random function to select a random number from 1 to 5 //

function randomSelector() 
{
    return selector = Math.floor((Math.random() * 6));
};

// Functions to decide what new picture of a chimp or philosophical quote to show on the card. It accomplishes this by adding a "hidden" class to previous shown images and adds a "show" class to the new image to be shown. //

function newChimp()
{
    randomSelector();
    for (x = 0; x < images.length; x++)
    {
        if (images[x] === images[selector] && images[selector].classList.contains("show"))
        {
            newChimp();
        } else if (images[x] === images[selector])
        {
            images[selector].classList.remove("hidden");
            images[selector].classList.add("show");
        } else
        {
            images[x].classList.add("hidden");
            images[x].classList.remove("show");
        }
    }
};


function philosophical()
{
    randomSelector();
    for (x = 0; x < wise.length; x++)
    {
        if (wise[x] === wise[selector] && wise[selector].classList.contains("show"))
        {
            philosophical()
        } else if (wise[x] === wise[selector])
        {
            wise[selector].classList.remove("hidden");
            wise[selector].classList.add("show");
        } else
        {
            wise[x].classList.add("hidden");
            wise[x].classList.remove("show");
        }
    }

};
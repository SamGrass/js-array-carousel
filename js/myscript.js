// inserire dinamicamente le immagini da js all'html
    // inserire le immagini in un array
    const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

    const itemContainer = document.querySelector(".carosello");
    // creo un ciclo nel quale ottengo gli elementi
    for (let i = 0; i < imageList.length; i++) {
        const imageItem = imageList[i];
        
        console.log(imageItem);

        // creo degli elementi che conterranno le immagini
        let itemContent = `
                <div class="image-container">
                    <img src="${imageItem}" alt="">
                </div>`

        itemContainer.innerHTML += itemContent;
    }

    // seleziono gli image-container nell'html
    const imageContainer = document.getElementsByClassName("image-container");

    let activeImage = 0;

    // la prima immagine dorvà avere la classe active 
    imageContainer[activeImage].classList.add("active");
    console.log(imageContainer[0]);

    // seleziono i bottoni
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    // far si che al click dei due bottoni la classe active si sposti tra i vari elementi

    // click next 
    next.addEventListener ("click",
        function() {
            if (activeImage < imageList.length - 1) {
                // rimuovo la classe al vecchio valore
                imageContainer[activeImage].classList.remove("active");

                // deve aumentare il valore di active image
                activeImage++;

                // aggiungo la classe al nuovo valore
                imageContainer[activeImage].classList.add("active");

                console.log(activeImage);
            }    
        }
    );
    
    // click prev
    prev.addEventListener ("click",
        function() {

            if (activeImage > 0) {

                // rimuovo la classe al vecchio valore
                imageContainer[activeImage].classList.remove("active");

                // deve aumentare il valore di active image
                activeImage--;

                // aggiungo la classe al nuovo valore
                imageContainer[activeImage].classList.add("active");

                console.log(activeImage);
            } 
            
        }
    );
    
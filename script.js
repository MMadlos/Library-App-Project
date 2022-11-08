const library = (() => {
    const myLibrary = [
        {title: "El nombre del viento", author: "Autor 1", pages: "1", isRead: true}
    ];

    const defaultBooks = (() => {
        addBookToLibrary("El nombre del viento", "Autor 1", "1", true)
        addBookToLibrary("El temor de un hombre sabio", "Autor 2", "2", false)
        addBookToLibrary("Titulo 3", "Testing", "3", false)
        addBookToLibrary("Titulo 4", "Testing", "4", false)

        displayLibrary()
    })();


    function createCard(book) {
        //Create and select html elements
        const gridContainer = document.getElementById("grid-container")
        const cardContainer = document.createElement("div")
        const textContainer = document.createElement("div")
        const titleLabel = document.createElement("p")
        const titleValue = document.createElement("p")
        const authorLabel = document.createElement("p")
        const authorValue = document.createElement("p")
        const pagesLabel = document.createElement("p")
        const pagesValue = document.createElement("p")
        const cardBtnsContainer = document.createElement("div")
        const isReadBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")

        // Add attributes
        cardContainer.classList.add("card-container")
        textContainer.classList.add("text-container")
        titleLabel.classList.add("text-title")
        titleValue.classList.add("text-input")
        authorLabel.classList.add("text-title")
        authorValue.classList.add("text-input")
        pagesLabel.classList.add("text-title")
        pagesValue.classList.add("pages")
    
        cardBtnsContainer.classList.add("card-btns-container")
        isReadBtn.classList.add("btn")
        deleteBtn.classList.add("btn", "eliminar")
    
        isReadBtn.setAttribute("type", "button")
        deleteBtn.setAttribute("type", "button")

        // HTML skeleton
        gridContainer.appendChild(cardContainer)
        cardContainer.appendChild(textContainer)
        textContainer.appendChild(titleLabel)
        textContainer.appendChild(titleValue)
        textContainer.appendChild(authorLabel)
        textContainer.appendChild(authorValue)
        textContainer.appendChild(pagesLabel)
        textContainer.appendChild(pagesValue)
        cardContainer.appendChild(cardBtnsContainer)
        cardBtnsContainer.appendChild(isReadBtn)
        cardBtnsContainer.appendChild(deleteBtn)

        // Add static content
        titleLabel.textContent = "Título"
        authorLabel.textContent = "Autor"
        pagesLabel.textContent = "Páginas"
        deleteBtn.textContent = "Eliminar"

        // Add dynamic content
        titleValue.textContent = book.title
        authorValue.textContent = book.author
        pagesValue.textContent = book.pages

        if(book.isRead){
            isReadBtn.textContent = "Leído"
            isReadBtn.classList.add("leido")
        } else {
            isReadBtn.textContent = "No leído"
            isReadBtn.classList.add("no-leido")
        }

        //Set key attributes
        cardContainer.setAttribute("data-index-myLibrary", myLibrary.indexOf(book))

        // Bind events
        toggleIsReadBtn(isReadBtn)
        deleteBtn.addEventListener("click", deleteCard)

    }

    function addBookToLibrary (title, author, pages, isRead) {
        const newBook = {title, author, pages, isRead}

        myLibrary.push(newBook);
        displayLibrary();
    }

    // Bind events
    const addBtn = document.getElementById("btn_añadir")
    addBtn.addEventListener("click", addFormValues)

    // Update library (Eg: after deleting an item)
    function displayLibrary() {
        const allCardContainers = document.querySelectorAll(".card-container")
        allCardContainers.forEach(card => {
            card.remove();
        })

        myLibrary.forEach(book => {
            createCard(book)
        })
    }

    function addFormValues() {
        let formTitle = document.getElementById("titulo")
        let formAuthor = document.getElementById("autor")
        let formPages = document.getElementById("paginas")
        let formIsRead = document.getElementById("leido")

        addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formIsRead.checked)

        //Reset form values
        formTitle.value = ""
        formAuthor.value = ""
        formPages.value = ""
        formIsRead.checked = false;
    };

    function toggleIsReadBtn(btn) {
        btn.addEventListener("click", () => {
            btn.classList.toggle("leido");
            btn.classList.toggle("no-leido");

            (btn.textContent == "Leído") ? (btn.textContent = "No leído") : (btn.textContent = "Leído");
        })
    }

    function deleteCard(event) {
        const cardContainer = event.target.parentNode.parentNode
        const cardIndexArray = cardContainer.getAttribute("data-index-myLibrary")

        myLibrary.splice([cardIndexArray], 1)

        displayLibrary()
    }

    
})();

// TEMAS PENDIENTES:
// No funciona por array, sino por elementos.
// No hay restricciones al añadir un libro
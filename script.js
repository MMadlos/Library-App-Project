let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(title, author, pages, isRead) {
    const item = new Book(title, author, pages, isRead)
    return myLibrary.push(item)
}

// DEFAULT

addBookToLibrary("El nombre del viento", "Ni idea", "1", false)
addBookToLibrary("Testing", "Testing", "2", true)
addBookToLibrary("El nombre del viento", "Ni idea", "3", false)
addBookToLibrary("El nombre del viento", "Ni idea", "4", true)

displayLibrary()



// Add new card
function newCardContainer(array) {
    //Select and create html elements
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

    // Add classes & attributes to html elements
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

    // HTML Skeleton
    gridContainer.appendChild(cardContainer)
    cardContainer.append(textContainer, cardBtnsContainer)
    textContainer.append(titleLabel, titleValue, authorLabel, authorValue, pagesLabel, pagesValue)
    cardBtnsContainer.append(isReadBtn, deleteBtn)


    // Static content of html elements
    titleLabel.textContent = "Título"
    authorLabel.textContent = "Autor"
    pagesLabel.textContent = "Páginas"
    deleteBtn.textContent = "Eliminar"

    // Dynamic content of html elements
    titleValue.textContent = array.title
    authorValue.textContent = array.author
    pagesValue.textContent = array.pages

    if(array.isRead){
        isReadBtn.textContent = "Leído"
        isReadBtn.classList.add("leido")
    } else {
        isReadBtn.textContent = "No leído"
        isReadBtn.classList.add("no-leido")
    }

    toggleIsReadBtn(isReadBtn)
    addDeleteBtn(deleteBtn)

    //Set key attributes
    cardContainer.setAttribute("data-index-myLibrary", myLibrary.indexOf(array))
}


// Add new book

const formTitulo = document.getElementById("titulo")
const formAutor = document.getElementById("autor")
const formPaginas = document.getElementById("paginas")
const formLeido = document.getElementById("leido")
const btnAñadir = document.getElementById("btn_añadir")

btnAñadir.addEventListener("click", () => {
    addBookToLibrary(formTitulo.value, formAutor.value, formPaginas.value, formLeido.checked)
    newCardContainer(myLibrary.at(-1))

    //Reset form values
    formTitulo.value = ""
    formAutor.value = ""
    formPaginas.value = ""
    formLeido.checked = false;
})

// Update library (Eg: after deleting an item)
function displayLibrary() {
    const allCardContainers = document.querySelectorAll(".card-container")
    allCardContainers.forEach(card => {
        card.remove();
    })

    myLibrary.forEach(book => {
        newCardContainer(book)
    })
}


// isReadBtn
function toggleIsReadBtn(btn) {
    btn.addEventListener("click", () => {
        btn.classList.toggle("leido");
        btn.classList.toggle("no-leido");

        (btn.textContent == "Leído") ? (btn.textContent = "No leído") : (btn.textContent = "Leído");
    })
}

// BOTON ELIMINAR
function addDeleteBtn(btn) {
    btn.addEventListener("click", () => {
        const cardContainer = btn.parentNode.parentNode
        const cardIndexArray = cardContainer.getAttribute("data-index-myLibrary")
        
        myLibrary.splice([cardIndexArray], 1)

        //Falta actualizar lo que se ve en pantalla
        displayLibrary()
    })
}
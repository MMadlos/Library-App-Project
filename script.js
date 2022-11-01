let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const item = new Book(title, author, pages, read)
    return myLibrary.push(item)
}

addBookToLibrary("El nombre del viento", "Ni idea", "1", true)
addBookToLibrary("El temor de un hombre sabio", "Ni idea", "2", false)
addBookToLibrary("El Señor de los anillos", "Wow", "3", true)
addBookToLibrary("Harry Popoter", "JK ROWLING", "5948796456", true)
console.table(myLibrary);

// Create as many card containers as elements in the array and display them

function newDiv(className){
    let newDiv = document.createElement("div");
    newDiv.classList.add(className)
    return newDiv
}

function newParagraph(className){
    let newParagraph = document.createElement("p");
    newParagraph.classList.add(className)
    return newParagraph
}

function newBtn(className){
    let newBtn = document.createElement("button")
    newBtn.classList.add(className)
    return newBtn
}

function createCardContainer(array) {
    const gridContainer = document.getElementById("grid-container")

    let cardContainer = newDiv("card-container");
    let textContainer = newDiv("text-container");
    
    gridContainer.appendChild(cardContainer)
    cardContainer.appendChild(textContainer)

    for (i=0; i <= 2; i++) {
        let textTitle = newParagraph("text-title")
        let textInput = newParagraph("text-input")
        
        if(i == 0) {
            textTitle.textContent = "Título"
            textInput.setAttribute("id", "bookTitle")
            textInput.textContent = array.title
            textContainer.appendChild(textTitle)
            textContainer.appendChild(textInput)
    
        }
        if(i == 1) {
            textTitle.textContent = "Autor"
            textInput.setAttribute("id", "bookAuthor")
            textInput.textContent = array.author
            textContainer.appendChild(textTitle)
            textContainer.appendChild(textInput)
    
        }
        if(i == 2) {
            textTitle.textContent = "Páginas"

            textContainer.appendChild(textTitle)
    
        }
        
    }

    let textInput = newParagraph("pages")
    textInput.setAttribute("id", "bookPages")
    textInput.textContent = array.pages
    textContainer.appendChild(textInput)

    // Añadir los botones
    let cardBtnContainer = newDiv("card-btns-container");
    
    cardContainer.appendChild(cardBtnContainer)
    

    for (i=1; i <= 2; i++) {
        let cardBtn = newBtn("btn")
        cardBtnContainer.appendChild(cardBtn)

        if(i == 1) {
            cardBtn.classList.add("no-leido")
            cardBtn.textContent = "No leido"
    
        }
        if(i == 2) {
            cardBtn.classList.add("eliminar")
            cardBtn.textContent = "Eliminar"
        }
    }
}

function displayBooks(){
    myLibrary.forEach(element => createCardContainer(element))
}

displayBooks()
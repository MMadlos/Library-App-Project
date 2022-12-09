class Book {
	constructor(title, author, pages, isRead) {
		this.title = title
		this.author = author
		this.pages = pages
		this.isRead = isRead
	}

	bookCard() {
		// Para cada libro, se debe crear su Card que después se mostrará en "displayLibrary"
		// createBookCard(book)
	}
}

class Library {
	constructor() {
		this.library = []
	}

	addBook(book) {
		this.library.push(book)
	}

	// defaultBooks() {
	// 	Book("El nombre del viento", "Autor 1", "1", true))
	// 	addBook(new Book("El temor de un hombre sabio", "Autor 2", "2", false))
	// 	addBook(new Book("Titulo 3", "Testing", "3", false))
	// 	addBook(new Book("Titulo 4", "Testing", "4", false))
	// }

	showBooks() {
		return console.table(this.library)
	}

	displayLibrary() {
		// Remove all elements inside the grid container
		const allBookCards = document.querySelectorAll("#grid-container > div")
		allBookCards.forEach((card) => card.remove())

		// Add all elements from the library into the grid container
		this.library.forEach((book) => {
			createBookCard(book)
		})
	}
}

const library = new Library()

const defaultBooks = (() => {
	library.addBook(new Book("El nombre del viento", "Autor 1", "1", true))
	library.addBook(new Book("El temor de un hombre sabio", "Autor 2", "2", false))
	library.addBook(new Book("Titulo 3", "Testing", "3", false))
	library.addBook(new Book("Titulo 4", "Testing", "4", false))
	library.showBooks()
})()

console.log(library.library)

library.displayLibrary()

const form = (() => {
	// DOM
	let title, author, pages, isRead

	title = document.querySelector("input#titulo")
	author = document.querySelector("input#autor")
	pages = document.querySelector("input#paginas")
	isRead = document.querySelector("input#leido")

	const addBookToLibrary = () => {
		library.addBook(new Book(title.value, author.value, pages.value, isRead.checked))
		library.showBooks()
		library.displayLibrary()

		//Reset form
		title.value = ""
		author.value = ""
		pages.value = ""
		isRead.checked = false
	}

	const addBtn = document.getElementById("btn_añadir")
	addBtn.addEventListener("click", addBookToLibrary)
})()

function createBookCard(book) {
	// Create DOM
	const gridContainer = document.getElementById("grid-container")
	const textContainer = document.createElement("div")
	const cardContainer = document.createElement("div")
	const titleLabel = document.createElement("p")
	const titleValue = document.createElement("p")
	const authorLabel = document.createElement("p")
	const authorValue = document.createElement("p")
	const pagesLabel = document.createElement("p")
	const pagesValue = document.createElement("p")
	const cardBtnsContainer = document.createElement("div")
	const isReadBtn = document.createElement("button")
	const deleteBtn = document.createElement("button")

	// 	Add attributes and classes
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

	// Add static content
	titleLabel.textContent = "Título"
	authorLabel.textContent = "Autor"
	pagesLabel.textContent = "Páginas"
	deleteBtn.textContent = "Eliminar"

	// Add dynamic content
	titleValue.textContent = book.title
	authorValue.textContent = book.author
	pagesValue.textContent = book.pages

	if (book.isRead) {
		isReadBtn.textContent = "Leído"
		isReadBtn.classList.add("leido")
	} else {
		isReadBtn.textContent = "No leído"
		isReadBtn.classList.add("no-leido")
	}

	// 	HTML Skeleton
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

	//Set key attributes
	cardContainer.setAttribute("data-index-myLibrary", library.library.indexOf(book))

	// Btn events
	isReadBtn.addEventListener("click", toggleIsReadBtn)
	deleteBtn.addEventListener("click", deleteCard)
}

function toggleIsReadBtn(event) {
	const cardContainer = event.target.parentNode.parentNode
	const cardIndexArray = cardContainer.getAttribute("data-index-myLibrary")

	this.classList.toggle("leido")
	this.classList.toggle("no-leido")

	let isReadValue = library.library[cardIndexArray].isRead
	library.library[cardIndexArray].isRead = isReadValue ? false : true
	library.displayLibrary()
	library.showBooks()
}

function deleteCard(event) {
	const cardContainer = event.target.parentNode.parentNode
	const cardIndexArray = cardContainer.getAttribute("data-index-myLibrary")

	library.library.splice([cardIndexArray], 1)
	library.displayLibrary()
	library.showBooks()
}

// displayLibrary()

// TEMAS PENDIENTES:
// No hay restricciones al añadir un libro

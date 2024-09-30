// Array holding the top 10 books
const booksArray = [
    "The Martian",
    "Altered Carbon",
    "Game of Thrones",
    "The Handmaid's Tale",
    "The Girl With the Dragon Tattoo",
    "Extreme Ownership",
    "Mere Christianity",
    "The Dichotomy of Leadership",
    "Inside Delta Force",
    "The Lions of Lucerne"
];

// Function to display the array elements in ascending order
function displayTopToBottom() {
    let bookList = document.getElementById('book-list');
    bookList.innerHTML = ""; // Clear previous content

    booksArray.sort(); // Sort in ascending order

    for (let i = 0; i < booksArray.length; i++) {
        bookList.innerHTML += `<li>${booksArray[i]}</li>`;
    }
}

// Function to display the array elements in descending order
function displayBottomToTop() {
    let bookList = document.getElementById('book-list');
    bookList.innerHTML = ""; // Clear previous content

    booksArray.sort().reverse(); // Sort in descending order

    for (let i = 0; i < booksArray.length; i++) {
        bookList.innerHTML += `<li>${booksArray[i]}</li>`;
    }
}

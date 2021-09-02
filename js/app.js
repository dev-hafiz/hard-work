// Spinner toggle func 
const spinnerToggle = displaySpinner => {
     document.getElementById('spinner').style.display = displaySpinner;
}

document.getElementById('search-button').addEventListener('click', () => {



     //  get input value 
     const inputFiled = document.getElementById('input-filed');
     const inputText = inputFiled.value;
     inputFiled.value = '';

     if (inputText.length > 0) {
          getInputText(inputText)
     } else {

          errorMassage.innerHTML = ` <p class="text-center bg-danger p-4 text-light w-50 mx-auto ">Please! keep to text in input filed what you are looking</p>`
     }
})

const getInputText = inputText => {

     const url = (`http://openlibrary.org/search.json?q=${inputText}`)
     fetch(url)
          .then(res => res.json())
          .then(data => displayBook(data.docs))

     /* spinnerToggle('block')
     errorMassage.textContent = ''; */
}


const displayBook = books => {
     if (books.offset == null) {
          spinnerToggle('none')
          foundMassage.innerHTML = `<h2 class = "text-center p-5 bg-dark text-warning">Not result Found</h2>`;
     }
     // total search results
     document.getElementById('total-results').innerHTML = `
      <h5 class = "fw-bold mb-4">Total results found ${books.length}</h5>
      `
     booksAreaParant.textContent = '';

     books.forEach(book => {
          const div = document.createElement('div');
          div.classList.add('col');
          div.innerHTML = `
          <div class="card">
                   <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                   <div class="card-body">
                     <h2 class="card-title">Book :${book.title}</h2>
                      <h4 class="card-title">Author :${book.author_name}</h4>
                     <h6 class="card-title fw-bold">First publish : ${book.first_publish_year}</h6>
                     
                   </div>
          </div>
          `
          booksAreaParant.appendChild(div);
          spinnerToggle('none')
          foundMassage.textContent = '';
     });
}

// get global variable 
/* const booksAreaParant = document.getElementById('books-area');
const totalResult = document.getElementById('total-results')
const foundMassage = document.getElementById('not-found');
const errorMassage = document.getElementById('error-massage'); */

// default empty befor search 
/* totalResult.textContent = '';
booksAreaParant.textContent = '';
foundMassage.textContent = ''; */
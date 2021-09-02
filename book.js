const errorMessage = document.getElementById('error-message').style.display = 'none';

  /*============ search book =================*/

const getSearchValue = () =>{
    const inputField = document.getElementById('input-field');
    const inputCheck = inputField.value
    inputField.value = '';
    if(inputCheck === ''){
      displayError();
    }else{
      document.getElementById('error-message').style.display = 'none';
      fetch(`https://openlibrary.org/search.json?q=${inputCheck}`)
      .then(res => res.json())
      .then(data => bookDetails(data))
    } 
}  
       /*============ error show  =================*/
const displayError = () =>{
  document.getElementById('error-message').style.display = 'block';
}

const bookDetails = books =>{
      // console.log(books);
      const bookList = Object.values(books);
      const bookData = bookList[3];

      /*============ operation for total books================*/
      const bookNum = bookList[0];
      const informationField = document.getElementById('information');
      informationField.textContent = "";
      const h3 = document.createElement('h3');
      h3.innerHTML = `
      <h3 class="bg-dark text-light w-50 mx-auto p-4 rounded-pill">Total Book Found: ${bookNum}</h3>
      `;
      const showDetails = document.getElementById('show-details');
      showDetails.textContent = '';
      informationField.appendChild(h3)
             /*============  condition check for validity =================*/
      let emptyArray = books.docs[0];
      if(emptyArray === undefined){
            displayError();
      }else{
        bookData.forEach(book => {
                   /*============ Books details =================*/  
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card border border-dark cardShadow" style="width: 22rem; height:100%;">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top " style="height:300px" alt="...">
            <div>
              <h5 class="card-title p-3"><span class="fw-bold text-warning">Book-Name :</span> ${book.title}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item fw-bold"><span class="fw-bold text-danger">Author-Name :</span> ${book.author_name ? book.author_name[0]:"undefine"}</li>
              <li class="list-group-item"><span class="fw-bold text-primary">Publisher-Name</span>: ${book.publisher ? book.publisher[0]:'undefine'}</li>
              <li class="list-group-item"><span class="fw-bold text-secondary">First Publish-Date</span>: ${book.publish_date ? book.publish_date[0]:"undefine"}</li> 
            </ul>
          </div>
          `;
            showDetails.appendChild(div);
          })
      }    
}

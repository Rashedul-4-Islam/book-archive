const errorMessage = document.getElementById('error-message').style.display = 'none';

const getSearchValue = () =>{
    const inputField = document.getElementById('input-field');
    const inputCheck = inputField.value
    inputField.value = '';
    if(inputCheck === ''){
         displayError()
    }else{
      fetch(`https://openlibrary.org/search.json?q=${inputCheck}`)
      .then(res => res.json())
      .then(data => bookImage(data))
    }
   
}

const displayError = () =>{
  document.getElementById('error-message').style.display = 'block';
}

const bookImage = books =>{
      console.log(books);
      const bookList = Object.values(books);
      const bookData = bookList[3];

      /*============ Search the total books================*/
      const bookNum = bookList[0];
      const informationField = document.getElementById('information');
      informationField.textContent = "";
      const h3 = document.createElement('h3');
      h3.innerText = `Total Book Found: ${bookNum}`;
      const responsePart = document.getElementById('response-part');
      responsePart.textContent = '';
      informationField.appendChild(h3)
      // console.log(bookData);
      bookData.forEach(book => {
          // const demoFive = `${book.title}`;
          // // console.log(demoFive);
         
            
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card border border-dark cardShadow" style="width: 18rem;">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top " style="height:300px" alt="...">
            <div class="card-body">
              <h5 class="card-title">Book-Name: ${book.title}</h5>
             
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item fw-bold">Author-Name: ${book.author_name[0]}</li>
              <li class="list-group-item">Publisher-Name: ${book.publisher[0]}</li>
              <li class="list-group-item">Publish-Date: ${book.publish_date[0]}</li> 
            </ul>
          </div>
          `;
            // console.log(div);
            responsePart.appendChild(div);
          
         
      })
      
}


// <li class="list-group-item">Language: ${book.language}</li>
 // <h6 class="card-text"></h6>
const getSearchValue = () =>{
    const inputField = document.getElementById('input-field').value;
    inputField.textContent = "";
    fetch(`https://openlibrary.org/search.json?q=${inputField}`)
    .then(res => res.json())
    .then(data => bookImage(data.docs))
}

const bookImage = books =>{
      // console.log(books);
      const length = `${books.length}`;
        console.log(length);
        const informationField = document.getElementById('information');
        informationField.textContent = "";
        const h3 = document.createElement('h3');
        h3.innerText = `
              The Total search Result-${books.length}
        `;

        informationField.appendChild(h3)
      
      books.forEach(book => {
          // console.log(book);
          // 
        //   const url = ` `;
        // //   console.log(url);
          let responsePart = document.getElementById('response-part');
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card border border-dark cardShadow" style="width: 18rem;height:25rem;">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top " style="height:300px" alt="...">
            <div class="card-body">
              <h5 class="card-title">Book-Name: ${book.title}</h5>
              <h6 class="card-text">Author-Name: ${book.author_name}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Publisher-Name: ${book.publisher}</li>
              <li class="list-group-item">Publish-Date: ${book.publish_date}</li>
              <li class="list-group-item">Language: ${book.language}</li>
            </ul>
           
          </div>
                  
                 `;
            // console.log(div);
            responsePart.appendChild(div);
      })
      
}


//
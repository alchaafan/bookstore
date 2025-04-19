function getBooksTemplates(i) {
    return                             `
             
                                             <div class="book">
                                                <img class="bookImg" src="./img/book.png" alt="">
                                                <h2>${books[i].name}</h2>
                                                <p> Author: ${books[i].author}</p>
                                                <p>${books[i].likes}</p>
                                                <p>${books[i].liked}</p>
                                                <p>${books[i].price}</p>
                                                <p>Erscheinungsjahr: ${books[i].publishedYear}</p>    
                                                <div id="commentsContainer${i}"></div>
                                             </div>
             
             
                                      `

}





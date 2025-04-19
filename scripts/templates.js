function getBooksTemplates(i) {
    return                             `
             
                                             <div class="book">
                                               
                                                <h2>${books[i].name}</h2>
                                                <p> Author: ${books[i].author}</p>
                                                <div>${books[i].bild}</div>
                                                <p>${books[i].likes}</p>
                                                <p>${books[i].liked}</p>
                                                <p>${books[i].price}</p>
                                                <p>Erscheinungsjahr: ${books[i].publishedYear}</p>    
                                                <div id="commentsContainer${i}"><p></p></div>
                                             </div>
             
             
                                      `

}





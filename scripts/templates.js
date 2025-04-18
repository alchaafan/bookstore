function getBooksTemplates(i) {
    return                             `
             
                                             <div class="book">
                                             <img class="bookImg" src="./img/book.png" alt="">
                                             <h2>${books[i].name}</h2>
                                             <p>${books[i].author}</p>
                                             <p>${books[i].likes}</p>
                                             <p>${books[i].liked}</p>
                                             <p>${books[i].price}</p>
                                             <p>${books[i].publishedYear}</p>
                                            
                                             
                                         </div>
             
             
                                      `
}

function getCommentsTemplates(c) {

    return `
                                            
                                        <div id="commentsContaine">
                                                    <p>${books[i].comments[c].name}</p>
                                                    <p>${books[i].comments[c].comment}</p>

                                                </div>
                                                
    
    `

}

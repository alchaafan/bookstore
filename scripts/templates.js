function getBooksTemplates(i) {
    return `
             
                                <div class="book">
                      
                                    <h2>${books[i].name}</h2>
                                    <div>${books[i].bild}</div>
                                        <p> Author: ${books[i].author}</p>                                             
                                        <div id="likes${i}"><p>${books[i].likes} ${renderFav(i)} </p></div>
                                                            <p>Preis: ${books[i].price} €</p>
                                            <p>Erscheinungsjahr: ${books[i].publishedYear}</p>  
                                         <div id="commentsContainer${i}"> <input id="commentInput${i}"
                                            type="text" placeholder="dein Kommentar"> 
                                            <button onclick="addComment(${i})" id="sendBtn">&#10148;</button>  
                                              <p></p>
                                          </div>
                                                

                                 </div>
             
             
              `

}





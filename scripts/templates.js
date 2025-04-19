function getBooksTemplates(i) {
    return                             `
             
                                             <div class="book">
                                               
                                                <h2>${books[i].name}</h2>
                                                <div>${books[i].bild}</div>
                                                <p> Author: ${books[i].author}</p>                                             
                                                ${books[i].likes}
                                                <div id="favContainer">${books[i].liked}</div>
                                                <p>Preis: ${books[i].price} €</p>
                                                <p>Erscheinungsjahr: ${books[i].publishedYear}</p>  
                                                <div id="commentsContainer${i}"> <input type="text" placeholder ="dein Kommentar"> 
                                                                            <button>&#10148;</button></div>
                                             </div>
             
             
                                      `

}





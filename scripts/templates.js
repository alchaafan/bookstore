function getBooksTemplates(i) {
    return                             `
             
                                             <div class="book">
                                               
                                                <h2>${books[i].name}</h2>
                                                <div>${books[i].bild}</div>
                                                <p> Author: ${books[i].author}</p>                                             
                                                <p>${books[i].likes}</p>
                                                <p>${books[i].liked}</p>
                                                <p>Preis: ${books[i].price} €</p>
                                                <p>Erscheinungsjahr: ${books[i].publishedYear}</p>  
                                                <div id="commentsContainer${i}"> <input type="text"> 
                                                                            <button>&#10148;</button></div>
                                             </div>
             
             
                                      `

}





function init() {
   let contentRef = document.getElementById('content');
        for(let i = 0; i < books.length; i++) {
            contentRef.innerHTML += `
            
                                            <div class="book">
                                            <img class="bookImg" src="./img/book.png" alt="">
                                            <h2>${books[i].name}</h2>
                                            <p>${books[i].author}</p>
                                            <p>${books[i].likes}</p>
                                            <p>${books[i].liked}</p>
                                            <p>${books[i].price}</p>
                                            <p>${books[i].publishedYear}</p>
                                            
                                        </div>
            
            `;

        //     let commentsRef = document.getElementById('content')
        //     for ( let c = 0; c <books[i].comments.length; c++) {
        //         commentsRef.innerHTML += `
                
        //                                         <div class="book1">
        //                                         <p>${books[i].comments[c].name}</p>
        //                                         <p>${books[i].comments[c].comment}/p>
        //                                     </div>
                
        //         `

        //     }

        // }
    }
}

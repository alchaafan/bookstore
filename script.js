let books = [ {
  "name": "Die Geheimnisse des Ozeans",
  "author": "Clara Meer",
  "likes": 1250,
  "comments": [
    {
      "name": "Leser123",
      "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
    },
    {
      "name": "Bookworm84",
      "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
    },
    {
      "name": "FantasyFanatic",
      "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
    },
    {
      "name": "SciFiGuru",
      "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
    },
    {
      "name": "NovelLover",
      "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
    }
  ]
}];

  function init() {
  let bookRef = books[0]; 
  document.getElementById('name').innerText = `Name: ${bookRef.name}`
  document.getElementById('author').innerText = `Autor: ${bookRef.author}`
  document.getElementById('likes').innerText = `Likes: ${bookRef.likes}`

  //Kommentare
 let commentRef = document.getElementById('comments');
 commentRef.innerHTML = "Kommentare: <br>";

 for (let i=0; i<bookRef.comments.length; i++) {
  let comment = bookRef.comments[i];
  commentRef.innerHTML += `<p>${comment.name}:  ${comment.comment}</p>`;
 }
  }
  

let mainContainer = document.getElementById("mainContainer")



news.articles.map(function(each){
let author = each.author
let title = each.title
let description = each.description
let img = each.urlToImage
let publicationDate = each.publishedAt
let url = each.url


let eachNews = `<div class="card">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title} <br> <i>${author}</i></br></h5>
  <p class="card-text">${description}</p>
    <p class="card-text"><small class="text-muted">${publicationDate}</small></p>
    <a href="${url}" target="_blank"><button class="linkButton">Go to the news</button></a>
  </div>
</div>`

mainContainer.insertAdjacentHTML("beforeend", eachNews)



})

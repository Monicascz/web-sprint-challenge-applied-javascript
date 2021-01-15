import axios from "axios";

const cardCont = document.querySelector(".cards-container")

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
  
  const headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = article.headline;
  
  const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
  
  const imgCont = document.createElement('div')
    imgCont.classList.add('img-container')

  const imgTag = document.createElement('img')
    imgTag.src = article.authorPhoto;
  
  const span = document.createElement('span')
    span.textContent = article.authorName;

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgCont)
  imgCont.append(imgTag)
  authorDiv.appendChild(span)
cardCont.appendChild(cardDiv)
  
};


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((response)=>{
      console.log(response.data.articles)
      const bsArticles = response.data.articles.bootstrap;
      bsArticles.forEach((bsArticle)=>{
        Card(bsArticle)
      })
      const jsArticles = response.data.articles.javascript;
      jsArticles.forEach((jsArticle)=>{
        Card(jsArticle)
      })
      const jqueryArticles = response.data.articles.jquery;
      jqueryArticles.forEach((jqueryArticle)=>{
        Card(jqueryArticle)
      })
      const nodeArticles = response.data.articles.node;
      nodeArticles.forEach((nodeArticle)=>{
        Card(nodeArticle)
      })
      const techArticles = response.data.articles.technology;
      techArticles.forEach((techArticle)=>{
        Card(techArticle)
      })


    })
    .catch((error)=>{
      console.log('error', error)
    })
}

export { Card, cardAppender }

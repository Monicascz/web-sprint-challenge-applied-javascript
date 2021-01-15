

const Header = ({title, date, temp}) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const header = document.createElement('div')
  header.classList.add('header')

const spanDate = document.createElement('span')
  spanDate.classList.add('date')
  spanDate.textContent = date;

const H1 = document.createElement('h1') 
  H1.textContent = title;

const spanTemp = document.createElement('span')
  spanTemp.classList.add('temp')
  spanTemp.textContent = temp;
  const headerCont = document.querySelector('.header-container')
headerCont.appendChild(header)
header.appendChild(spanDate)
header.appendChild(H1)
header.appendChild(spanTemp)

return header

}; 

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  Header({title: "Lambda Times", date: "January 20th, 2021", temp: "26°"})
}

export { Header, headerAppender }

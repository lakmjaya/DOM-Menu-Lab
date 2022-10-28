// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  let topMenuEl = document.querySelector('#top-menu')
  for(let i=0; i<menuLinks.length;i++){
    let aTag = document.createElement('a')
    aTag.attributes.href = menuLinks[i].href;
    aTag.innerText = menuLinks[i].text;
    topMenuEl.appendChild(aTag)
}


let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.className='flex-ctr'
let mainBG = "var(--main-bg)"
console.log(mainEl)
mainEl.innerHTML="<h1> SEI Rocks!</h1>"


topMenuEl.style.height ="100%"
topMenuEl.style.backgroundColor="var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

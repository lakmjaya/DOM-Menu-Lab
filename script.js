// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  let topMenuEl = document.querySelector('#top-menu')
  let subMenuEl = document.querySelector('#sub-menu')
  let mainEl = document.querySelector("main")
  let mainBG = "var(--main-bg)"
  for(let i=0; i<menuLinks.length;i++){
    let aTag = document.createElement('a')
    aTag.attributes.href = menuLinks[i].href;
    aTag.innerText = menuLinks[i].text;
    topMenuEl.appendChild(aTag)
}

topMenuEl.style.height ="100%"
topMenuEl.style.backgroundColor="var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

subMenuEl.style.height='100%'
subMenuEl.style.backgroundColor='var(--sub-menu-bg)'
subMenuEl.style.position='absolute'
subMenuEl.style.top ='0'
subMenuEl.classList.add('flex-around')

mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML="<h1> SEI Rocks!</h1>"
mainEl.classList.add('flex-ctr')
console.log(mainEl)
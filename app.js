const main3=React.createElement('h1',{},"heading-1")
const main4=React.createElement('h1',{},"heading-2")
const main2=React.createElement('div',{id:'child'},main3,main4)
const main=React.createElement('div',{id:'parent'},main2)

const roott=ReactDOM.createRoot(document.getElementById('root'))
// heading2.innerText='This is heading2'
roott.render(main)

// console.log(heading2, roott)
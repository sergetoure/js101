const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad','Cangaba'];
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}:${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML

let mainCourseItem = ''
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>${index + 1}=${item}</p>`
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem

let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>${i + 1}=${dessertMenu[i]}</p>`
}

document.getElementById('dessertMenuItems').innerHTML = dessertItem

// MAP
const dessertMap=dessertMenu.map((item,index)=>`<li>${index}:${item}</li>`).join('')
const dessertUL=document.createElement('ul')
dessertUL.setAttribute('id','dessertUL')
document.getElementById('dessertUL').innerHTML=dessertMap
document.getElementsByName('body').innerHTML=dessertUL


// FILTER
const dessertstartWithS=dessertMenu.filter(dessert=>dessert.startsWith('C'))
console.log(dessertstartWithS)

// REDUCE

const dessertTotal=dessertMenu.reduce((acc,item,index)=>item.length+acc,0)
console.log(dessertTotal)

// FIND
const itemFind=dessertMenu.find((item,index)=>item.startsWith('C'))
console.log(itemFind)

//FOREACH
dessertMenu.forEach(item=>{
    console.log(item)
})


//PUSH POP SHIFT UNSHIFT SLICE SPLICE
dessertMenu.push('kikiu')
dessertMenu.unshift('kaka')

console.log(dessertMenu)

console.log(dessertMenu.pop())

console.log(dessertMenu.shift())

console.log(dessertMenu)

console.log(dessertMenu.slice(-1))
console.log(dessertMenu.splice(-1,1,'Business'))

console.log(dessertMenu)


//типы данных
//const a = 1;
//const b = 'hello';
//const c = true;
//const d = [1, 3, 4]
//console.log(typeof a)
//console.log(typeof b)
//console.log(typeof c)
//console.log(typeof d)

//какие даные возр фолс 
//console.log(Boolean(0))
//console.log(Boolean(''))
//console.log(Boolean(undefined))
//console.log(Boolean(null))
//console.log(Boolean(Number('123qwe')))
//console.log(Boolean(1))
//console.log(Boolean('qqqqq'))

// строгое и нестрогое равенство
//const a = 1;
//const b = 2;
//const c = 2;
//console.log(a === b)
//console.log(a !== b)
//console.log(b === c)
//console.log(b !== c)
 // блок иф
//if (b === c) {
    //console.log('ура')
//}

//if (0) {
    //console.log('ура')
//}
//else if (false === false){
  // console.log('повезло')  
//}
//else{
   //console.log('неповезло')  
//}


//let abc;
//console.log(abc)

//и и или
//console.log(1 === 1 && 1 === 2)
//console.log(1!==1 || 1===2)

//циклы
//const names = ['Юля', 'Руслан', 'Владимир', 'Роман']

//for (const name of names) {
    //if (name === 'Руслан') {
      ///  console.log('найдено')
    //}
//}

//for (let i = 0; i < names.length; i += 1){
    //if (i === 2) {
     //   console.log(names[i])
     //   break;
//}
  //  }
// ссылочные типы данных
  //const a = 2;
//const b = 2;
//console.log(a === b);

//const c = [1,2]
//const d = [1, 2]
//console.log(c === d)

//const i = c;
//console.log(i === c)
//console.log(NaN === NaN)
//console.log(isNaN(NaN))
//const exp1 = sum(1, 2, 3);
// функции
//function sum(a, b, c) {
   // const total = a + b + c
   // return total;
//}


//console.log(exp1)

//const exp2 = sum(42,33,11);
//console.log(exp2)

//const sum = function (a, b, c) {
   // const total = a + b + c
   // return total;
//}

//const exp3 = sum (1,2,3)
//console.log(exp3)


// перебирающ. методы массива
//const names = ['Юля', 'Руслан', 'Владимир', 'Роман']
//names.forEach((name, index) => {
  //  if (index === 2) {
    //    console.log(name)
    //}
//})
 

const nambers = [1, 2, 3, 4, 5]
//let total = 0;/
//nambers.forEach((name, index) => {

  //  if (index !== 2) {
    //    console.log(total+=name)
    //}
//})


//nambers.forEach((name, index,arr) => {
//arr[index] = name+10
   // name += 10
    //console.log(name)
//})
//console.log(nambers)

// map
const newNumber = nambers.map(namber => namber += 10)
console.log(newNumber)
console.log(nambers)

const names = ['Юля', 'Руслан', 'Владимир', 'Роман', 'Оля']
const newNames = names.map(name => {
    console.log(`${name} учит js`)
    //if (name === 'Оля') {
      //  return name + 'учить js'
   // }
})
console.log(newNames);


const found = names.find(name => name === 'Оля')
console.log(found + ' учит js')

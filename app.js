var array = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo']
// var groups = [object2, number2, undefined2, string2]
var object2 = []
var number2 = []
var undefined2 = []
var string2 = []

for(var i of array){
  if(typeof i === 'number'){
    number2.push(i)
  }
  else if(typeof i === 'object'){
    object2.push(i)
  }
  else if(typeof i === 'string'){
    string2.push(i)
  }
  else if(typeof i === 'undefined'){
    undefined2.push(i)
  }
}
console.log(number2)
console.log(object2)
console.log(string2)
console.log(undefined2)
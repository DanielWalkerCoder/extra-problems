function isEvenlyDivisible(num, num2) {
  if(num % num2 === 0){
    return true
  }else{return false}
}

function halfSquare(num) {
  return (num**2 / 2)
}

function isLong(str) {
  if(str.length >= 15){
    return true
  }else{
    return false
  }
}

function exclaim(str) {
  if(str[str.length - 1] !== '!'){
    return str + '!'
  } else{
  while(str[str.length - 1] === '!' && str[str.length - 2] === '!'){
    str = str.replace(str[str.length - 1], '')
  }
  return str
  }
}

function countWords(str) {
  let spaces = 0
  for(i = 0; i < str.length; i++){
    if(str[i] === ' '){
      spaces ++
    }
  } return spaces + 1
}

function containsDigit(str) {
  let digits = '0123456789'
  for(i = 0; i < str.length; i++){
    if(digits.indexOf(str[i]) !== -1){
      return true
    }
  } return false
}

function containsLowerCase(str) {
  let lower = ''
  for(i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()){
      lower += str[i]
    }
  }
  if(lower !== ''){
    return true
  } else{
    return false
  }
}

function containsUpperCase(str) {
  let upper = ''
  for(i = 0; i < str.length; i++){
    if(str[i] !== str[i].toLowerCase() && str[i] === str[i].toUpperCase()){
      upper += str[i]
    }
  }
  if(upper !== ''){
    return true
  } else{
    return false
  }
}

function containsNonAlphanumeric(str) {
  // let nonAlpha = ''
  // for(i = 0; i < str.length; i++){
  //   if(str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase() && parseInt(str[i]) === NaN){
  //     nonAlpha += str[i]
  //   }
  // }
  // if(nonAlpha !== ''){
  //   return true
  // } else{
  //   return false
  // }
  let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyz'
  for(i = 0; i < str.length; i++){
    if(alphaNum.indexOf(str[i].toLowerCase()) === -1){
      return true
    }
  } return false
}

function containsSpace(str) {
  let spaces = ''
  for(i = 0; i < str.length; i++){
    if(str[i] === ' '){
      spaces += str[i]
    }
  }
  if(spaces !== ''){
    return true
  } else{
    return false
  }
}

function digits(num) {
  // let numstr = num.toString()
  // let result = []
  // for(i = 0; i < numstr.length; i++){
  //   if(numstr[i] >= 0){
  //     result.push(numstr[i])
  //   } else{
  //   if(numstr[i] < 0){
  //     result.push(-1 * numstr[i])
  //   } 
  //   }
  // } return result
  num = Math.abs(num)
  let str = num.toString()
  let splitStr = str.split('')
  let result = []
  for(i = 0; i < splitStr.length; i++){
    if(splitStr[i] === '.'){
      continue
    }else {
      result.push(+splitStr[i])
    }
  } return result
}

function truncate(str) {
  if(str.length < 15){
    return str
  } else{
  if(str.length >= 15){
    let short = ''
    for(i = 0; i < 8; i++){
      short += str[i]
      }
    short += '...'
    return short
  }
}
}

function isValidPassword(str){
  return containsDigit(str) && !containsSpace(str) && containsLowerCase(str) && containsUpperCase(str) && containsNonAlphanumeric(str)
}

function onlyPunchy(arr) {
  let resultArr = []
  for(let movie of arr){
    let movieName = ''
    for(let char of movie){
      if(char === '!'){
        continue
      } else{
        movieName += char
      }
    }
    if(movieName.length <= 15){
      resultArr.push(movieName + '!')
    }
  } return resultArr
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
let word = prompt('insert your string')
let newString = '';
    for (let i = word.length - 1 ; i >= 0 ;i -- ){
        newString += word[i]
    }
    alert(newString)
   
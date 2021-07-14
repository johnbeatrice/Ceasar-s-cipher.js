function rot13(str) {
  //preparing 3 arrays: array of str, of the alphabet, and empty string
  let decoded = [];
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  al = al.split("");
  let regex = /[A-Z]|\s*!*\?*\.*/g;
  str = str.match(regex);
  
  //pushing all decoded letters to empty string "decoded"

  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < al.length; j++){
      if(str[i] === al[j] && j + 13 > 25){
          decoded.push(al[j - 13]);
        } else if(str[i] === al[j] && j + 13 <= 25){ 
        decoded.push(al[j + 13]);
        } 
      }
    }

    //pushing splicing spaces and special characters into "decoded"

  for(let i = 0; i < str.length; i++){
    if(str[i] === " " || str[i] === '?' || str[i] === '!' || str[i] === '.' ){
      decoded.splice(i, 0, str[i]);
    }
  }

  //return decoded array as a string
  

  return decoded.join("");
}

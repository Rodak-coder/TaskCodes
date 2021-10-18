function duplicateEncode(word){
    var letterCount = {};
    var letters = word.toLowerCase().split('');
  
    letters.forEach(function(letter) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    });
  
    return letters.map(function(letter) {
      return letterCount[letter] === 1 ? '(' : ')';
    }).join('');
  }

  /*function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}*/

/*function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }*/

  console.log(duplicateEncode(UBVedbvudbv));
  
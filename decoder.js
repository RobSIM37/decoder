function decoder(code) {

    let readPosition = 0;
    let result = '';

    while (readPosition < code.length) {
        
        while (isNaN(parseInt(code[readPosition])) && readPosition < code.length) {
            result += code[readPosition];
            readPosition++
        }

        readPosition += (parseInt(code[readPosition])+1);
    }

    return result;

}

console.log(decoder('0h2xce5ngbrdy')); // 'hey'
console.log(decoder('3vdfn')); // 'n'
console.log(decoder('0r')); // 'r'
console.log(decoder('2bna0p1mp2osl0e')); // 'apple'
console.log(decoder('0y4akjfes')); // 'yes'
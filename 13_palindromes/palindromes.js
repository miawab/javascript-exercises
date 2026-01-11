const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.split("");

    for(let i =0;i<str.length;i++){
        let cc = str[i].charCodeAt(0);
        if(!((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123))){
            str.splice(i,1);
            i--;
        }
    }
    console.log(str)
    let reversed = str.slice();

    reversed.reverse();
    reversed = reversed.join("");
    str = str.join("")
    if (str == reversed){
        return true;
    };
    return false;
}


// Do not edit below this line
module.exports = palindromes;

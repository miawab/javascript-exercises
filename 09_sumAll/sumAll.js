const sumAll = function(a,b) {
    if(!(a === Number(a) && b === Number(b)))
        return "ERROR";
    if( a<0 || b<0 || a%1!== 0 || b%1!== 0)
        return "ERROR";
    let sum;
    if (a>b){
        sum = a;
        a = b;
        b = sum;
    }
    sum = 0;
    for(a;a<=b;a++){
        sum = sum + a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

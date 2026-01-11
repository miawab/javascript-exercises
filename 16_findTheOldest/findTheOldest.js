const findTheOldest = function(people) {
    let sum = people.slice();
    sum.forEach((item)=>{
        if(item.yearOfDeath === undefined){
            item.yearOfDeath = 2026
        }
    })
    sum.sort((a,b)=>{
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });
    return sum[0];
};

// Do not edit below this line
module.exports = findTheOldest;

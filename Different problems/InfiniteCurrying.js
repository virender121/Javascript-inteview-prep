const currying =(a) =>{
    return function (b) {
        return function (c) {
            return a + b+ c
        };
    };
};
console.log(currying(1)(2)(3))


// It will work for the infinte arguments

const infinteCurrying = (a) =>{
    return function (b) {
        if(!b) {
            return a
        }
        return infinteCurrying(a +b)
    }
};
console.log(infinteCurrying(1)(2)(3)(4)(5)(6)())
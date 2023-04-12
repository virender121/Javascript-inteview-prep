Array.prototype.flat = function (depth = 1){
    const result = []
    (function flatt(arr,depth) {
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i]) && depth > 0){
                flatt(arr[i], depth-1);
            } else {
                result.push(arr[i])
            }
        }
    })(this,depth)
    return result
}

/*
The flatt() method is a javascript buit - in - method that flatten a nested array
by collapsing ann nested array into a single array.However if you need to supprot
older browser they dont have the flatt() method, you can create a polyfill that 
emulates the behaviour of the flat method
*/
if(!Array.prototype.filter) {
    Array.prototype.filter = function (callback) {
        let filteredArray = [];
        for(let i=0; i<this.length; i++){
            if(callback(this[i],i,this)) {
                filteredArray.push(this[i])
            }
        }
        return filteredArray
    };
}
// The for loop iterates through each element in the original array
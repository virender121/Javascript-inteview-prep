if(!Array.prototype.findIndex){
    Array.prototype.findIndex = function (callback) {
        let length = this.length;
        for(let i =0; i<length ; i++){
            if(callback.call(this, this[i], i, this)) {
                return i
            }
        }
        return -1
    }
}
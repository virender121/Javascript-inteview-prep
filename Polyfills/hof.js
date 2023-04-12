const hof = (callBack1, callBack2)=>{
    callBack1()
    setTimeout(callBack2, 2000)
    console.log("Three")
};

const callBack1 =() => {
    console.log("One")
}

const callBack2 =() => {
    console.log("Two")
}
hof(callBack1,callBack2)
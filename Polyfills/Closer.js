const getCityByState =(state) =>{
    const cities = {
        "New York" : "New York City",
        California : "Los angeles",
        Texas : "Houston",
        Florida :"Miami"
    }

    return function (){
        return cities[state] || "City not found"
    };

};
console.log(getCityByState("New York")()) // output :"New York City"
console.log(getCityByState("Texas")())  //output : "Houston"
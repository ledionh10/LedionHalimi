function sum (number1 , number2) {
    return number1 + number2;
  }
console.log(sum(3,4));

var name= "Digital School";


    // console.log(name)


function Dsfunction (){
    var localVar = "Digital School";
    console.log(localVar);
}

Dsfunction();

function triangle(gjatesia,lartesia) {
    return 0.5 * gjatesia * lartesia ;
    
}
console.log(triangle(0,4))

var Car = {
    name:"Bmw",
    color:"Red",
    year:"2021",

    startEngine : function() {
        alert("Vroommmm!!");
    },

    get getName() {
        return this.Name;
    },
    set setName(name){
        this.Name=Name;
    }

}

var Ledion={
    name:"Ledion",
    age: "19",
    nationality: "shqiptar",

    talk: function() {
        alert("mjauuuu");
    },

    get getName() {
        return this.name
    },

    set setName(name){
        return this.name=name;
    },
}



console.log(Car.color);
console.log(Car.year);
Car.startEngine();

console.log(Car.getName);
Car.setName="Mercedes";
console.log(Car.getName);
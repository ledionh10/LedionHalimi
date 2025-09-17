var Programminglanguages = ['JAVA','PHP','Python'];

console.log(Programminglanguages[0]);
console.log(Programminglanguages[1]);
console.log(Programminglanguages[2]);


Programminglanguages.push('Javascript');
console.log(Programminglanguages[3]);

Programminglanguages.pop();

Programminglanguages.unshift('JavaScript');
console.log(Programminglanguages);

Programminglanguages.shift();

Programminglanguages.slice(0,1, 'Ruby');



console.log(Math.random());


console.log(Math.floor(Math.random()*5));


var students =['john', 'drin'];
var [s1,s2] = students;

console.log(s1);
console.log(s2);
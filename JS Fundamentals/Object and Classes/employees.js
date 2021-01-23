function solve(input) {
    
    class Person {
        constructor(name) {
            this.name = name,
                this.number = name.length
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }
    input.map(x => {
        return new Person(x);
    })
    .forEach(obj => {
       console.log(obj.print()); 
    });
}

//     let employee = [];

//     input.forEach(element => {
//         let person = {
//             name: element,
//             number: element.length
//         }
//         employee.push(person);
//     });
//     employee.forEach( obj => {
//         console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
//     });
// }
//     let employee = {};

//     for (const line of input) {
//         employee[line] = line.length
//     }

//     Object.entries(employee).forEach(element => {
//         console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
//     });
// }
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
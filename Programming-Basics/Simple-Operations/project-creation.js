function projectCreation(name, projects) {
let hours = Number(projects) * 3;
let output = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
    
console.log(output);
}

projectCreation("Sanya" , "9")
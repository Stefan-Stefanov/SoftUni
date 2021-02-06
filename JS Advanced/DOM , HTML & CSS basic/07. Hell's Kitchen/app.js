function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const rest = document.querySelector('#bestRestaurant>p');
   const workersParag = document.querySelector('#workers>p');

   function onClick() {
      const arr = JSON.parse(input.value)

      let obj = {};

      arr.forEach(el => {
         const tokens = el.split(" - ");
         const restaurantName = tokens[0];
         const workersArr = tokens[1].split(", ");
         let workers = [];

         for (let worker of workersArr) {
            let [name, salary] = worker.split(" ");
            workers.push({ name: name, salary: Number(salary) });
         }

         if (obj[restaurantName]) {
            workers = workers.concat(obj[restaurantName].workers);
         }

         workers.sort((a, b) => b.salary - a.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         obj[restaurantName] = {
            workers,
            averageSalary,
            bestSalary
         };
      });;
      let bestRestSalary = 0;
      let bestRest = undefined;

      for (const name in obj) {
         if (obj[name].averageSalary > bestRestSalary) {
            bestRest = {
               name,
               workers: obj[name].workers,
               bestSalary: obj[name].bestSalary,
               averageSalary: obj[name].averageSalary
            }
            bestRestSalary = obj[name].averageSalary
         }
      }
      rest.textContent = `Name: ${bestRest.name} Average Salary: ${bestRest.averageSalary
         .toFixed(2)} Best Salary: ${bestRest.bestSalary.toFixed(2)}`
      let workerResult = [];

      bestRest.workers.forEach(worker => {
         workerResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })
      workersParag.textContent = workerResult.join(" ");
   }
}
["PizzaHut - Peter 500, George 300, Mark 800",
   "TheLake - Bob 1300, Joe 780, Jane 660"]

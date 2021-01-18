function solve (trainingCost) {
 trainingCost = Number(trainingCost);
 let snicers = trainingCost * 0.60;
 let sportWear = snicers * 0.80;
 let basketBall = sportWear / 4;
 let acessoars = basketBall / 5;
 let totalCost = snicers + sportWear + basketBall + acessoars + trainingCost
 console.log(totalCost.toFixed(2));
}
solve("320")
/** The First Creation Code before 2 years ago **/
function main() {
    var cost = +input_stdin_array[0];
    var tip = cost * input_stdin_array[1] / 100;
    var tax = cost * input_stdin_array[2] / 100;
    var total = cost + tip + tax;
    var round = Math.round(total);
    
    console.log('The total meal cost is ' + round + ' dollars.');
}

/** The Seconds Creation Code **/
// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let totalCost = meal_cost * (1 + (tip_percent / 100) + (tax_percent / 100));
    
    console.log(Math.round(totalCost));
}

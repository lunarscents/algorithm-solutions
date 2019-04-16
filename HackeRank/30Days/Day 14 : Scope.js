/** The one of way the creation code with .reduce() **/
let input = "3\n1 2 5";
const difference = () => {
  const result = input.split('\n')[1].split(' ').reduce(
    (target, el) => {
      let { min, max } = target;

      target["min"] = el > min ? el : min;
      target["max"] = el < max ? el : max;

      return target;
    },
    { min: -999, max: 999 }
  );

  console.log(Math.abs(result["max"] - result["min"]));
};

difference();


/** The one of way the creation code with .forEach() **/
let input = "3\n1 2 5";

function difference(input) {
  const split = input.split("\n");
  const length = +split[0];
  const array = split[1].split(" ");
  console.log(array, length);
  let maximum = 0;
  let result = 0;
  
  array.forEach(value1 => {
    array.forEach(value2 =>{
      result = Math.abs(value1-value2);
      if(result > maximum) {
        maximum = result;
      }
    })
  });
  console.log(maximum);
}

console.log(input);

difference(input);

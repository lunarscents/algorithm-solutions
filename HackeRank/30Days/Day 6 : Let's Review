function processData(input) {
    //Enter your code here
    input.split("\n").reduce((target, item, index) => {
        if (index && Number.isNaN(+item)) {
            let result = item.split('').reduce((target, text, index) => {
                target[+(index % 2 !== 0)] += text;

                return target;
            }, new Array(2).fill('')).join(' ')

            console.log(result);
        }

        return target;
    }, '');
} 

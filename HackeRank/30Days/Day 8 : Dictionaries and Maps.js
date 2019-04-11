/** The Creation Code with .reduce() **/
function processData(input) {
    //Enter your code here
    const { phoneBook, queries } = input.split('\n').reduce((target, item, index) => {
        let total = !index ? item : target['total'];
        let { 0: key, 1: value } = item.split(' ');

        !index
            ? (target['total'] = total)
            : (
                index <= total
                    ? (target['phoneBook'][key] = value)
                    : target['queries'].push(item)
            )

        return target;
    }, { total: 0, phoneBook: [], queries: [] });

    queries.forEach((query) => {
        let value = phoneBook[String(query)];

        console.log(value ? `${query}=${value}` : 'Not found');
    });
} 

/** The Creation Code with Map(), .set(), .get(), .reduce() **/
function processData(input) {
    //Enter your code here
    const inputData = input.split('\n');
    const dataLength = Number(inputData.shift());
    const phoneBook = new Map();
    const queryData = inputData.reduce((target, item, index) => {
        index < dataLength ? phoneBook.set(item.split(' ')[0], item.split(' ')[1]) : target.push(item);

        return target;
    }, []);

    queryData.forEach((val, index) => { 
        console.log(phoneBook.get(val) ? `${val}=${phoneBook.get(val)}` : 'Not found');
    })
}

/** The Creation Code with for~of **/
function processData(input) {
    //Enter your code here
    const splitInput = input.split("\n");
    const phoneBookSize = +splitInput[0];
    const inputValue = splitInput.slice(phoneBookSize + 1);
    const temp = splitInput.slice(1, phoneBookSize + 1).map(list => {
        let result = {
            name: list.split(" ")[0],
            phoneNumber: list.split(" ")[1]
        }
        return result;
    });
    
    let phoneBook = [];
    for (let list of temp) {
        phoneBook[list.name] = list.phoneNumber;
    }

    for (let name of inputValue) {
        if (phoneBook[name]) {
            console.log(`${name}=${phoneBook[name]}`);
        } else {
            console.log('Not found')
        }
    }
}

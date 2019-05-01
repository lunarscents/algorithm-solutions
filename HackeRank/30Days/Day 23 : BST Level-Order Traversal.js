// Add your code here
// To print values separated by spaces use process.stdout.write(someValue + ' ')
const queue = [root];
const result = [];

while (queue.length) {
    let treeNode = queue.shift();

    result.push(treeNode.data);

    treeNode.left && queue.push(treeNode.left);
    treeNode.right && queue.push(treeNode.right);
}

console.log(result.join(' '));

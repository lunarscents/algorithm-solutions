/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.reduce((target, item) => {
        (item.x === item.y) && (target += 1);
        return target;
    }, 0);
}

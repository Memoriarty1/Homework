function assignObjects(obj1, obj2) {
    newObject = {};
    copyObject(obj1, newObject);
    copyObject(obj2, newObject);

    return newObject;
}

function copyObject(object, newObject) {
    for (key in object) {
        if (typeof (object[key]) == 'object') {
            copyObject(object[key], newObject)
        } else {
            newObject[key] = object[key];
        };
    }
    return newObject
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
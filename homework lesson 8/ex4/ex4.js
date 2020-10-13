function getPerson(name, from, to) {
    return person = {
        name,
        age: Math.round(Math.random() * (to - from) + from)
    }
}

function personArray() {
    array = [];

    for (person of arguments) {
        array.push(person);
    }
    return array
}

function searchAge(persons) {

    function averageAge() {
        return sumAge / count;
    }

    function oldestPerson() {
        return oldestName;
    }

    function uniqueName() {
        return uniqueNameArray
    }

    sumAge = 0; 
    count = 0;
    oldestAge = 0; 
    oldestName = '';
    uniqueNameArray = [];

    for (person of persons) {
        sumAge += person.age; 
        count++;
        personAge = person.age; 
        personName = person.name;

        if (personAge > oldestAge) {
            oldestAge = personAge; 
            oldestName = personName;
        }

        if (!uniqueNameArray.includes(personName)) {
            uniqueNameArray.push(personName)
        }
    }

    return {
        averageAge: averageAge(),
        oldestPerson: oldestPerson(),
        uniqueName: uniqueName(),
    }
}

firstTom = getPerson('Nikolay', 18, 30);
Mike = getPerson('Peter', 20, 35);
Max = getPerson('Valera', 27, 45);
Ann = getPerson('Igor', 23, 25);
secondTom = getPerson('Nikita', 27, 65);

persons = personArray(firstTom, Mike, Max, Ann, secondTom);
console.log(persons);

personsData = searchAge(persons);
console.log(personsData.averageAge, 'averageAge');
console.log(personsData.oldestPerson, 'oldest person');
console.log(personsData.uniqueName, 'unique names');
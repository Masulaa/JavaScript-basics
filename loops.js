for (let i = 0; i < 10; i++) {
console.log(i);
}

const users = ['Max' , 'Ana', 'Luka'];

for(const user of users) {
    console.log(users);
}

const loggedInUser = {
    name: 'Luka',
    age: 16,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit');
}

console.log('Done!');
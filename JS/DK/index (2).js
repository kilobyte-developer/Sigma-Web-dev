const users = [
  {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34,
  },
  {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23,
  },
];

// Q1. Write a function to add a new record at the end of array users using spread operator, functions : addLast(users,temp)



function addLast(users, temp) {
  return [...users, temp];
}

const newUser = {
  id: 4,
  name: "alan",
  username: "alan",
  email: "alan@google.com",
  phone: "1-123-543-1857 123212",
  website: "alan.net",
  password: "alan_hashed_password",
  ages: 27,
};


console.log("adding last user")
const addLastUser = addLast(users, newUser);
console.log(addLastUser);
console.log("================================")


// Q2. Write a function to add a new record at the beginning of array users using spread operator, functions : addFirst(users,temp)

function addFirst(users, temp) {
  return [temp, ...users];
}

const firstUser = {
    id: 1,
    name: "emma",
    username: "emma",
    email: "emma@google.com",
    phone: "1-123-543-1857 123212",
    website: "emma.net",
    password: "emma_hashed_password",
    ages: 37,
  };

  console.log("adding First user")
  const addFirstUser = addFirst(users, firstUser);
  console.log(addFirstUser);
  console.log("================================")

// q3 Write a function to display all records only 3 fields id,name,username.functions : display(users) HINT : map

function display(users) {
    // return users.map(user => {
    //     return {
    //         id: user.id,
    //         name: user.name,
    //         username: user.username,
    //     }
    // })
    return users.map(({
      id,name,username
    }) =>({ id,name,username}))

}
console.log("display all records only 3 fields id,name,username.functions")
console.log(display(users));
console.log("================================")

//q4 Write a function which will display all records with name ==='demon' function Name ---> findNameEquals(users)HINT : Use filter.


function findNameEquals(users){
    return users.filter(user => user.name === 'demon')
    
}
console.log("name equals to demon")
console.log(findNameEquals(users))
console.log("================================")



//q5 Write a function which will display all the records starting with name 'B' or any character passed as parameter.function Name ---> findSpecificStartChar(users,'B')HINT : Use filter and string functions.

function findSpecificStartChar(users, char){
    return users.filter(user => user.name.startsWith(char))
}

console.log("charactor starting with B");
console.log(findSpecificStartChar(users, 'B'));

console.log("================================")

//q6  Write a function which will display sum of all ages. function Name ---> findSumAges(users) .HINT : Use reduce functions.
function findSumAges(users){
    return users.reduce((total, user) => total + user.ages, 0)    
}

console.log("sum of all ages");

console.log(findSumAges(users));

console.log("================================")

//q7 Write a function which will display all the records with only name & ages.unction Name ---> findAll(users)HINT : Use map.

function findAll(users){
    return users.map(user => {
        return {
            name: user.name,
            ages: user.ages,
        }
    })
}

console.log("only name & ages");

console.log(findAll(users));

console.log("================================")

//q8  Write a function to display sum of all ages of records having name starting with 'J'

function findSumAgesStartWithJ(users){
    return users.filter(user => user.name.startsWith('J')).reduce((total, user) => total + user.ages, 0)
}

console.log("sum of all ages of records having name starting with 'J'");

console.log(findSumAgesStartWithJ(users));

console.log("================================")


//q9 Write a function which will display all the records in sorting according to names.function Name ---> Sorting(data,'ASC')ASC -> ASCENDING/ DESC -> DESCENDING
function Sorting(data, order) {
  const Data = data.map(user => user);

  Data.sort((a, b) => {
    if (order === 'ASC') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return Data;
}

console.log("sorting according to names");

console.log("by ascending order",Sorting(users, 'ASC'));

console.log("================================")


//q10 Delete an object with specific array index.HINT : splice function : deleteRecord(users,1)

function deleteRecord(users , index){
    return users.splice(index, 1)
}

console.log("delete an object with specific array index");

console.log(deleteRecord(users, 0));
console.log("================================")
console.log("after deleting specific record orignal array pf users ")
console.log(users)

console.log("================================");

//q11 Insert an object at specific array index.HINT : splice function : InsertRecord(users,temp,1)

function insertRecordAtFirst (users ,temp ,index){
    return users.splice(index,0,temp)
}

console.log("insert an object at specific array index");
const xUser={
    id: 6,
    name:"leela",
    username:"leela",
    email:"leela@google.com",
    phone:"1-123-543-1857 123212",
    website:"leela.net",
    password:"leela_hashed_password",
    ages: 23,
}

insertRecordAtFirst(users, xUser, 0)
console.log(users)

console.log("================================");





















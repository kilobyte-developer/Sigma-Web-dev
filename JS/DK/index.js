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

//     Q1. Write a promise function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)

function addLast(users, temp) {
  return new Promise((resolve, reject) => {
    newusers = [...users, temp];
    resolve(newusers);
  });
}

const newUser = {
  id: 4,
  name: "New User",
  username: "new.user",
  email: "new.user@example.com",
  phone: "1-800-555-1234",
  website: "newuser.com",
  password: "new_hashed_password",
  ages: 29,
};

addLast(users, newUser)
  .then((users) => {
    console.log(
      "Q1. Write a promise function to add a new record at the end of array users using spread operator,\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log(
      "Q1. Write a promise function to add a new record at the end of array users using spread operator,\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });

// Q2. Write a promise function to add a new record at the beginning of array users using spread operator,
// functions : addFirst(users,temp)

function addFirst(users, temp) {
  return new Promise((resolve, reject) => {
    newusers = [temp, ...users];
    resolve(newusers);
  });
}

const FirstUser = {
  id: 1,
  name: "first User",
  username: "first.user",
  email: "first.user@example.com",
  phone: "first-800-555-1234",
  website: "firstuser.com",
  password: "firstUser_hashed_password",
  ages: 29,
};
addFirst(users, FirstUser)
  .then((users) => {
    console.log(
      "Q2. Write a promise function to add a new record at the beginning of array users using spread operator,\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log(
      "Q2. Write a promise function to add a new record at the beginning of array users using spread operator,\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });

//   Q3. Write a promise function to display all records only 3 fields id,name,username.
//   functions : display(users)
//   HINT : map
function displayAll(users) {
  return new Promise((resolve, reject) => {
    users = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
      };
    });
    resolve(users);
  });
}

displayAll(users)
  .then((users) => {
    console.log(
      "Q3. Write a promise function to display all records only 3 fields id,name,username.\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log(
      "Q3. Write a promise function to display all records only 3 fields id,name,username.\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });

//   Q4. Write a promise function which will display all records with name ==='demon'
//   function Name ---> findNameEquals(users)
//   If there are no records matching criteria then reject with message "NO RECORDS FOUND"
//   If there are records matching criteria then resolve with the data in form of array
//   HINT : Use filter.


function findNameEquals(users) {
  return new Promise((resolve, reject) => {
    users = users.filter((user) => user.name === "demon");
    if (users.length === 0) {
      reject("NO RECORDS FOUND");
    }
    resolve(users);
  });
}

findNameEquals(users)
  .then((users) => {
    console.log(
      "Q4. Write a promise function which will display all records with name ==='demon'\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log(
      "Q4. Write a promise function which will display all records with name ==='demon'\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });

//   Q5. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.
//   function Name ---> findSpecificStartChar(data,'B')
//   If there are no records matching criteria then reject with message "NO RECORDS FOUND"
//   If there are records matching criteria then resolve with the data in form of array.
//   HINT : Use filter and string functions.

function findSpecificStartChar(users, char) {
  return new Promise((resolve, reject) => {
    users = users.filter((user) => user.name.startsWith(char));

    if (users.length === 0) {
      reject("NO RECORDS FOUND");
    }
    resolve(users);
  });
}
findSpecificStartChar(users, "b")
  .then((users) => {
    console.log(
      "Q5. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log(
      "Q5. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });

//   Q6. Write a promise function which will display sum of all ages.
//   function Name ---> findSumAges(users)
//   If there are no records matching criteria then reject with message "NO RECORDS FOUND"
//   If there are records matching criteria then resolve with the data in form of array.
//   HINT : Use reduce functions.

function findSumAges(users) {
  return new Promise((resolve, reject) => {
    if (users.length === 0) {
      reject("NO RECORDS FOUND");
    }
    users = users.reduce((total, user) => {
      return total + user.ages;
    }, 0);

    resolve(users);
  });
}

findSumAges(users)
  .then((users) => {
    console.log("Q6. Write a promise function which will display sum of all ages.\n\n\n");
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log( "Q6. Write a promise function which will display sum of all ages.\n\n\n");
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });


//   Q7. Write a promise function which will display all the records with only name & ages.
// function Name ---> findAll(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use map.

function findAll(users) {
  return new Promise((resolve, reject) => {
    if (users.length===0) {
      reject("NO RECORDS FOUND")
    }
    users = users.map((user) => {
      return {
        name: user.name,
        ages: user.ages,
      };
    });
    resolve(users);
  });
}

findAll(users)
  .then((users) => {
    console.log(
      "Q7. Write a promise function which will display all the records with only name & ages.\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
  .catch((error) => {
    console.log(
      "Q7. Write a promise function which will display all the records with only name & ages.\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });

  // Q8. Write a function to display sum of all ages of records having name starting with 'B'
  // Use nesting promises function which first call Q1 function its output will be given to Q3 and display total of ages.
  // function : findNameAges(users,'B')
  // HINT : nesting of promises.
  
  function findNameAges(users, char) {
    return new Promise((resolve, reject) => {
      users = users.filter((user) => user.name.startsWith(char));
      if (users.length === 0) {
        reject("NO RECORDS FOUND");
      }
      users = users.reduce((total, user) => {
        return total + user.ages;
      }, 0);
      resolve(users);
    });
  }
  findNameAges(users, "b")
   .then((users) => {
    console.log(
      "Q8. Write a function to display sum of all ages of records having name starting with 'B'\n\n\n"
    );
    console.log(users);
    console.log("\n\n===========================================\n\n");
  })
   .catch((error) => {
    console.log(
      "Q8. Write a function to display sum of all ages of records having name starting with 'B'\n\n\n"
    );
    console.error("Error:", error);
    console.log("\n\n===========================================\n\n");
  });
















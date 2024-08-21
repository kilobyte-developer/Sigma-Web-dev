var data = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// Q1. Write a promise function to display all name starting with 'E'.
// function : findStartNames(data)
// Hint : Filter

const findStartNames = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data.filter((item) => item.name.startsWith("E"));
    if (result.length > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};
findStartNames(data).then((result) => console.log("question 1",result,"\n===========================")).catch((err) => console.log(err))
// Q2. Write a promise function to display all name ending with 'E'.
// function : findEndNames(data)
// Hint : Filter

const findEndNames = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data.filter((item) => item.name.endsWith("E"));
    if (result.length > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};


// Q3. Write a promise function to display total sum of all records pilotingScore+shootingScore.
// function : find(data)
// Hint : reduce.
const find = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data.reduce(
      (sum, item) => sum + item.pilotingScore + item.shootingScore,
      0
    );
    if (result > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};

// Q4. Write a promise function to display total sum of all records pilotingScore+shootingScore whose isForceUser===true
// function : findForce(data)
// Hint : filter , reduce.

const findForce = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data
      .filter((item) => item.isForceUser === true)
      .reduce((sum, item) => sum + item.pilotingScore + item.shootingScore, 0);
    if (result > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};

// Q5. Write a promise function to find all records whose isForceUser===true then multiply 6 to each pilotingScore and finally find sum of all all records pilotingScore+shootingScore
// function : findForceTotal(data)
// Hint : filter , map , reduce.

const findForceTotal = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data
      .filter((item) => item.isForceUser === true)
      .map((item) => item.pilotingScore * 6)
      .reduce((sum, item) => sum + item, 0);
    if (result > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};

// Q6. Write async function to call all above function Q1 Q2 Q3 Q4.
// function : async function findAll() {}

const findAll = async (data) => {
    try {
      const result1 = await findStartNames(data);
      console.log("Result 1:", result1,"\n===================================");
      const result2 = await findEndNames(data);
      console.log("Result 2:", result2,"\n===================================");
      const result3 = await find(data);
      console.log("Result 3:", result3,"\n===================================");
      const result4 = await findForce(data);
      console.log("Result 4:", result4,"\n===================================");
    } catch (error) {
      console.log(error);
    }
  };
  findAll(data);

// Q7. Write async function in which Q1 output will act as input Q3.
// function : async function findAllTotal() {}

const findAllTotal = async (data) => {
  const result = await findStartNames(data);
  const result2 = await find(result);
  console.log("======================================");
  console.log("question No7 \n", result2);
};
findAllTotal(data);


// Q8. Using nesting of promises perform Q1 output will act as input Q3 function.

const question8 = async (data) => {
   findStartNames(data)
    .then((result) => find(result))
    .then((result) => console.log("question 8", result,"\n======================================"))
    .catch((error) => console.log("question 8 error: " + error,"\n======================================"));
};
question8(data);

// Q9.Display only name of person having isForce===true and shooting>10
// Hint : filter and map

const question9 = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data
      .filter((item) => item.isForceUser === true && item.shootingScore > 10)
      .map((item) => item.name);
    if (result.length > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};
question9(data).then((data) => console.log("Q9 Result:", data,"\n======================================")).catch((err) => console.log(err,"\n======================================"));

// Q10. Using Promise.all give a call to Q1 Q2 Q3 functions.
const question10 = async () => {
    try {
      const results = await Promise.all([
        findStartNames(data),
        findEndNames(data),
        find(data),
      ]);
      console.log("Q10 Results:", results,"\n======================================");
    } catch (error) {
      console.log("question 10",error,"\n======================================");
    }
  };
  question10();

// Q11. Using Promise.race give a call to Q1 Q2. functions.
const question11 = async (data) => {
  return new Promise((resolve, reject) => {
    const result = Promise.race([findStartNames(data), findEndNames(data)]);
    if (result.length > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};
question11(data)
  .then((data) => console.log("question11", data,"\n======================================"))
  .catch((err) => console.log("error", err,"\n======================================"));

// Q12. Write a promise function to perform sorting on shooting in ascending order.
// Hint : sort.
const question12 = async (data) => {
  return new Promise((resolve, reject) => {
    const result = data.sort((a, b) => a.shootingScore - b.shootingScore);
    if (result.length > 0) {
      resolve(result);
    } else {
      reject("NO RECORDS FOUND");
    }
  });
};
question12(data)
  .then((data) => console.log("question12", data,"\n======================================"))
  .catch((err) => console.log("error",err,"\n======================================"));

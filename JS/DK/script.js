 const  question1= async() =>{
    const apiUrl = 'https://reqres.in/api/users?page=2';
    fetch(apiUrl,{
        method: 'GET',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 1');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

question1();
 

const  question2 = async() =>{
    const apiUrl = 'https://reqres.in/api/users/2';
    fetch(apiUrl,{
        method: 'GET',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question  2 ');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question2()


const  question3 = async() =>{
    const apiUrl = 'https://reqres.in/api/users/23';
    fetch(apiUrl,{
        method: 'GET',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 3');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question3()


const  question4 = async() =>{
    const apiUrl = 'https://reqres.in/api/unknown';
    fetch(apiUrl,{
        method: 'GET',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 4');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question4()




const  question5 = async() =>{
    const apiUrl = 'https://reqres.in/api/unknown/2';
    fetch(apiUrl,{
        method: 'GET',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 5');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question5()



const  question6 = async() =>{
    const apiUrl = 'https://reqres.in/api/unknown/23';
    fetch(apiUrl,{
        method: 'GET',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 6');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question6()


const  question7 = async() =>{
    const apiUrl = 'https://reqres.in/api/users';
    fetch(apiUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": "morpheus",
            "job": "leader"
        })
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 7');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question7()






const  question8 = async() =>{
    const apiUrl = 'https://reqres.in/api/users/2';
    fetch(apiUrl,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": "morpheus",
            "job": "zion resident"
        })
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 8');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question8()



const  question9 = async() =>{
    const apiUrl = 'https://reqres.in/api/users/2';
    fetch(apiUrl,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": "morpheus",
            "job": "zion resident 2"
        })
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 9');
        }
        return response.json();
    
 })  
    .then(data => console.log(data))
    .catch(err => console.error(err))
}
question9()



const  question10 = async() =>{
    const apiUrl = 'https://reqres.in/api/users/2';
    fetch(apiUrl,{
        method: 'DELETE',
    })
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 10');
        }
        return  console.log("User deleted successfully");
    
 })  
   
}

question10()


const  question11 = async() =>{
const apiUrl="https://reqres.in/api/register"
fetch(apiUrl,{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    })
    
})
   .then(response =>{
    if (!response.ok) {
        console.log('response was not ok for question 11');
    }
    return console.log("user register successful");
}).catch(err => console.log(err))
}

question11()

const question12 = async () => {
  const apiUrl = 'https://reqres.in/api/register'
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email": "sydney@fife"
    })
  })
  .then(response => {
  
    if (response.ok) {
      console.log("User registered successfully:");
    } else {
      console.log('Registration failed:');
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}
question12()

const question13 = async () => {
    const apiUrl = 'https://reqres.in/api/login';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("User logged in successfully:", data);
      } else {
        console.log('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
question13()


const question14 = async () => {
const apiUrl = 'https://reqres.in/api/login'
fetch(apiUrl,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email": "peter@klaven"
    })

})
 .then(response=>  response.json())
 .then(data => console.log(data))
}

question14()


const question15 = async () => {
    const apiUrl='https://reqres.in/api/users?delay=3'
    fetch(apiUrl)
    .then(response =>{
        if (!response.ok) {
            console.log('response was not ok for question 9');
        }
        return response.json();
    
 })
 .then(data => console.log(data))
 .catch(err => console.error(err))
}
question15()
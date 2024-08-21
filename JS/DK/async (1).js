


let function4 = () => {
    return new Promise((resolve, reject) => {
        const variable = true
        if (variable === true) {
            setTimeout(function
               () {
                    resolve('Success')
                }, 1000)
            
        }
        else {
            reject('Error')
        }
    })
}


const function5 = async () => {
    try {
        console.log('execution started')
        const result =await function4()
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finally')
    }
}


function5()


async function demo() {
    try {
 let response =await fetch('https://reqres.in/api/users?page=2')

 if (response.ok) {
console.log("Successful request")
 }
 let data = await response.json()
 console.log(data.data)

        
    } catch (error) {
        console.log(error)
    }
}
demo()
const form = document.getElementById("form")
const userUrl = "http://localhost:3000/users/"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newUser = {
        "first_name": e.target.firstName.value,
        "last_name": e.target.lastName.value
    }
    postNewUser(newUser)
    postNewUserNonDeconstructed(e)
})
// Same as above with no arrow syntax
// form.addEventListener("submit", function(e){
// })

function postNewUser(newUser){
    
    const options ={
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newUser)
    }

    fetch(userUrl, options)
}

//Same as abov
function postNewUserNonDeconstructed(e){

    fetch(userUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "first_name": e.target.firstName.value,
            "last_name": e.target.lastName.value
        })
    })

}

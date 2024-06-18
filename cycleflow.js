const cycleFlowUsers = [
    {
        name: "Juliet Nuru",
        age: 23
    }
]

// Add New User
const addUser = function(object){
    cycleFlowUsers.push(object)
}

const getUserInfo = function(){
   const userName = document.querySelector("#nametag").value
   const userAge =  document.querySelector("#age").value

   userObject = {
        name: userName,
        age: userAge
   }

   addUser(userObject)

    const introduceUser = document.querySelector("#introUser")
    introduceUser.textContent = `Welcome to Lady Flow ${userName}`
    let form = document.querySelector(".signUpForm")
    const getStartedButton = document.querySelector("#getStarted")
    form.remove()
    getStartedButton.remove()

}

// Display the date today
const now = moment()
// now.add(28, "days")
let today = (now.toString())


const todayDate = document.querySelector("#today")
todayDate.textContent = today

const getStartedButton = document.querySelector("#getStarted")
getStartedButton.addEventListener("click", getUserInfo)

// Display the expected menstruation cycle date
const cycleDay = document.querySelector("#cycleDay")
const form = document.querySelector("#form")
const dayBorn = document.querySelector("#day");
const monthBorn = document.querySelector("#month");
const yearBorn = document.querySelector("#year");
const btn = document.querySelector("#btn")

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() + 1
const currentDay = currentDate.getDate();

const calculatedDays = document.querySelector(".calculatedDays")
const calcutedMonths = document.querySelector(".calculatedMonth")
const calculatedYears = document.querySelector(".calculatedYears")

const input = document.querySelectorAll('input')

const label = document.querySelectorAll('label')

const daysInMonth = getDaysInCurrentMonth(currentYear, currentMonth)
console.log(daysInMonth)
console.log(input)
let birthYear;
let birthDay;
let birthMonth;


const getBirthDay = () =>  birthDay = currentDay - dayBorn.value
    
const getBirthMonth = () => birthMonth = currentMonth - monthBorn.value 

const getBirthYear = () => birthYear = currentYear - yearBorn.value 

function getDaysInCurrentMonth(year, month) {
    return new Date(year, month, 0).getDate();
}



console.log(daysInMonth)

// error states 
const emptyErrorState = () => {
    input.forEach(item => {
        const p = document.createElement('p')
        p.className = "error-message"
        const text = document.createTextNode("This is a required feild")

        p.appendChild(text)
        item.classList.add("error")
        item.insertAdjacentElement("afterend", p)
    })
}

const invalidErrorState = () => {
    const errorText = ["Year must be in the past", "Must be a valid month", "Must be a valid day"]
    yearBorn.insertAdjacentHTML('afterend',`<p class="error-message"> ${errorText[0]} </p>`)
    monthBorn.insertAdjacentHTML('afterend',`<p class="error-message"> ${errorText[1]} </p>`)
    dayBorn.insertAdjacentHTML('afterend',`<p class="error-message"> ${errorText[2]} </p>`)
}

const removeError = () => {
    input.forEach(item => {
        if(item.nextElementSibling === document.querySelector('p')){
            item.style.border = "1px solid hsl(0, 1%, 44%)"
            item.nextElementSibling.remove()
        }
})
}

const removeErrorStyling = () => {
    input.forEach(item => {
        item.style.borderColor = "hsl(0, 0%, 0%)"

    })
    label.forEach(item => {
        item.style.color = "hsl(0, 0%, 0%)"
    })

    input.forEach(item => {
    if(item.nextElementSibling === document.querySelector('p')){
        item.nextElementSibling.remove()
        }
    })
}

const errorStyling = () => {
    input.forEach(item => {
        item.style.borderColor = "hsl(0, 100%, 67%)"

    })
    label.forEach(item => {
        item.style.color = "hsl(0, 100%, 67%)"
    })
}

dayBorn.addEventListener("keyup", getBirthDay)
monthBorn.addEventListener("keyup", getBirthMonth)
yearBorn.addEventListener("keyup", getBirthYear)

// get age functions

const getAge = (event) => {
    event.preventDefault();

    const daysInBirthMonth = getDaysInCurrentMonth(yearBorn.value, monthBorn.value)

    if(birthDay < 0){
        birthDay += daysInBirthMonth
    }
    console.log(birthDay)
    console.log(daysInBirthMonth)
    // let currentNumberOfDays;

    // yearBorn.addEventListener('keyup', () => {
    //     if(monthBorn.value !== "")
    //     currentNumberOfDays = getDaysInCurrentMonth()
    //     console.log(currentNumberOfDays)
   // })
    


    if(birthDay === undefined || birthMonth === undefined || birthYear === undefined){
        errorStyling()
        removeError()
        emptyErrorState()
    } else if (currentYear < yearBorn.value
        || monthBorn.value > 12 
        || monthBorn.value < 1 
        || dayBorn.value > daysInBirthMonth
        ) {
            errorStyling()
            removeError()
            invalidErrorState()
        } else {
            removeErrorStyling()
            if(monthBorn.value > currentMonth){
                birthYear -= 1
                calcutedMonths.textContent = birthMonth + 11
                console.log(monthBorn.value - currentMonth + 11)
                console.log()
            } else {
            calcutedMonths.textContent = birthMonth
        }
        calculatedDays.textContent = birthDay
        calculatedYears.textContent = birthYear
    }
    
    birthDay= undefined
    birthYear =  undefined
    birthMonth = undefined
    dayBorn.value = ''
    monthBorn.value = ''
    yearBorn.value = ''

    return
}

// event listeners 

btn.addEventListener("click", getAge)



// Error state



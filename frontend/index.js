document.addEventListener("DOMContentLoaded", () => {
   
    fetchUsers();
    createForm();
    // createSearchForm();
})

const BASE_URL = "http://localhost:3000"
//read - fetch users index

function fetchUsers() {
    fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            // this is where we do something with the data we fetched
            for (const user of users) {

                let u = new User(user.id, user.username, user.show, user.comments)
                u.renderUser();

            }
        })
}

//create - create a new user
//add an event listener
//once form is submitted => fetch POST to my backend
//do something with the returned function

function createForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
        `
    <form><b><br>
        Username: <input type="text" id="username">
        Show: <input type="text" id="show">
        Comments: <input type="text" id="comments"><br><br>
        <input type="submit" class="send" value="It's BingeWorthy!"><br><br></b>

    </form>
    `
    usersForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission() {
    let username = document.getElementById("username").value
    let show = document.getElementById("show").value
    let comments = document.getElementById("comments").value


    let user = {
        username: username,
        show: show,
        comments: comments
    }

    fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(user => {
            let u = new User(user.id, user.username, user.show, user.comments)
            u.renderUser();

        })
}

// const createSearchForm = () => {
//     const body = document.body

//     body.innerHTML +=
//     `
//         <div id="search-form">
//             <input type="text" id="search"/>
//             <button id="search-btn">Search</button>
//         </div>
//     `

//     let searchBtn = document.getElementById('search-btn')
//     searchBtn.addEventListener("click", processSearchQuery)

//     }

//     const processSearchQuery = () => {
//         let query = document.getElementById('search').value

//         //fetch request
//         fetch(`http://localhost:3000/search/${query}`)
//             .then(resp => resp.json())
//             .then(user => {
//                 document.body.innerHTML += 
//                 `
//                 <div id="search-results">
//                     ${user.show}
//                 </div>

//                 `
//             })
//             .catch(error => {
//                 const msg = {message: "Nothing Found."}
//                 document.body.innerHTML += `${msg}`
//             })
//     }

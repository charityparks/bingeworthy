document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
  createForm();
});

const BASE_URL = "http://localhost:3000";
//read - fetch users index

function fetchUsers() {
  fetch(`${BASE_URL}/users`)
    .then((resp) => resp.json())
    .then((users) => {
      // this is where we do something with the data we fetched
      for (const user of users) {
        let u = new User(user.id, user.username, user.shows);
        u.renderUsers();
      }
    });
}
//create - create a new user
//add an event listener
//once form is submitted => fetch POST to my backend
//do something with the returned function

function createForm() {
  let usersForm = document.getElementById("users-form");

  usersForm.innerHTML += `
    <b><br>
        Username: <input type="text" id="username">
        Show: <input type="text" id="show">
        Comments: <input type="text" id="comments"><br><br>
        <input type="submit" class="send" value="It's BingeWorthy!"><br><br></b>

    `;
  usersForm.addEventListener("submit", (e) => userFormSubmission(e));
}

function userFormSubmission(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let show = document.getElementById("show").value;
  let comments = document.getElementById("comments").value;
  let usersForm = document.getElementById("users-form");

  let user = {
    username: username,
    show: show,
    comments: comments,
  };

  fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((resp) => resp.json())
    .then((user) => {
      // let u = new User(user.id, user.username, show.shows, show.comments)
      let u = new User(user.id, user.username, user.show, user.comments);

      u.renderUser();
    });
  usersForm.reset();
}

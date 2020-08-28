class User {
  constructor(id, username, show, comments) {
    this.id = id;
    this.username = username;
    this.show = show;
    this.comments = comments;

    //need to render user instance method
  }

  renderUsers() {
    let usersDiv = document.getElementById("users-container");

    this.show.forEach((show) => {
      usersDiv.innerHTML += `
              <h3><b></b>Show: ${show.show}</b></h3>
              <ul>
                  <li>Username: ${this.username}</li>
                  <li>Comments: ${show.comments}</li>
              </ul>

              <button class="delete-btn" data-id=${this.id} >Delete Entry
              </button>
          `;
      let dbutton = document.getElementsByClassName("delete-btn");
      for (const b of dbutton) {
        b.addEventListener("click", () => {
          this.deleteUser.call(this);
        });
      }
    });
  }

  renderUser() {
    let usersDiv = document.getElementById("users-container");
    usersDiv.innerHTML += `
            <h3><b></b>Show: ${this.show}</b></h3>
            <ul>
                <li>Username: ${this.username}</li>
                <li>Comments: ${this.comments}</li>
            </ul>

            <button class="delete-btn" data-id=${this.id} >Delete Entry
            </button>
        `;
  }

  deleteUser() {
    let userId = parseInt(event.target.dataset.id);

    fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
    });
    event.target.parentElement.remove();
  }
}

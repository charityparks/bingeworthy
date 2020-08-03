class User {
    constructor(id, username, show, comments) {
        this.id = id;
        this.username = username;
        this.show = show;
        this.comments = comments;
    }

    renderUser() {
        let usersDiv = document.getElementById("users-container")

        usersDiv.innerHTML +=
            `
        <div id="user-container">
            <h3><b></b>Show: ${this.show}</b></h3>
            <ul>
                <li>Username: ${this.username}</li>
                <li>Comments: ${this.comments}</li>
            </ul>
           
   
            <button class="delete-btn" data-id=${this.id} >Delete Entry
            </button>
        </div>
        `
        let dbutton = document.getElementsByClassName("delete-btn")
        for (const b of dbutton) {
            b.addEventListener("click", () => {
                this.deleteUser.call(this)
            })
        }
    }

    deleteUser() {
        
        let userId = parseInt(event.target.dataset.id)

        fetch(`${BASE_URL}/users/${userId}`, {
            method: 'DELETE'
        })
        event.target.parentElement.remove()
    }
}
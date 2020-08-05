# user have many shows
# show have a users

# user model
- username:string
- show:string
- comments:text

# show model
- show:string


# background-color: rgb(235, 80, 255);


# search feature

# Frontend
1.  create a search form
2.  trigger it... ADD an event listener to the form
3.  create a function that processes the form
4.  Take input, make a fetch request and return the search obj.

# Backend
1.  Params:  through the URL 
2.  create a route that utilizes the parameter... params[:name]
3.  create a controller/action that processes the search route request
4.  render json object with the result

# Back to the frontend
1.  receive the result
2.  append it to the DOM
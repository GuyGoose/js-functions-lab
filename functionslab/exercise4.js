fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.reduce( (total, todo, index, array) => {
        return total + todo.completed 
    }, 0)
    console.log(completed)
 })
  .catch(function(err) { 
    console.log(err);
  });
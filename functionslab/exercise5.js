fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter(todo => todo.completed).reduce( (total, todo, index, array) => {
        if (todo.completed === true) {
            total.push ([todo.title, todo.userId])
        }
        return total
    }, [])
    console.log (completed)
    })
  .catch(function(err) { 
    console.log(err);
  });
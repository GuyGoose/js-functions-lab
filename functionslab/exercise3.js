fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter(todo => todo.completed === false).map(todo => {
        return {
            userId: todo.id,
            title: todo.title,
        };
    });
    console.log(completed)
 })
  .catch(function(err) { 
    console.log(err);
  });
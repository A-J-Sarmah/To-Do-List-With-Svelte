<script>
  import { todos } from "../store";
  export let getTodos;
  const toggleCompleated = (id) => {
    const data = getTodos();
    for (let i = 0; i < data.length; i++) {
      if (parseFloat(data[i].id) === parseFloat(id)) {
        data[i].isCompleated = !data[i].isCompleated;
      }
      localStorage.setItem(i, JSON.stringify(data[i]));
    }
    todos.set(data);
  };
  const removeTodo = (id) => {
    const data = getTodos();
    let index;
    for (let i = 0; i < data.length; i++) {
      if (parseFloat(data[i].id) === parseFloat(id)) {
        index = i;
      }
    }
    data.splice(index, 1);
    localStorage.clear();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      localStorage.setItem(i, JSON.stringify(data[i]));
    }
    todos.set(data);
  };
</script>

{#each $todos as todo}
  <div class="row justify-content-center">
    <div
      class="
              col-12 col-lg-6
              border border-secondary
              d-flex
              align-items-center
              justify-content-end
              mt-3
            "
    >
      <p
        class="my-auto me-auto {todo.isCompleated === true ? 'compleated' : ''}"
      >
        {todo.todo}
      </p>
      <i
        class="fa fa-check me-1"
        id={todo.id}
        on:click={(e) => {
          toggleCompleated(e.target.id);
        }}
      />
      <i
        class="fa fa-times"
        id={todo.id}
        on:click={(e) => {
          removeTodo(e.target.id);
        }}
      />
    </div>
  </div>
{/each}

<style>
  .compleated {
    text-decoration: line-through;
  }
</style>

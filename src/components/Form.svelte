<script>
  import { todos } from "../store";
  export let getTodos;
  let text = "";
  const setData = () => {
    const data = getTodos();
    const object = {
      todo: text,
      isCompleated: false,
      id: Math.random() * 1000000,
    };
    data.push(object);
    text = "";
    for (let i = 0; i < data.length; i++) {
      localStorage.setItem(i, JSON.stringify(data[i]));
    }
    todos.set(data);
  };
</script>

<div class="row justify-content-center mb-5">
  <div class="col-12 col-lg-6">
    <input class="w-100" id="input" bind:value={text} />
    <div class="text-center">
      <button class="btn btn-dark mt-3" on:click={setData}>Submit</button>
    </div>
  </div>
</div>

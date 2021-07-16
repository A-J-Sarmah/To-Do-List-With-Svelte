<script>
  import Navbar from "./Navbar.svelte";
  import Text from "./Text.svelte";
  import Form from "./Form.svelte";
  import List from "./List.svelte";
  import { getTodos } from "../getTodos";
  import { todos } from "../store";
  let data;
  todos.subscribe((value) => {
    data = value;
  });
</script>

<div class="app">
  <Navbar />
  <div class="container-md">
    <Text />
    <Form {getTodos} />
    <List {getTodos} />
  </div>
</div>

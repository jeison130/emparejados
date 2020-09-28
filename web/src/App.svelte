<script>
  import { Router, Route } from "svelte-routing";
  import NavBar from "./components/NavBar.svelte";

  /* Pages */
  import Home from "./pages/Home.svelte";
  import SelectGame from "./pages/SelectGame.svelte";

  export let url = "";
</script>

<style>
</style>

<Router {url}>
  <NavBar />
  <main class="py-3 px-6 h-full">
    <Route path="/">
      <Home />
    </Route>
    <Route path="select/:id">
      <SelectGame />
    </Route>
  </main>
</Router>

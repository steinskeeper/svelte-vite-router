<script>
  import { Router, Route, Link } from "svelte-navigator";
  import NavBar from "./components/NavBar.svelte";
  import HomePage from "./pages/HomePage.svelte";
</script>

<main>
  <Router>
    <Route path="/">
      <HomePage />
    </Route>
    <Route path="/about">
      <div>About</div>
    </Route>
  </Router>
</main>

<style>
</style>

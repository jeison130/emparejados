<script>
  import NavBar from "../components/NavBar.svelte";

  export let segment;
</script>

<NavBar {segment} />

<main class="py-3 px-6 h-full">
  <slot />
</main>

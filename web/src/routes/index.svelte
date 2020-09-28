<script>
  import { onMount } from "svelte";
  let categories = [];

  onMount(async () => {
    categories = await fetch(
      "https://apiemparejados.jeisontech.dev/categories"
    ).then((res) => res.json());
  });
</script>

<style scoped>
  .select-link {
    text-decoration: none;
  }

  .select-link:hover {
    color: inherit;
  }
</style>

<svelte:head>
  <title>Emparejados</title>
</svelte:head>
<div class="grid grid-cols-2 h-full gap-4">
  {#each categories as category}
    <div class="flex content-center">
      <div class="hover:bg-pink-300 rounded-lg">
        <a class="select-link" href="select/{category.id}">
          <div
            class="image-container rounded-tl-lg rounded-tr-lg border border-primary p-3">
            <img src={category.image_url} alt="" />
          </div>
          <div
            class="text-center rounded-bl-lg rounded-br-lg w-full p-2 bg-primary text-white text-xl">
            {category.name}
          </div>
        </a>
      </div>
    </div>
  {/each}
</div>

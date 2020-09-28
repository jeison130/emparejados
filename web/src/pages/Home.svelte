<script>
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  let categories = [];

  onMount(async () => {
    categories = await fetch(
      "https://apiemparejados.jeisontech.dev/categories"
    ).then((res) => res.json());

    console.log(categories);
  });
</script>

<div class="grid grid-cols-2 h-full gap-4">
  {#each categories as category}
    <div class="flex content-center">
      <Link to="select/{category.id}">
        <div class="hover:bg-pink-300 rounded-lg">
          <div
            class="image-container rounded-tl-lg rounded-tr-lg border border-primary p-3">
            <img src={category.image_url} alt="" />
          </div>
          <div
            class="text-center rounded-bl-lg rounded-br-lg w-full p-2 bg-primary text-white text-xl">
            {category.name}
          </div>
        </div>
      </Link>
    </div>
  {/each}
</div>

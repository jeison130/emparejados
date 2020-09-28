<script context="module">
  export async function preload({ params }) {
	const { id } = params;
	
	let category = await this.fetch(
      "https://apiemparejados.jeisontech.dev/categories/" + id
    ).then((res) => res.json());

    return { id, category };
  }
</script>

<script>
  export let id;

  let avaibles = ["3x2", "4x3", "5x4", "6x5", "8x7", "9x8"];
</script>

<div class="grid grid-cols-2 h-full gap-4">
  {#each avaibles as item}
    <div class="flex content-center justify-center">
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

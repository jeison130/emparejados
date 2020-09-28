<script context="module">
  export async function preload({ params }) {
    const { id } = params;

    let category = await this.fetch(
      "https://apiemparejados.jeisontech.dev/categories/" + id
    ).then((res) => res.json());

    return { category };
  }
</script>

<script>
  export let category;
  let avaibles = ["3x2", "4x3", "5x4", "6x5"];
</script>

<style scoped>
  .select-link {
    text-decoration: none;
  }

  .select-link:hover {
    color: inherit;
  }
</style>

<div class="grid grid-cols-2 h-full gap-4">
  {#each avaibles as item}
    <div class="flex content-center justify-center">
      <div class="hover:bg-pink-300 rounded-lg">
        <a class="select-link flex flex-row" href="select/{category.id}/{item}">
          <div
            class="flex justify-center image-container border rounded-t-lg sm:rounded-t-none sm:rounded-l-lg border-primary p-3 w-full sm:w-1/2">
            <img class="w-16 sm:w-24 md:w-32" src={category.image_url} alt="" />
          </div>
          <div
            class="bg-primary py-2 sm:py-0 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg text-white text-xl flex justify-center w-full sm:w-1/2 content-center px-6">
            {item}
          </div>
        </a>
      </div>
    </div>
  {/each}
</div>

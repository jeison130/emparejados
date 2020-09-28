<script context="module">
  export async function preload({ params }) {
    const { size, id } = params;

    return { size, id };
  }
</script>

<script>
  import ImgMain from "../../../components/ImgMain.svelte";
  import { onMount } from "svelte";
  export let size;
  export let id;

  const rows = size.split("x")[0];
  const columns = size.split("x")[1];
  $: totalItems = rows * columns;

  let defaultImages = [];
  $: gameBoard = [];
  $: error = false;

  onMount(async () => {
    if (rows <= 6 && columns <= 5 && size.indexOf("x")) {
      let response = await fetch(
        "https://apiemparejados.jeisontech.dev/images/?" +
          new URLSearchParams({
            category: id,
            page_size: totalItems / 2,
          })
      ).then((res) => res.json());

      defaultImages = response.results;

      let imagesItems = generateRandomImages(totalItems / 2);
      gameBoard = generateRandomGame(rows, columns, imagesItems);
    } else {
      error = true;
    }
  });

  function generateRandomImages(totalItems) {
    let arr = [];

    while (arr.length < totalItems) {
      console.log(arr.length, totalItems, defaultImages.length);
      let r = Math.floor(Math.random() * defaultImages.length) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    return arr;
  }

  function generateRandomGame(rows, columns, imagesItems) {
    let arr = [];

    while (arr.length < totalItems) {
      let r = Math.floor((Math.random() * (rows * columns)) / 2) + 1;
      let index = arr.indexOf(r);
      if (index === -1) arr.push(r);
      else if (arr.indexOf(r, index + 1) == -1) arr.push(r);
    }
    let newArr = [];
    let index = 0;
    for (let i = 0; i < rows; i++) {
      let temp = [];
      for (let j = 0; j < columns; j++) {
        temp.push(defaultImages[imagesItems[arr[index] - 1] - 1]);
        index++;
      }
      newArr.push(temp);
    }

    return newArr;
  }
</script>

{#if error}
  <div class="flex flex-col text-center justify-center content-center h-full">
    <h1>Lo sentimos</h1>
    <h2>
      No tenemos un juego
      {size.indexOf('x') > 0 ? `${rows}x${columns}` : size}
    </h2>
  </div>
{:else}
  <div class="grid grid-rows-{rows} gap-4 h-full">
    {#each gameBoard as game}
      <div class="grid grid-cols-{columns} gap-4">
        {#each game as img}
          <ImgMain url={img.url} />
        {/each}
      </div>
    {/each}
  </div>
{/if}

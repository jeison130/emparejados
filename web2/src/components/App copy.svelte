<script>
  import NavBar from "./components/NavBar.svelte";
  import ImgMain from "./components/ImgMain.svelte";

  const rows = 3;
  const columns = 2;
  const totalItems = rows * columns;

  const defaultImages = [
    "https://images.unsplash.com/photo-1587096640655-9c1dfa1eeae5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=684&q=80",
    "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    "https://images.unsplash.com/photo-1527720175429-214744972b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1488793207478-ff0892419e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    "https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
  ];

  function generateRandomImages(totalItems) {
    let arr = [];

    while (arr.length < totalItems) {
      let r = Math.floor(Math.random() * defaultImages.length) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }

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

  let imagesItems = generateRandomImages(totalItems / 2);
  let gameBoard = generateRandomGame(rows, columns, imagesItems);
</script>

<style>
</style>

<NavBar />

<main class="h-full p-3" id="main">
  <div class="grid grid-rows-{rows} gap-4 h-full">
    {#each gameBoard as game}
      <div class="grid grid-cols-{columns} gap-4">
        {#each game as img}
          <ImgMain url={img}></ImgMain>
        {/each}
      </div>
    {/each}
  </div>
</main>

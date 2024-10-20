<script>
  import { onDestroy, onMount } from 'svelte';

  export let totalWidth;
  export let totalHeight;

  let state = 'start'; // "end" | "pause"
  const cellSize = 25;

  let cellCountX = 1;
  let cellCountY = 1;

  let cellXs = [];
  let cellYs = [];

  let init = false;

  $: if (init || totalWidth || totalHeight) createCell();
  let queueKeys = ['right'];

  function createCell() {
    cellCountX = Math.floor(totalWidth / cellSize);
    cellCountY = Math.floor(totalHeight / cellSize);

    cellXs = new Array(cellCountX).fill().map((e, i) => i);
    cellYs = new Array(cellCountY).fill().map((e, i) => i);
  }

  let snakeBody = [
    [4, 0],
    [3, 0],
    [2, 0],
    [1, 0],
    [0, 0],
  ];
  let food = [10, 10];
  let lastDir = 'right'; // "up" "down" "right" "left"

  const collisionDir = {
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left',
  };

  let fps = 5;
  function loop() {
    setTimeout(() => {
      nextFrame();
      // if (state === 'start') window.requestAnimationFrame(loop);
      loop();
    }, 1000 / fps);
  }

  function nextFrame() {
    let [[nextPosX, nextPosY]] = snakeBody;
    let dir = queueKeys[0];
    // if (collisionDir[lastDir] !== dir) dir = lastDir;
    // debugStore.set(
    //   JSON.stringify({ dir, cdir: collisionDir[lastDir], lastDir }),
    // );
    switch (dir) {
      case 'up':
        nextPosY--;
        if (nextPosY < 0) nextPosY = cellYs.length - 1;
        break;

      case 'down':
        nextPosY++;
        if (nextPosY > cellYs.length - 1) nextPosY = 0;
        break;

      case 'left':
        nextPosX--;
        if (nextPosX < 0) nextPosX = cellXs.length - 1;
        break;

      case 'right':
        nextPosX++;
        if (nextPosX > cellXs.length - 1) nextPosX = 0;
        break;
    }

    snakeBody.unshift([nextPosX, nextPosY]);
    let isFood = nextPosX === food[0] && nextPosY === food[1];
    if (isFood) {
      food = nextRandomPoint();
    } else {
      snakeBody.pop(); // remove tail
    }

    // debugStore.set(JSON.stringify({ queueKeys }));
    // queueKeys.shift();

    snakeBody = snakeBody;
  }

  function nextRandomPoint() {
    const [nextPosX, nextPosY] = [
      Math.floor(Math.random() * cellXs.length),
      Math.floor(Math.random() * cellYs.length),
    ];
    return noCollision(nextPosX, nextPosY)
      ? [nextPosX, nextPosY]
      : nextRandomPoint();
  }

  function noCollision(nextPosX, nextPosY) {
    return !snakeBody.some(([snakePosX, snakePosY]) => {
      return snakePosX === nextPosX && snakePosY === nextPosY;
    });
  }

  function handleKeyUp(e) {
    if (state === 'end') startGame();

    if (e.code.startsWith('Arrow')) {
      let newDir = e.code.toLocaleLowerCase().replace('arrow', '');
      if (collisionDir[lastDir] === newDir) newDir = lastDir;
      else lastDir = newDir

      appendQueueKey(newDir);
    }
  }

  function getPaintSnake(cellX, cellY, body) {
    return snakeBody.some(([snakeCellX, snakeCellY]) => {
      return snakeCellX === cellX && snakeCellY === cellY;
    });
  }

  function getPaintFood(cellX, cellY, food) {
    return food[0] === cellX && food[1] === cellY;
  }

  function getPaintSnakeHead(cellX, cellY, snakeHead) {
    return snakeHead[0] === cellX && snakeHead[1] === cellY;
  }

  function appendQueueKey(key) {
    queueKeys.unshift(key);
    if (queueKeys.length > 3) queueKeys.pop();
  }

  function startGame() {
    state = 'start';
    loop();
  }

  function toggleState() {
    state = state === 'start' ? 'end' : 'start';
    if (state === 'start') loop();
  }

  onMount(() => {
    init = true;
    startGame();
  });

  onDestroy(() => {
    // 	state = "end";
  });
</script>

<svelte:window on:keyup={handleKeyUp} />

<button on:click={toggleState}>
  {state}
</button>

<div
  class="game-container"
  bind:clientWidth={totalWidth}
  bind:clientHeight={totalHeight}
>
  {#each cellYs as cellY}
    <div class="row">
      {#each cellXs as cellX}
        <div
          class="cell"
          class:snake-body={getPaintSnake(cellX, cellY, snakeBody)}
          class:food={getPaintFood(cellX, cellY, food)}
          style="--cell-size:{cellSize}px"
          class:snake-head={getPaintSnakeHead(cellX, cellY, snakeBody[0])}
        >
          <!-- 						{cellY} {cellX} -->
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .game-container {
    height: calc(100% - 40px);
    min-height: calc(100% - 40px);
    min-width: 100%;
    background-color: text-th1;
    margin: 0px;
    padding: 0px;

    display: flex;
    flex-direction: column;
  }
  :global(body) {
    margin: 0px;
    padding: 0px;
  }

  .cell {
    width: var(--cell-size);
    height: var(--cell-size);
    min-width: var(--cell-size);
    min-height: var(--cell-size);
    display: flex;
    justify-content: space-between;
    outline: 0.5px solid var(--t2);
  }
  .row {
    display: flex;
  }

  .snake-body {
    background: var(--t1);
    opacity: 1;
    border: 0px;
    padding: 2px;
  }
  .snake-head {
    background: var(--hl1);
  }
  .food {
    background: greenyellow;
  }
</style>

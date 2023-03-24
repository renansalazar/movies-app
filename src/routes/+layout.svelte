<header>
  <a href="/">Movie List</a>
</header>
<main>
  <slot></slot>
</main>
<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  header {
    padding: 20px;
    margin: auto;
  }
  a {
    font-size: 32px;
    color: #0f62b2;
    text-decoration: none;
    font-weight: bold;
  }
  main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  header, main {
    max-width: 250px;
  }
</style>
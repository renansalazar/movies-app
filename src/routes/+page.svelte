<script>
  /** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="home-title">Página de inicio</h1>
<a href="/create">Crear Película</a>
<p>Esta es la lista de películas:</p>
<ul>
  {#each data.movies as movie}
    <li>{movie.title} ({movie.year})</li>
  {/each}
</ul>
<style>
  .home-title {
    color: #0f62b2;
    font-size: 24px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    padding: 0;
  }
  ul li {
    padding: 16px;
    background: #f2f2f2;
    border-radius: 8px;
  }
</style>
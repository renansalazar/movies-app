/** @type {import('./$types').PageLoad} */
export function load() {
  const movies = [
    {
      title: "Titanic",
      year: 1997
    },
    {
      title: "El padrino",
      year: 1972
    },
    {
      title: "Avatar",
      year: 2009
    },
    {
      title: "The Avengers",
      year: 2012
    }
  ]
  console.log('renderrr JS')
  return {
    movies
  };
}

export const ssr = true
export const csr = true

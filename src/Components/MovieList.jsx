import React from 'react'

const MovieList = ({movies, selectedGenre}) => {
  const filteredMovies = selectedGenre ? movies.filter((movie)=>movie.genre === selectedGenre) : movies;
  return (
    <div className='movieList'>
      <table>
        <thead>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </thead>
        <tbody>
            {
              filteredMovies.map((movie,index)=>(
                <tr key={index}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.year}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
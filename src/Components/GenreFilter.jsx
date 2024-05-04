import React from 'react'

const GenreFilter = ({genres, onSelectedGenre}) => {
  return (
    <div className="filterGenre">
        <h2>Filter by Genre</h2>
        <div className='genreList'>
            {
                genres.map((genre, index)=>(
                    <button key={index} onClick={()=>onSelectedGenre(genre)}>{genre}</button>
                ))
            }
        </div>
    </div>
  )
}

export default GenreFilter
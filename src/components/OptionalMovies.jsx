export function OptionalMovies({ selectMovie, setSelectMovie, errors }) {
    const movies = [
        { title: "Avatar", year: "2009", director: "James Cameron" },
        { title: "Inception", year: "2010", director: "Christopher Nolan" },
        { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
        { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
        { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
        { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
    ];

    return (
        <div>
            <label className="block font-medium">เลือกหนังที่คุณชอบ *</label>
            {movies.map((movie) => (
                <div className="mt-2 selected-movie p-2 rounded-md" key={movie.title}>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="option"
                            value={movie.title}
                            checked={selectMovie === movie.title}
                            className="accent-purple-700 w-4 h-4 mt-3 cursor-pointer"
                            onChange={(event) => setSelectMovie(event.target.value)}
                        />
                        <span>{movie.title} ({movie.year})</span>
                    </label>
                    <p className="text-sm text-gray-600 ml-6">Director: {movie.director}</p>
                </div>
            ))}
            {errors.movie && <p className="text-red-500 text-sm">{errors.movie}</p>}
        </div>
    );
}

import { useState, useMemo, useCallback, useReducer, useEffect } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import LoadingSpinner from "./components/LoadingSpinner";
import favouritesReducer from "./reducers/favouritesReducer";

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState("home");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      const savedFavourites = localStorage.getItem("favourites");
      return savedFavourites ? JSON.parse(savedFavourites) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearchChange = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: "TOGGLE_FAVOURITE", id });
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      const matchesSearch = photo.author
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesView =
        activeView === "home" || favourites.includes(photo.id);

      return matchesSearch && matchesView;
    });
  }, [photos, search, activeView, favourites]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="p-6 text-center text-red-600">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        search={search}
        onSearchChange={handleSearchChange}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      <main className="p-5 sm:p-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          {activeView === "home" ? "Explore Photos" : "Your Favourites"}
        </h1>

        <Gallery
          photos={filteredPhotos}
          favourites={favourites}
          onToggleFavourite={handleToggleFavourite}
        />

        {filteredPhotos.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            {activeView === "favourites"
              ? "No favourites yet. Add some using the heart button!"
              : "No photos found."}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;

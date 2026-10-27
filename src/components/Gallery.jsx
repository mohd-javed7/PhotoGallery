
import PhotoCard from "./PhotoCard";

function Gallery({ photos, favourites, onToggleFavourite }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}

export default Gallery;

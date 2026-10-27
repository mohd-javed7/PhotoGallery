
function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
    return (
      <div className="overflow-hidden rounded-xl bg-white shadow-md">
        
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="h-56 w-full object-cover"
        />
  
        
        <div className="flex items-center justify-between p-3">
          <p className="text-sm text-gray-700">
            By: {photo.author}
          </p>
  
          <button
            onClick={() => onToggleFavourite(photo.id)}
            aria-label={
              isFavourite ? "Remove from favourites" : "Add to favourites"
            }
            className="text-2xl text-red-500 hover:scale-110"
          >
            {isFavourite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    );
  }
  
  export default PhotoCard;
  
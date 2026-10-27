
function LoadingSpinner() {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>
  
        <p className="text-sm font-medium text-gray-600">
          Loading photos...
        </p>
      </div>
    );
  }
  
  export default LoadingSpinner;
  
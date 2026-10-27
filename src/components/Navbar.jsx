import logo from "../assets/logo.svg";

function Navbar({ search, onSearchChange, activeView, onViewChange }) {
    return (
        <header className="w-full border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">




                <div className="flex items-center justify-center md:justify-start">
                    <img
                        src={logo}
                        alt="PhotoGallery"
                        className="h-10 w-auto max-w-55 object-contain"
                    />
                </div>




                <div className="w-full md:max-w-xl md:flex-1">
                    <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-3">
                        <span className="text-gray-500">⌕</span>

                        <input
                            type="text"
                            placeholder="Search photographers..."
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full bg-transparent text-sm outline-none"
                        />
                    </div>
                </div>

                {/* Home / Favourites toggle */}
                <div className="flex w-full rounded-full bg-gray-100 p-1 md:w-auto">
                    <button
                        onClick={() => onViewChange("home")}
                        className={`flex-1 rounded-full px-5 py-2 text-sm font-medium transition md:flex-none ${activeView === "home"
                            ? "bg-gray-900 text-white"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => onViewChange("favourites")}
                        className={`flex-1 rounded-full px-5 py-2 text-sm font-medium transition md:flex-none ${activeView === "favourites"
                            ? "bg-gray-900 text-white"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Favourites
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;

import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">🌍 Atmos</h1>
      <SearchBar />
    </nav>
  );
};

export default Navbar;

// Functional component representing a search bar
function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <div className="my-3">
      {/* Input field for searching users */}
      <input
        type="text"
        id="search"
        className="form-control"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search user"
      />
    </div>
  );
}
// Exporting the SearchBar component as the default export
export default SearchBar;

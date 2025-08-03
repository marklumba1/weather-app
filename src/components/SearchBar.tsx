interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
      <input
        type="text"
        placeholder="Search City"
        className="outline-0 p-2 w-full rounded border active:outline-0  focus:outline-0"
        value={value}
        id="search"
        onChange={(e) => onChange(e.target.value)}
      />
  );
};

export default SearchBar;

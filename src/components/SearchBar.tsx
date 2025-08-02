interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
      <input
        type="text"
        placeholder="Search"
        className="outline-0 p-2 rounded border text-white active:outline-0 w-full focus:outline-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
  );
};

export default SearchBar;

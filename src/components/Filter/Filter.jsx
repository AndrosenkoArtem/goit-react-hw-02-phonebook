export const Filter = ({ setFilterName, value }) => {
  return (
    <input
      onChange={e => setFilterName(e)}
      value={value}
      type="text"
      name="filter"
    />
  );
};

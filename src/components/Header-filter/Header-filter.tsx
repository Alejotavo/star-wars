const HeaderFilter = ({
  setSearchFilter,
  handleFilterChange,
}: {
  setSearchFilter: (value: string) => void;
  handleFilterChange: (value: string) => void;
}) => {
  const handleChange = (event: any) => {
    const selectedValue = event.target.value;
    handleFilterChange(selectedValue);
  };

  return (
    <>
      <input
        onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search by Name"
      />

      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="n/a">N/A</option>
      </select>
    </>
  );
};

export default HeaderFilter;

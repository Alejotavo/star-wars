const HeaderFilter = ({
  setSearchFilter,
}: {
  setSearchFilter: (value: string) => void;
}) => {
  return (
    <>
      <input
        onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search by Name"
      />
    </>
  );
};

export default HeaderFilter;

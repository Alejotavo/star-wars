import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

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
    <Row>
      <Col>
        <Form.Control
          onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search by Name"
        />
      </Col>
      <Col>
        <Form.Select
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">N/A</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default HeaderFilter;

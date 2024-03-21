import { Col, Form, Row } from "react-bootstrap";

const Search = ({
  setSearchFilter,
}: {
  setSearchFilter: (value: string) => void;
}) => {
  return (
    <Row>
      <Col>
        <Form.Control
          onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search by Name"
        />
      </Col>
    </Row>
  );
};

export default Search;

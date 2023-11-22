import { Route, Routes } from "react-router";
import { Character } from "../../Models/star-wars";
import CharacterDetails from "./Character-details/Character-details";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const CharacterList = (props: Character) => {
  return (
    <>
      <tr>
        <td>
          <Link to="/character">{props.name}</Link>
        </td>
        <td>
          <label>{props.gender}</label>
        </td>
      </tr>
      <Row>
        <Col>
          <Routes>
            <Route path="/character" element={<CharacterDetails />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
};

export default CharacterList;

import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Search = ({
  setSearchFilter,
}: {
  setSearchFilter: (value: string) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    // Obtener el valor del campo de búsqueda almacenado en localStorage
    const savedSearchText = localStorage.getItem("searchText");
    if (savedSearchText) {
      setSearchText(savedSearchText);
      setSearchFilter(savedSearchText.toLowerCase()); // Actualizar el filtro de búsqueda con el valor recuperado
    }
  }, []); // Ejecutar solo una vez al montar el componente

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
    setSearchFilter(value.toLowerCase());

    // Guardar el valor del campo de búsqueda en localStorage
    localStorage.setItem("searchText", value);
  };

  return (
    <Row>
      <Col>
        <Form.Control
          onChange={handleChange}
          type="text"
          placeholder="Search by Name"
          value={searchText}
        />
      </Col>
    </Row>
  );
};

export default Search;

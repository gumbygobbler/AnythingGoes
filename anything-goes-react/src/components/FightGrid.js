import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddCard from "../components/AddCard";

const FightGrid = ({ colCount, children, xs, sm, md, lg }) => {
  const rowCount = Math.ceil(children.length / colCount);

  const renderRows = () => {
    let rows = [];

    for (let row = 0; row < rowCount; row++) {
      const startIndex = row * colCount;
      const endIndex = Math.min(startIndex + colCount, children.length);

      const cols = [];

      for (let colIndex = startIndex; colIndex < endIndex; colIndex++) {
        cols.push(
          <Col
            key={colIndex}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            className="mb-3 no-gutters"
          >
            {children[colIndex]}
          </Col>
        );
      }

      rows.push(
        <Row key={row} className="justify-content-start no-border">
          {cols}
        </Row>
      );
    }

    return rows;
  };

  return (
    <Container fluid className="fight-grid-container">
      {renderRows().map((row, index) => (
        <Container key={index} className="mb-3">
          {row}
        </Container>
      ))}
      <div className="d-flex justify-content-center">
        <AddCard />
      </div>
    </Container>
  );
};

export default FightGrid;

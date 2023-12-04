import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FightGrid = ({ colCount, children, sm, md }) => {
  const rowCount = Math.ceil(children.length / colCount);

  const renderRows = () => {
    let rows = [];

    for (let row = 0; row < rowCount; row++) {
      const startIndex = row * colCount;
      const endIndex = Math.min(startIndex + colCount, children.length);

      const cols = [];

      for (let colIndex = startIndex; colIndex < endIndex; colIndex++) {
        cols.push(
          <Col key={colIndex} sm={sm} md={md} className="mb-2 no-gutters">
            {children[colIndex]}
          </Col>
        );
      }

      rows.push(
        <Row key={row} className="justify-content-center no-border">
          {cols}
        </Row>
      );
    }

    return rows;
  };

  return (
    <Container fluid className="grid-container">
      {renderRows().map((row, index) => (
        <Container key={index} className="mb-3">
          {row}
        </Container>
      ))}
    </Container>
  );
};

export default FightGrid;

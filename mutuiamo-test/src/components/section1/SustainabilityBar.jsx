import { useState } from "react";
import SustainabilityButton from "./button/SustainabilityButton";
import { Col, Row } from "react-bootstrap";

const SustainabilityBar = () => {
  const [checker, setChecker] = useState("Alta");

  const handleButtonClick = (param) => {
    setChecker(param);
  };

  return (
    <Row>
      <Col className="sustainabilityBar mb-3 d-flex">
        <SustainabilityButton
          type={"Bassa"}
          setting={"bassa text-center"}
          checker={checker}
          handleButtonClick={handleButtonClick}
        />

        <SustainabilityButton
          type={"Media"}
          setting={"media text-center"}
          checker={checker}
          handleButtonClick={handleButtonClick}
        />

        <SustainabilityButton
          type={"Alta"}
          setting={"alta text-center"}
          checker={checker}
          handleButtonClick={handleButtonClick}
        />
      </Col>
    </Row>
  );
};

export default SustainabilityBar;

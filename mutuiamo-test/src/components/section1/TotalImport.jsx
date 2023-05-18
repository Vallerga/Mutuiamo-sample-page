import { Col, Row } from "react-bootstrap";
import CircleButton from "./button/CircleButton";
import { useSelector } from "react-redux";

const TotalImport = ({ loan, total, onClickHandler }) => {
  let actualLoanRequest = useSelector((state) => state.LoanRequest.actualLoanRequest);
  let actualTotalImport = useSelector((state) => state.LoanRequest.actualTotalImport);
  return (
    <Row className="py-3">
      <Col xs={12} className="">
        <p>Valore Immobile</p>
      </Col>
      <Col
        xs={12}
        className="fs-4 d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <p>
            <strong>
              {actualTotalImport}
              <span className="ms-1">€</span>
            </strong>
          </p>
          <p className="ms-4  p-2 fs-6 percentBox">
            {/* {Math.floor((loan / total) * 100)} props implementation */}{Math.floor((actualLoanRequest / actualTotalImport) * 100)}
            <span className="">%</span>
          </p>
        </div>
        <div className="d-flex">
          <CircleButton
            whatIs={"totalImportImmobile"}
            actualImport={total}
            onClickHandler={onClickHandler}
            type={"+"}
            setting={"circleButton text-center"}
          />
          <CircleButton
            whatIs={"totalImportImmobile"}
            actualImport={total}
            onClickHandler={onClickHandler}
            type={"-"}
            setting={"ms-3 me-5 circleButton text-center"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default TotalImport;

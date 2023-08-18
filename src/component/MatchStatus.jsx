import React, { useEffect, useState } from "react";
import style from "./matchstatus.module.css";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import axios from "axios";

const MatchStatus = () => {
  const [leaders, setLeaders] = useState([]);
  const [showParkWin, setShowParkWin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleButton = () => {
    setShowParkWin(!showParkWin);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${BASE_URL}leadership`);
        setLeaders(response.data.leadership);
        console.log(response.data.leadership);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className={style.divleader} fluid>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={6} className={`mt-4 `}>
          <div className="text-center d-flex flex-column gap-3">
            <h3 style={{ color: "#000", fontWeight: "700" }}>
              <span className={style.leaderColor}>MATCH </span>
              <span className="ps-4">STATUS</span>
            </h3>
          </div>
          <Row className="d-flex align-items-center justify-content-center my-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="search a player"
                className={style.classInput}
              />
            </Col>
            <Col className={style.divSearch} md={3}>
              <Button>Search</Button>
            </Col>
          </Row>
          <Table className={style.tableclass} responsive>
            <thead>
              <tr>
                <th>Match Type</th>
                <th>Player / Team Name</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>

            {/* <tbody>
              {isLoading ? ( // Check if data is loading
                <tr>
                  <td colSpan="3">
                    <div
                      className="spinner-grow text-warning"
                      style={{ width: "3rem", height: "3rem" }}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
              ) : leaders.length > 0 ? (
                leaders?.map((leader, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>
                        <Row>
                          <Col md={4}>
                            <img
                              src={avatar}
                              style={{ width: "35px", marginBottom: "5px" }}
                              className="rounded-circle border border-white border-1"
                            />
                          </Col>
                          <Col className="d-flex justify-content-start">
                            <p className="mb-0">{leader?.user.username}</p>
                          </Col>
                        </Row>
                      </td>
                      <td>{leader?.points}%</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td>No data available</td>
                  <td></td>
                </tr>
              )}
            </tbody> */}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MatchStatus;

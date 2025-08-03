import Products from "./components/Products";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./db/fruit";
import { useState } from "react";
import Detail from "./components/Detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Title from "./components/Title";

function App() {
  let [fruit, setFruit] = useState(data);
  let navigate = useNavigate();

  const sortByName = () => {
    let sortedFruit = [...fruit].sort((a, b) => (a.title > b.title ? 1 : -1));
    setFruit(sortedFruit);
    console.log(sortedFruit);
  };

  const sortByPriceLowToHigh = () => {
    let sortedFruit = [...fruit].sort((a, b) => a.price - b.price);
    setFruit(sortedFruit);
    console.log(sortedFruit);
  };

  const sortByPriceHighToLow = () => {
    let sortedFruit = [...fruit].sort((a, b) => b.price - a.price);
    setFruit(sortedFruit);
    console.log(sortedFruit);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">과일농장</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                홈으로
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                상세페이지
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                장바구니
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}
              >
                회사소개
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="slider"></div>
                <Title />

                <div class="container">
                  <div class="row">
                    <div style={{ textAlign: "center" }}>
                      <Button variant="outline-primary" onClick={sortByName}>
                        {" "}
                        이름순 정렬{" "}
                      </Button>{" "}
                      <Button
                        variant="outline-secondary"
                        onClick={sortByPriceLowToHigh}
                      >
                        낮은가격순 정렬
                      </Button>{" "}
                      <Button
                        variant="outline-success"
                        onClick={sortByPriceHighToLow}
                      >
                        높은가격순 정렬
                      </Button>{" "}
                    </div>
                  </div>
                </div>

                <div className="container" style={{ marginTop: "30px" }}>
                  <div className="row">
                    {fruit.map((ele, i) => {
                      return (
                        <Products fruit={fruit[i]} i={i} key={fruit[i].id} />
                      );
                    })}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="detail/:paramId" element={<Detail fruit={fruit} />} />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<Member />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}
export default App;

function About() {
  return (
    <>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </>
  );
}

function Member() {
  return (
    <>
      <h4>Member</h4>
    </>
  );
}

function Location() {
  return (
    <>
      <h4>Location</h4>
    </>
  );
}

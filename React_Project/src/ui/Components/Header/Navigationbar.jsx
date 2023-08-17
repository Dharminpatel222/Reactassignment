import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";

function Navigationbar({ setSearchText }) {
  return (
    <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <a href="">
              <img
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
                alt=""
              />
            </a>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}
            >
              Everything
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}
            >
              Groceries
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}
            >
              Juice
            </Nav.Link>
          </Nav>
          <div className="Site-header-section">
            <div className="F-box">
              <div>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "30px",
                  }}
                >
                  About
                </a>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;

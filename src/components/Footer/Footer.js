/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
       
        <div className="copyright">
          © {new Date().getFullYear()} Hecho con{" "}
          <i className="tim-icons icon-heart-2" /> Por{" "}
          <a
            href="#"
            target="_blank"
          >
            M & L Systems
          </a>{" "}
          los mejores sistemas.

        </div>
      </Container>
    </footer>
  );
}

export default Footer;

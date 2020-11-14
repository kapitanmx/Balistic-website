import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React, {useState} from "react"
import "./layout.css"



const Header = () => {

    const Navbar = styled.nav`

        padding: 10px 0 10px 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        font-family: roboto;
        position: fixed;
        z-index: 2;
        width: 100%;
        background-color: #fff;

    `
    const Bar = styled.div`
    
        height: 20px;
        width: ${(props) => (props.width) ? props.width: 100};
        background-color: red;
        z-index: 3;

    `
    const[currentWidth, setWidth] = useState(window.scrollY)

    return (

    <Navbar>
        <h2 className="site-title">{ siteTitle} </h2>
        <ul className="nav-list">
          <li className="nav-list-element">Kontakt</li>
          <li className="nav-list-element">Galeria</li>
          <li className="nav-list-element">O nas</li>
          <li className="nav-list-element">Oferta</li>
          <li className="nav-list-element">Balistic</li>
        </ul>
        <Bar onScroll={currentWidth}></Bar>
    </Navbar>

    )

}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

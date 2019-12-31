import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// import "./index.scss"

class Footer extends Component {
    render() {
        return (
            <footer>
                {
                    this.props.route.map(item => item.path ? (
                        <NavLink key={item.path} to={item.path} activeClassName='active'>
                            <p>{item.LinkName}</p>
                        </NavLink>
                    ) : null)
                }
            </footer>
        )
    }
}
export default Footer
import "./Navigation.scss";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";



class Navigation extends Component {
	render() {
		const links = [{
			to: "/",
			text: "GRIDIRON STATS",
		},	{
			to: "/teams",
			text: "Compare Teams",
		}, {
			to: "/foundations",
			text: "Foundations",
		}];


		return (
			< Menu >
				< Menu.Menu>
					<Menu.Item position="left">
						<Link to="/" className="Nav-Link-Home">
							GRIDIRON STATS
						</Link>
					</Menu.Item>
				</Menu.Menu>
				< Menu.Menu position= "right">
					{links.map((link, index) => {
						return (
							<Menu.Item key= {index}>
								<NavLink
									key= {link.to}
									to= {link.to}
									className= "Nav-link"
									activeClassName= "is-active"
								>
									{link.text}
								</NavLink>
							</Menu.Item>
						);
					})}
				</Menu.Menu>
			</Menu>
		);
	}
}



export default Navigation;

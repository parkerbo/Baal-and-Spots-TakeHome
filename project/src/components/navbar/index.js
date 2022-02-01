import "./navbar.css";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import cardoLogo from "../../assets/images/CardoLogo.svg";
import {GiHamburgerMenu} from 'react-icons/gi'
const NavBar = () => {
    return (
			<nav className="nav-bar">
				<GridColumn>
					<GridRow>
						<GridColumn display="flex">
							<div id="nav-bar-logo">
								<img src={cardoLogo} alt="text displaying the word Cardo" />
							</div>
						</GridColumn>
						<GridColumn display={["none", "none", "none", "initial"]}>
							<ul id="nav-bar-links">
								<li>Deposit</li>
								<li>Dashboard</li>
								<li>Company</li>
								<li>Pricing</li>
							</ul>
						</GridColumn>
						<GridColumn display={["initial", "inital", "inital", "none"]}>
                            <div id="nav-bar-mobile-menu-button"><GiHamburgerMenu size="1.4em"/></div>

						</GridColumn>
					</GridRow>
				</GridColumn>
			</nav>
		);
}

export default NavBar;

import "./navbar.css";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import navBarStars from "../../assets/images/NavBarStars.png";
import cardoLogo from "../../assets/images/CardoLogo.png";

const NavBar = () => {
    return (
			<nav className="nav-bar">
				<GridColumn>
					<GridRow>
						<GridColumn display="flex">
							<div id="nav-bar-stars">
                                <img src={navBarStars} alt="two black four pointed stars overlapping horizontally"/>
                            </div>
							<div id="nav-bar-logo">
                                <img src={cardoLogo} alt="text displaying the word Cardo"/>
                            </div>
						</GridColumn>
						<GridColumn>
							<ul id="nav-bar-links">
								<li>Deposit</li>
								<li>Dashboard</li>
								<li>Company</li>
								<li>Pricing</li>
							</ul>
						</GridColumn>
					</GridRow>
				</GridColumn>
			</nav>
		);
}

export default NavBar;

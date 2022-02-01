import NavBar from "../navbar";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import asteriksImage from "../../assets/images/asteriks.svg";
import rightArrow from "../../assets/images/RightArrow.svg";
import "./frame-1-left.css";

const Frame1Left = () => {
	return (
		<div className="landing-frame-1-left">
			<NavBar />
			<div className="landing-frame-1-left-ellipses"></div>
			<GridColumn>
				<GridRow>
					<div id="landing-frame-1-left-asteriks">
						<img src={asteriksImage} alt="Three asteriks in a row"/>
					</div>
				</GridRow>
				<GridRow>
					<h1 id="landing-frame-1-left-tagline">
						All the{" "}
						<span id="landing-frame-1-left-tagline-bold">experience</span>
						<br />
						in the new credit card
					</h1>
				</GridRow>
				<GridRow>
					<div id="landing-frame-1-left-arrow">
						<img src={rightArrow} alt="Black arrow pointing right"/>
					</div>
				</GridRow>
				<GridRow>
					<div id="landing-frame-1-left-details">
						Simple transfers, payments for utilities, functional statement, card
						settings, for which you used to have to go to the branch
						online-banking
					</div>
				</GridRow>
				<GridRow>
					<div id="landing-frame-1-left-button-section">
                        <button id="landing-frame-1-left-black-button">Order a card</button>
                        <div id="landing-frame-1-left-text-button">How it works ></div>
                    </div>
				</GridRow>
				<GridRow></GridRow>
			</GridColumn>
		</div>
	);
};

export default Frame1Left;

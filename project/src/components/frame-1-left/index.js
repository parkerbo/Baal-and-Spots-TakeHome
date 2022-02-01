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
						<img src={asteriksImage} />
					</div>
				</GridRow>
				<GridRow>
					<div id="landing-frame-1-left-tagline">
						All the{" "}
						<span id="landing-frame-1-left-tagline-bold">experience</span>
						<br />
						in the new credit card
					</div>
				</GridRow>
				<GridRow>
					<div id="landing-frame-1-left-arrow">
						<img src={rightArrow} />
					</div>
				</GridRow>
				<GridRow>
					<div id="landing-frame-1-left-details">
						Simple transfers, payments for utilities, functional statemement,
						card settings, for which you used to have to go to the branch
						online-banking
					</div>
				</GridRow>
				<GridRow></GridRow>
				<GridRow></GridRow>
			</GridColumn>
		</div>
	);
};

export default Frame1Left;

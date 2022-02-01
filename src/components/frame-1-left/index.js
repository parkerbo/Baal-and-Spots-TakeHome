import NavBar from "../navbar";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import asteriksImage from "../../assets/images/asteriks.svg";
import rightArrow from "../../assets/images/RightArrow.svg";
import starsImage from "../../assets/images/stars.svg";
import mobileCreditCard from "../../assets/images/MobileCreditCard.svg";

import "./frame-1-left.css";

const Frame1Left = () => {
	return (
		<div className="landing-frame-1-left">
			<NavBar />
			<div className="landing-frame-1-left-ellipses"></div>
			<GridColumn width="12">
				<GridRow>
					<div id="landing-frame-1-left-asteriks">
						<img src={asteriksImage} alt="Three asteriks in a row" />
					</div>
					<div className="landing-frame-1-left-stars">
						<img src={starsImage} alt="Black four pointed stars" />
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
						<img src={rightArrow} alt="Black arrow pointing right" />
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
						<div id="landing-frame-1-left-text-button">
							How it works {" > "}{" "}
						</div>
					</div>
				</GridRow>
				<GridColumn>
					<div id="landing-frame-1-left-stats">
						<GridRow>
							<GridColumn width={4}>
								<div id="stats-item">
									<p>Active Users</p>

									<h2>5000+</h2>
								</div>
							</GridColumn>
							<GridColumn width={4}>
								<div
									id="stats-item"
									style={{
										borderLeft: " 2px solid #D2D2D2",
										borderRight: " 2px solid #D2D2D2",
									}}
								>
									<p>Download</p>
									<h2>30.3k</h2>
								</div>
							</GridColumn>
							<GridColumn width={4}>
								<div id="stats-item">
									<p>Reviews</p>
									<h2>1200+</h2>
								</div>
							</GridColumn>
						</GridRow>
					</div>
				</GridColumn>
				<GridRow display={["initial", "initial", "initial", "none"]}>
					<div id="landing-frame-1-mobile-card">
                        <img src={mobileCreditCard} />
                    </div>
				</GridRow>
			</GridColumn>
		</div>
	);
};

export default Frame1Left;

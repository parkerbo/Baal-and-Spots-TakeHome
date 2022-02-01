import handImage from "../../assets/images/DesktopHand.png";
import desktopCardImage from "../../assets/images/DesktopCreditCard.png";
import starsImage from "../../assets/images/stars.png";
import motoAislaImage from "../../assets/images/DesktopGraphicOverlay.png";

const Frame1Right = () => {
    return (
			<div className="landing-frame-1-right">
				<div className="landing-frame-1-right-stars">
					<img src={starsImage} alt="Black four pointed stars" />
				</div>
				<div className="landing-frame-1-right-hand">
					<img
						src={handImage}
						alt="Grayscale hand halfway opened with the palm facing the screen"
					/>
				</div>
				<div className="landing-frame-1-right-card">
					<img
						src={desktopCardImage}
						alt="White credit card with the Cardo brand"
					/>
				</div>
				<div className="landing-frame-1-right-moto-aisla">
					<img
						src={motoAislaImage}
						alt="Multiple solid curved lines overlaying the bottom of the hand"
					/>
				</div>
			</div>
		);
}

export default Frame1Right;

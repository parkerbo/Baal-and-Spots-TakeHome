import "./frame-2.css";
import Card from "../card";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
const Frame2 = ({ cards }) => {
	return (
		<div className="landing-frame-2">
			<h1 className="landing-frame-2-header">Experience The Cardo</h1>
			<GridRow wrap="wrap">
				{cards.map((card) => {
					return (
						<GridColumn width={[12, 12, 12, 4]} >
							<Card card={card} />
						</GridColumn>
					);
				})}
			</GridRow>
		</div>
	);
};

export default Frame2;

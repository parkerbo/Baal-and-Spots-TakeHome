import React from "react";
import { useEffect, useState } from "react";
import { getLCP, getFID, getCLS } from "web-vitals";
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import Frame1Left from "./components/frame-1-left";
import Frame1Right from "./components/frame-1-right";
import Frame2 from "./components/frame-2";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);

  const Axe = require("@axe-core/react");
  Axe(React, 1000);
}

function App() {
// declare state variables for application loading and API data storage
const [isLoaded, setLoaded] = useState(false);
const [cards, setCards] = useState([]);

// function used to generate API call

const getCards = async () => {
  try {
    const response = await fetch(
      "https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf"
    );
    const data = await response.json();
    return data.slice(0,6);
  } catch(e) {
    console.log(e);
  }
}

useEffect(() => {
 getCards().then((res) => {
 setCards(res)
 setLoaded(true)
 }
 );
}, [])

  if (isLoaded){
  return (
		<div className="landing-main-content">
			<div className="landing-frame-1">
				<GridRow>
					<GridColumn width={7}>
            <Frame1Left />
					</GridColumn>
					<GridColumn width={5} display={['none','none', 'none', 'initial']}>
          <Frame1Right />
					</GridColumn>
				</GridRow>
			</div>

			<Frame2 cards={cards} />
		</div>
	);
  } else {
    return (<div>
      Loading...
    </div>)
  }
}

export default App;

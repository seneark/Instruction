import React from "react";
import { useMediaQuery } from "react-responsive";

const Example = () => {

	return (
		<div
			className="video"
			style={{
				// position: "relative",
				// paddingBottom: "56.25%" /* 16:9 */,
				// paddingTop: 25,
				// height: 0,
                margin:"auto"
			}}
		>
			<iframe
				title="Introduction"
				style={{
                    height:"50vh",
                    width:"90vw",
                    maxWidth:900,
                    maxHeight:900
				}}
				src={`https://www.youtube.com/embed/I1E2ZWDx7Jw`}
				frameBorder="0"
			/>
		</div>
	);
};

export default Example;

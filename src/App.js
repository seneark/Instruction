import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Button from "@material-ui/core/Button";
import Flip from "react-reveal/RubberBand";
import LightSpeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";
import "react-notifications/lib/notifications.css";

import Video from "./Components/video";

class Home extends Component {
	constructor(props) {
		super(props);
		this.Registered = this.Registered.bind(this);
		this.state = {
			Register: false,
		};
	}

	Registered() {
		this.setState({ Register: true });
	}

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
					color: "White",
					marginBottom: 50,
				}}
			>
				<div
					style={{
						width: "80vw",
						margin: "auto",
					}}
				>
					<Pulse>
						<h1>Instructions: (Read Them Carefully)</h1>
						<Video />
					</Pulse>
					<h3>
						<Zoom left cascade>
							<div style={{ display: "inline-block" }}>
								1. Programming language&nbsp;
							</div>
						</Zoom>
						<Zoom right cascade>
							<div style={{ display: "inline-block" }}>
								to be used is C++.
							</div>
						</Zoom>
					</h3>
					<h3>
						<Zoom delay={1000} left cascade>
							<div style={{ display: "inline-block" }}>
								2. All the answers should be&nbsp;
							</div>
						</Zoom>
						<Zoom delay={1000} right cascade>
							<div style={{ display: "inline-block" }}>
								entered in lower case without any space or
								special characters.
							</div>
						</Zoom>
					</h3>
					<h3>
						<Zoom delay={2000} left cascade>
							<div style={{ display: "inline-block" }}>
								3.All participants need to fill a google form
								before&nbsp;
							</div>
						</Zoom>
						<Zoom delay={2000} right cascade>
							<div style={{ display: "inline-block" }}>
								starting any round else submission will not be
								considered.
							</div>
						</Zoom>
					</h3>
					{/*4*/}
					<h3>
						<Zoom delay={3000} left cascade>
							<div style={{ display: "inline-block" }}>
								4.In order to move to next round,
								participants&nbsp;
							</div>
						</Zoom>
						<Zoom delay={3000} right cascade>
							<div style={{ display: "inline-block" }}>
								need to solve all the rounds prior to it.
							</div>
						</Zoom>
					</h3>
					{/*5*/}
					<h3>
						<Zoom delay={4000} left cascade>
							<div style={{ display: "inline-block" }}>
								5.In case participants want to quit at a
								particular round,&nbsp;
							</div>
						</Zoom>
						<Zoom delay={4000} right cascade>
							<div style={{ display: "inline-block" }}>
								they need to fill a google form before quitting.
							</div>
						</Zoom>
					</h3>
					{/*6*/}
					<h3>
						<Zoom delay={5000} left cascade>
							<div style={{ display: "inline-block" }}>
								6.Participants will be judged on the basis of
								total rounds&nbsp;
							</div>
						</Zoom>
						<Zoom delay={5000} right cascade>
							<div style={{ display: "inline-block" }}>
								cleared and total time taken for all the rounds.
							</div>
						</Zoom>
					</h3>
					{/*7*/}
					<h3>
						<Zoom delay={6000} left cascade>
							<div style={{ display: "inline-block" }}>
								7. After solving all the rounds, participants
								need to fill&nbsp;
							</div>
						</Zoom>
						<Zoom delay={6000} right cascade>
							<div style={{ display: "inline-block" }}>
								the form in order to get their participation
								recorded.
							</div>
						</Zoom>
					</h3>
					{/*8*/}
					<h3>
						<Zoom delay={7000} left cascade>
							<div style={{ display: "inline-block" }}>
								8.Results will be announced on 1st September
								2020&nbsp;
							</div>
						</Zoom>
						<Zoom delay={7000} right cascade>
							<div style={{ display: "inline-block" }}>
								on D_CODER LINKEDIN and INSTAGRAM handle.
							</div>
						</Zoom>
					</h3>
					{/* 9 */}
					<h3 style={{ color: "#f50057" }}>
						<Zoom delay={8000} left cascade>
							<div style={{ display: "inline-block" }}>
								9.Register on Google Form&nbsp;
							</div>
						</Zoom>
						<Zoom delay={8000} right cascade>
							<div style={{ display: "inline-block" }}>
								First before doing anything else.
							</div>
						</Zoom>
					</h3>
					<br />
					<br />
					<LightSpeed delay={3000}>
						<Flip delay={9000}>
							{this.state.Register ? (
								<a
									href={
										"https://seneark.github.io/RoUNd1HaCk/"
									}
								>
									<Button
										variant="outlined"
										color="secondary"
									>
										Go to First Round
									</Button>
								</a>
							) : (
								<Button
									variant="outlined"
									color="secondary"
									onClick={this.Registered}
									href={"https://forms.gle/s6Hqv2pJwLb7MKNc9"}
									target="_blank"
								>
									Register at Google Form
								</Button>
							)}
						</Flip>
					</LightSpeed>
				</div>
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default Home;

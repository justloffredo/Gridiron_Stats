import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Divider, Image } from "semantic-ui-react";
import "./Foundations.scss";

const srcMADD = "https://www.madd.org/wp-content/uploads/2017/08/MADD_Retina_Logo.png";

const srcNtlHgh =
"https://naturalhigh.org/wp-content/themes/naturalhigh/images/logo.png";

const srcJoyfulHrt =
"http://www.joyfulheartfoundation.org/sites/all/themes/JHF/images/logo_0_new.png";

const srcBradyBill =
"https://s3.amazonaws.com/libapps/accounts/124093/images/brady.png";

const srcFAR =
"http://www.attcnetwork.org/images/rsalogo.gif";

const srcRAINN =
"https://www.rainn.org/sites/all/themes/rainn/logo.svg";

const srcSafeHorizon =
"https://www.safehorizon.org/wp-content/themes/safehorizon/img/SH_Logo_Purple_Nail.png";


class Foundations extends Component {
	render() {
		return (


			<div className="Foundations-Div">
				<Grid verticalAlign='middle' columns={4} centered>
					<Grid.Row>
						<Grid.Column>
							<Image className= "MADD-Image" src= {srcMADD}
							 	href="https://www.madd.org/donate-now/"
								target="_blank"
								centered spaced='right'
								shape='rounded'
								spaced />
							<Divider hidden />
						</Grid.Column>
						<Grid.Column>
							<Image className="Natural-High-Image"
								src= {srcNtlHgh}
								href="https://pages.donately.com/naturalhigh/donate"
								target="_blank"
								centered spaced='right'
								shape='rounded'
								size='medium'
								spaced='bottom' />
							<Divider hidden />
							<Image className="Joyful-Image"
								src= {srcJoyfulHrt}
								href="https://secure.joyfulheartfoundation.org/page/contribute/give-joy?source=websiteheader-button"
								target="_blank"
								centered spaced='bottom'
								shape='rounded'
								spaced />
							<Divider hidden />
							<Image src= {srcSafeHorizon}
								href="https://www.safehorizon.org/donate/"
								target="_blank"
								size= 'medium'
								centered spaced='right'
								shape='rounded'
								spaced />
								<Divider hidden />
						</Grid.Column>
						<Grid.Column>
							<Image src= {srcFAR}
								href="https://www.paypal.com/fundraiser/charity/35832"
								target="_blank"
								size='massive'
								centered spaced='right'
								shape='rounded'
								spaced />
							 <Divider hidden />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={4}>
						<Grid.Column>
							<Image src= {srcRAINN}
								href="https://donate.rainn.org/"
								target="_blank"
								size= 'medium'
								centered
								spaced='right'
								shape='rounded'
								/>
							<Divider hidden />
						</Grid.Column>
						<Grid.Column>
							<Image className="Brady-Bill-Image"
								src= {srcBradyBill}
								href="https://secure.everyaction.com/FixKmAdTbkyF5-sTXYCdpQ2"
								target="_blank"
								centered
								shape='rounded'
								spaced='right'/>
								<Divider hidden />
					</Grid.Column>
			</Grid.Row>
			</Grid>
		</div>


);
}
}
export default Foundations;

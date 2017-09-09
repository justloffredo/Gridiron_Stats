import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Divider, Image } from "semantic-ui-react";
import "./Foundations.scss";

const srcMADD =
"src/assets/images/madd.png";


const srcNtlHgh =
"src/assets/images/naturalHigh.png";

const srcASPCA =
"src/assets/images/aspca.svg";


const srcSafeHorizon =
"src/assets/images/safeHorizon.png";

const srcWings =
"src/assets/images/wings.png";

const srcRAINN =
"src/assets/images/rainn.svg";


const srcPrevent =
"src/assets/images/prevent.png";



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
								spaced
							/>
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
								spaced='bottom'
							/>
							<Divider hidden />
							<Image className="ASPCA-Image"
								src= {srcASPCA}
								href="https://secure.aspca.org/donate/donate-201709-t1-p1"
								target="_blank"
								centered spaced='bottom'
								shape='rounded'
								spaced
							/>
							<Divider hidden />
							<Image src= {srcPrevent}
								href="http://preventchildabuse.org/donation/"
								target="_blank"
								size= 'massive'
								centered spaced='right'
								shape='rounded'
								spaced
							/>
							<Divider hidden />
						</Grid.Column>
						<Grid.Column>
							<Image src= {srcWings}
								href="https://www.coloradogives.org/index.php?section=organizations&action=newDonation&fwID=24298"
								target="_blank"
								size='large'
								centered spaced='right'
								shape='rounded'
								spaced
							/>
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
							<Image className="SafeHorizon-Image"
								src= {srcSafeHorizon}
								href="https://www.safehorizon.org/donate/"
								target="_blank"
								size="large"
								centered
								shape='rounded'
								spaced='right'
							/>
							<Divider hidden />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>


		);
	}
}
export default Foundations;

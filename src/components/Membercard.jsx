import React from 'react';
import { Card, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';


class Membercard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {


		return(
					<div>
					      
					        <Card body className=" text-center">
					          <img width="100%"  id="person-img" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=picture&w=300&h=300" alt="Card image cap" />
					          <CardTitle className="">{this.props.mem.name}</CardTitle>
					          <CardSubtitle>{this.props.mem.description}</CardSubtitle>
					        </Card>
					      
				</div>
			);
	}
}

export default Membercard;
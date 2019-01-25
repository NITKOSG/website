import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle,Container, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <h1 className="text-center" style={{fontSize:'10vw'}}>Projects</h1>
            <Container>
    <CardColumns>

           <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardSubtitle>By XYZ</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>View on Github</Button>
        </CardBody>
      </Card>


      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>


      <Card>
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardSubtitle>By XYZ</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>View on Github</Button>
        </CardBody>
      </Card>


      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Getting started MANUAL</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>View on Github</Button>
      </Card>
   
    

      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project 3</CardTitle>
          <CardSubtitle>By XYZ</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>View on Github</Button>
        </CardBody>
      </Card>
               <Card body inverse >
        <CardTitle>Project Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">View on Github</Button>
      </Card>

      <Card body inverse >
        <CardTitle>Project Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">View on Github</Button>
      </Card>


        <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project Tile</CardTitle>
          <CardSubtitle>By ZYX</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>View on Github</Button>
        </CardBody>
      </Card>
         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle> Project Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>View on Github</Button>
      </Card>
   
    

      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project Title</CardTitle>
          <CardSubtitle>By XYZ</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>View on Github</Button>
        </CardBody>
      </Card>
               <Card body inverse >
        <CardTitle>Project Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">View on Github</Button>
      </Card>


    </CardColumns>
            </Container>
                
            </div>
          );
    }
}
 
export default Projects;
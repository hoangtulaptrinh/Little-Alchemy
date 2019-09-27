import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import './Target.css'

import { Container, Row, Col , CardImg, Card} from 'reactstrap';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, targetArr } = this.props;
    const backgroundColor = hovered ? 'lightgreen' : '';
    return connectDropTarget(
      <div className="Target" style={{ background: backgroundColor }}>
      <Container>
        <Row>
        {
          targetArr.map((item,index)=>
          <Col sm="3" key={index}>
            <Card className= 'item'>
            <p>{item.name}</p>
            <CardImg top width="100%" src = {item.url} alt="Card image cap" />
            </Card>
          </Col>)
        }
        </Row>
      </Container>

        </div>
    );
  }
}

export default DropTarget('item', {}, collect)(Target);
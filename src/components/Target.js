import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import './Target.css'

import { CardImg, Card} from 'reactstrap';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

const canDropTheTarget = {

  drop(props, monitor, component) {
    if (monitor.didDrop()) {console.log(1)
      return;
    }
    // khi thả vào component nào thì sẽ lấy đc id của component đó
    return props.updateIdDrop(props.item.id);
  },
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, name , url } = this.props;
    const backgroundColor = hovered ? 'lightgreen' : '';
    return connectDropTarget(
      <div className="Target" style={{ background: backgroundColor }}>
            <Card className= 'item'>
            <p>{name}</p>
            <CardImg top width="100%" src = {url} alt="Card image cap" />
            </Card>
        </div>
    );
  }
}

export default DropTarget('item', canDropTheTarget , collect)(Target);
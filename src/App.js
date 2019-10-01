import React, { Component } from 'react';
import './App.css';
import Target from './components/Target'
import Item from './components/Item'
import { Container, Row, Col, Button } from 'reactstrap';
import * as actions from './actions/index';
import { connect } from 'react-redux';
class App extends Component {

  ChangeItems = (idDrag) => {
    this.props.followRecipe(idDrag,this.props.IdDrop);
  }

  updateIdDrop = idDrop => {
    this.props.updateID(idDrop);
  }

  reset = () => {
    this.props.reset();
  }

  render() {
    const { Arr } = this.props
    return (
      <div className="App">

        <div className='total-target'>
          <h2>Drop Below Me</h2>

          <div className='drop-Target'>
            <Container id='Container'>
              <Row id='row'>

                {
                  Arr.Target.map((item, index) => (
                    <Col sm="2" key={index}>
                      <Target item={item} key={index} name={item.name} url={item.url} recipe={item.recipe} updateIdDrop={(id) => this.updateIdDrop(id)} />
                    </Col>
                  ))
                }

              </Row>
            </Container>

          </div>
          <Button outline color="danger" onClick={() => this.reset()}>
            Study again from the beginning
          </Button>{' '}
        </div>

        <div className="item-container">
          {Arr.Items.map((item, index) => (
            <Item item={item} key={index} name={item.name} url={item.url} ChangeItems={(id) => this.ChangeItems(id)} />
          ))}
        </div>

      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    IdDrop : state.IdDrop,
    Arr : state.Arr,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    reset : () => dispatch(actions.reset()),
    updateID : (idDrop) => dispatch(actions.updateID({ idDrop : idDrop })),
    followRecipe : (idDrag,idDrop) => dispatch(actions.followRecipe({ idDrag : idDrag,idDrop : idDrop })),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps) (App);
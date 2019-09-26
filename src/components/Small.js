import React, { Component } from 'react'
import './Small.css';

// import * as actions from '../actions/index';
import { connect } from 'react-redux'

class Small extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { List } = this.props
    return (
      <div className="Small">
        {List.map((item, index) =>
          <div key={index} className='Total'>
            <img src={item.url}></img>
            <h3>{item.name}</h3>
          </div>)
        }
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    List: state.List
  }
}

export default connect(mapStatetoProps)(Small);
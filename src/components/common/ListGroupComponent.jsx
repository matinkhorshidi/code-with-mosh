import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class ListGroupComponent extends Component {
  state = {};
  render() {
    let linkKey = '#link';
    return (
      <ListGroup style={{ marginTop: '20px' }} defaultActiveKey="#link0">
        {this.props.items.map((item, index) => (
          <ListGroup.Item
            href={linkKey + index}
            action
            active={this.props.selectedGenre === item}
            onClick={() => this.props.onItemSelect(item)}
            key={index}
          >
            {item[this.props.textProperty]}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
ListGroupComponent.defaultProps = {
  textProperty: 'name',
  valuePropery: '_id',
};

export default ListGroupComponent;

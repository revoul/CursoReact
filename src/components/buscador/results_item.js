import React, { Component, PropTypes } from 'react';

class ResultsItem extends Component {
  render(){
    /* TODO - pintar una fila de la tabla */    
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.actor}</td>
        <td>{this.props.item.seasons}</td>
        <td>{this.props.item.alive ? 'Si' : 'No'}</td>
      </tr>
    )
  }
}

ResultsItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.number).isRequired,
    alive: PropTypes.bool.isRequired
  }).isRequired
}

export default ResultsItem;
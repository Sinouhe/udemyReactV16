import React, { Component } from "react";
import {addRessource} from '../actions'
import {connect} from 'react-redux'
import {getIntegerList, getContainsOneList, getPrimeNumberList, getSpecialNumbersList} from '../selectors/index'

class Ressources extends Component {

  renderRessource = (ressources) => {
    return (
      ressources.map( ressource => {
        return <li key={ressource}>{ressource}</li>
      })
    )
  }

  render() {
    return(
      <div className='row'>
        <div className='col'>
          <button 
            type='button' 
            onClick={() => this.props.addRessource()} 
            className='btn btn-raised btn-primary'>
              Ajouter un nombre
          </button>
        </div>
        <div className='col'>
          Entiers
          <ul>{this.renderRessource(this.props.integerRessources)}</ul>
        </div>
        <div className='col'>
          Contiennent "1"
          <ul>{this.renderRessource(this.props.containsOneRessources)}</ul>
        </div>
        <div className='col'>
          Entiers premiers
          <ul>{this.renderRessource(this.props.primeRessource)}</ul>
        </div>
        <div className='col'>
          Entiers premiers contenants "1"
          <ul>{this.renderRessource(this.props.specialNumbersList)}</ul>
        </div>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    integerRessources : getIntegerList(state),
    containsOneRessources : getContainsOneList(state),
    primeRessource : getPrimeNumberList(state),
    specialNumbersList: getSpecialNumbersList(state)
  }
}

const mapDispatchToProps = {
  addRessource
}

export default connect(mapStateToProps, mapDispatchToProps)(Ressources);

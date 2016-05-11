import React, { Component } from 'react';
import Title from './title';
import Form from './form';
import Results from './results';
import { characters } from '../../data/got';

// Extrae los diferentes nombres de familias de la lista de personajes
function extractFamilyNames(people){
  //TODO!!!
  return people.reduce((acc, elem) => {
    if(!acc.includes(elem.family)){
      acc.push(elem.family);
    }
    return acc;
  }, []);
}

// Extrae las diferentes temporadas de la lista de personajes
function extractAllSeasons(people){
  //TODO: devolvemos un array ordenado
  return [];
}

// Filtra los personajes a partir de una "consulta"
function search(query){
  const nameRegEx = new RegExp(query.name, 'i');
  return characters.filter(c => {
    return (
      //name or actor matches query name
      (nameRegEx.test(c.name) || nameRegEx.test(c.actor))
      //character family equals query family
      && (query.family.trim() === '' || c.family === query.family)
      //character is alive
      && (!query.aliveOnly || c.alive)
      //character appears in query seasons
      && query.seasons.every(s => c.seasons.includes(s))
    );
  });
}

class Buscador  extends Component {
  constructor(props){
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.state = {
      results: characters,
      familyNames: extractFamilyNames(characters).sort(),
      allSeasons: extractAllSeasons(characters),
      filter: {
        name: '',
        family: '',
        aliveOnly: false,
        seasons: []
      }
    }
  }

  handleQueryChange(changes){
    const currentFilter = this.state.filter;
    //TODO: actualizar el filtro en el state del componente
  }

  render(){
    //los resultados siempre son una búsqueda con el filtro
    const results = search(this.state.filter);
    return (
      <div className='search-engine'>
        <Title text="Buscador Juego de Tronos" />
        <Form
          filter={ this.state.filter }
          families={ this.state.familyNames }
          allSeasons={ this.state.allSeasons }
          onQueryChange={ this.handleQueryChange } />
        <Results items={ results } />
      </div>
    )
  }
}

export default Buscador;
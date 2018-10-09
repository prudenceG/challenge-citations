import React, { Component } from 'react';
import './App.css';
import SelectCitation from './SelectCitation';
import DisplayCitation from './DisplayCitation';

//décaration des variables en dehors de la classe
const bydefault = {
  character: "Frank Grimes",
  characterDirection: "Left",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
  quote: "I live in a single room above a bowling alley...and below another bowling alley."
}

class App extends Component {
//j'initie un state initial, mon json est sous forme de tableau et je veux y metre une citation par défaut "bydefault"
  state = {
    result: [bydefault],
    // dateOk: false
  }
//le componentDidMount permet de faire le fetch après que la page et ses composants placés dans le render soit chargé
//c'est le cycle de vie en react
  getCitation = () => {
      fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => 
        this.setState(
          {
            result: data
            // dataOk: true
          }
//data est une variable ou l'on stocke le résultat de la transformation en json, on met data dans notre tableau result
      )
      )
}
  render() {
     //quand on affiche this state, les deux états s'affichent l'un après l'autre dans la console
    console.log(this.state)
    return (
      <div className="App">
        <SelectCitation select={this.getCitation} />

        {this.state.result.map((element, index) => (
        <DisplayCitation key={index} quote={element.quote} image={element.image} character={element.character} />))}
        {/* raccourci afin d'éviter d'écrire les propriétés de l'objet 
        {this.state.result.map((element, index) => (
        <DisplayCitation {...element}/>))}*/}

{/* on prends notre tableau state.result où sont stockées les données issues du fetch, on utilse .map
qui permet de passer et retourner chaque case du tableau récupéré. En paramètre de .map on met element, chaque
case est un objet renommé element, on peut appeler la propriété quote de l'objet element en faisant element.quote
On affiche dans une div ou composant ce que l'on veut montrer, c'est à dire les propriété quote, images, character*/}
{/* index est le deuxième paramètre par défaut de map(), il permet d'appliquer une liste, un numéro à chaque
element du tableau, à chaque objet ici. Pour react c'est important pour plus de lisibilité et de rapidité */}
      </div>
    );
  }
}

export default App;

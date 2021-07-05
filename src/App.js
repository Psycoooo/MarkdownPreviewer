import "./styles.css";
import React from "react";
import marked from "marked";

const starter =
  "# Pokemon!\r## Gotta Catch Em' All\r [Pokemon](https://www.pokemon.com/us/)\r```\rfor(let i = 0;i<arr.length;i++){\rx++\r}\n```\n 1. **Squirtle** \r 1. Bulbasaur\r 1. Charmander\r> I wanna be the very best like no one every was...\r\r![Poke Ball](https://static.wikia.nocookie.net/pokemon/images/8/87/Pok%C3%A9_Ball.png/revision/latest?cb=20200918005128)";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: starter };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div id="text-area" className="container red lighten-3">
          <textarea id="editor" onChange={this.handleChange}>
            {starter}
          </textarea>
        </div>
        <div
          className="container z-depth-2 red lighten-3"
          dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
        ></div>
        <div id="preview"></div>
      </div>
    );
  }
}

export default App;

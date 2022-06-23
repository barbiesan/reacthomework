import React , {Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded : false,
    }
  }
  componentDidMount(){
    fetch('https://kekambas-bs.herokuapp.com/kekambas')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })

          });
  }


      render() {


        var { isLoaded, items } = this.state;

        if (!isLoaded) {
          return <div> Loading... </div>;
        }
        
        else{
          
            return (
          <div ClassName="App">
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.first_name}| {item.last_name} | {item.id}
                </li>
                ))};
            </ul>

          </div>
        );
      }
    }
 
  }
export default App;
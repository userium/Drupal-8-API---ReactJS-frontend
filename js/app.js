class App extends React.Component {

// Using ES6 class syntax

  constructor(props) {
    super(props);

    // Setting up initial state

    this.state = {
      title: ''
    }
  }
  
  // calling method after the component is rendered for the first time
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(event => {    
         this.setState({
              title: event.data[2].title[0].value
          });
     });
  }
  
  // calling method immediately before a component is unmounted from the DOM
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  
  render() {
    return (
      <div>
        <h1>Here is my event:</h1>
        <h2>{this.state.title}</h2>
      </div>
    ); 
  }
}

// rendering into the DOM
ReactDOM.render(
    <App source="http://localhost:8888/drupalAPI/api/events" />, 
    document.getElementById('container')
);

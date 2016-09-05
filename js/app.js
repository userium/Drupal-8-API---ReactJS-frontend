class App extends React.Component {

constructor() {
   super();
   // Setting up initial state
   this.state = {
      data: []
   }
 }
 
// calling the componentDidMount() method after a component is rendered for the first time
componentDidMount() {
   var th = this;
   this.serverRequest = axios.get(this.props.source)
     .then(function(event) {    
          th.setState({
            data: event.data
          });
      })
}

// calling the componentWillUnMount() method immediately before a component is unmounted from the DOM
componentWillUnmount() {
     this.serverRequest.abort();
}
 
render() {
    var titles = []
    this.state.data.forEach(item => {
       titles.push(<h3 className="events">{item.title[0].value}</h3> );
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-5">
            <h1 className="title">All Events</h1>
            {titles} 
          </div>
        </div>
      </div>
    );
 } 
}

// rendering into the DOM
ReactDOM.render(
     <App source="http://localhost:8888/drupalAPI/api/events" />, 
     document.getElementById('container')
);
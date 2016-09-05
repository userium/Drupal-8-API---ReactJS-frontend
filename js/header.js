// Header
var Header = React.createClass({
render: function() {
 return (
   <div>
     <Logo />
   </div>
  )
 }
});
 
// Nav
var Nav = React.createClass({
 render: function() {
   return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav pull-right">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  )
 }
});
 
// Logo
var Logo = React.createClass({
 render: function() {
   return (
     <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
                Nina's React - Drupal API example
            </a>
          </div>
          <Nav />
        </div>
    </nav>
   )
 }
});
 
ReactDOM.render(
  <Header/>, document.getElementById("header")
);


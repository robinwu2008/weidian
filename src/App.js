import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button,ButtonToolbar } from 'react-bootstrap';
  import Top from './Top';
  import Form from './Form';
class App extends Component {
  render() {
    return (  
      <div> 
      <Top/>
        <Jumbotron>
          <Grid>
            <h1>维维</h1>
            <p>
              <Form/> 
            </p>
          </Grid>
        </Jumbotron>
 

      </div>
    );
  }
}

export default App;
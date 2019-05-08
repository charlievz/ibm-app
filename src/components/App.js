import React from 'react';
import { Menu } from 'semantic-ui-react';
import PageComponent from './PageComponent';
import logo from './ibm.png';

function App() {
  return (
    <div className="app">
      <Menu color="black" inverted borderless className='header'> 
      	<Menu.Item>
      		<img src={logo} className='logo'/>
      	</Menu.Item>
      </Menu>
      <PageComponent/>
      <Menu color="black" inverted borderless className='footer'/> 
    </div>
  );
}

export default App;
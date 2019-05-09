import React from 'react';
import { Menu } from 'semantic-ui-react';
import PageComponent from './PageComponent';
import logo from './ibm.png';

function App() {
  return (
    <div className="app">
      <Menu color="black" inverted borderless className='header'>
      	<Menu.Item>
      		<img alt='logo' src={logo} className='logo'/>
      	</Menu.Item>
      </Menu>
      <PageComponent/>
    </div>
  );
}

export default App;
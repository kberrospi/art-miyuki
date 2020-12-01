import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Cards } from '../components/Cards';
import { Aretes } from '../components/catalogue/Aretes';
import { Diademas } from '../components/catalogue/Diademas';
import { Pulseras } from '../components/catalogue/Pulseras';
import { Contact } from '../components/Contact';
import { Evidences } from '../components/Evidences';
import { Navbar } from '../ui/Navbar';

export const AppRoutes = () => {
  return (
    
    < Router>
      <Navbar / >
      <div>
        <Switch>
          <Route path='/contact' component = { Contact } />  
          <Route path='/aretes' component ={ Aretes } />
          <Route path='/pulseras' component = { Pulseras } />
          <Route path='/diademas' component = { Diademas } />
          <Route path='/evidences' component = { Evidences } />
          <Route path='/' component = { Cards } />
        </Switch>
      </div>
    </Router>
    
  )
}

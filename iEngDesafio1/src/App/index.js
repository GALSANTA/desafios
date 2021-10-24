import React from 'react';
import Building from '../components/Building';
import Window from '../components/Window';
import { LightContext } from '../providers/LightContext';
import City from '../components/City';
import './style.css';

function App() {

    return (
        <City>
            <LightContext>
               <Building windows="12"/>
            </LightContext>
        </City>
    )
}

export default App;

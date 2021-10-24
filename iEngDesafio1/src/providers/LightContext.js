import React, { createContext, useState } from 'react';
import ButtonSwitch from '../components/ButtonSwitch';

export const Context = createContext();

export const LightContext = (props) => {

    const [allLights, setAllLights] = useState(true);

    function handleChangeAllLights() {
        allLights ? setAllLights(false) : setAllLights(true);
    }

    return (
        <>
            <div className="col s10 m10 l10">
                <Context.Provider value={allLights}>
                    {props.children}
                </Context.Provider>
            </div>
            <div className="col s2 m2 l2">
                <ButtonSwitch onClick={handleChangeAllLights}/>
            </div>
        </>
    )
}
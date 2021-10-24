import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/global.css';

import Main from '../pages/Main';
import RepositoryPage from '../pages/RepositoryPage/RepositoryPage';


const App = () => {

  const [dados, setDados] = React.useState("");
  const [state, setState] = React.useState(false);

  function getUser(data) {

    setDados(data);
    setState(true);
  }

  return(
    <>
    {state ? <RepositoryPage user={dados}/> : <Main getUser={getUser}/> }
    </>
  )
}

export default App;

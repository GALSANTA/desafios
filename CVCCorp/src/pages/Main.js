import React from 'react';

import logo from '../assets/svg/github.svg';

import { findUser } from '../services/api';

function Main(props) {

    const [username, setUsername] = React.useState("");
    const [loading, setLoading] = React.useState();

    async function handleSubmitForm(e) {
        e.preventDefault();
        setLoading(true);
        props.getUser(await findUser(username))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <a className="d-flex justify-content-center" href="/">
                        <img className="d-inline-block align-top mt-4" src={logo} alt="github" width="60" height="60" />
                    </a>
                </div>
                <div className="col-12 d-flex justify-content-center mt-3">
                    <h1 className="text-white">
                        Procure User no GitHub 
                   </h1>
                </div>
                <div className="col-12 mt-3 d-flex justify-content-center">
                    <div className="row">
                        <blockquote className="col-12 bg-grey">
                            <form onSubmit={(e) => handleSubmitForm(e)}>
                                <div className="row d-flex justify-content-center">
                                    <div className="col col-sm-12 col-lg-10 mb-4 mt-4">
                                        <label htmlFor="user" className="form-label text-white">Username or email address</label>
                                        <input type="text" className="form-control" id="user" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    {loading ?
                                        (<button className="btn btn-success col col-sm-12 col-lg-10 mb-3" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>)
                                        :
                                        (<button type="submit" className="btn btn-success col col-sm-12 col-lg-10 mb-3">Procurar</button>)}
                                </div>
                            </form>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
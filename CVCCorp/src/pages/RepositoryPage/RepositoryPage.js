import React from 'react';
import './user.css';

import Menu from '../../containers/Menu/Menu';
import UnderLineNave from '../../containers/UnderLineNav/UnderLineNav';
import Repositories from '../../containers/Repositories/Repositories';
import User from '../../containers/User/User';
import RepositoryController from '../../containers/RepositoryController/RepositoryController';

const RepositoryPage = (props) => {

    const [currentStep, setCurrentStep] = React.useState(1);

    const underlinenavController = [{
        "titulo": "Overview",

    }, {
        "titulo": "Repositories",

    }, {
        "titulo": "Projects",

    },
    {
        "titulo": "Packages",

    }]


    return (
        <>
            <Menu user={props.user[0].data}/>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-12 col-md-3 order-md-3">
                        <User user={props.user[0].data} />
                    </div>
                    <div className="col-12 col-md-3 border-bottom order-md-1 d-none d-md-block" />
                    <div className="col-12 col-md-9 border-bottom  order-md-2">
                        <UnderLineNave repos={props.user[1].data.length} changeTab={setCurrentStep} />
                    </div>

                    <div className="col-12 col-md-9 order-sm-4 order-md-4">
                        {
                            underlinenavController[currentStep].titulo === "Overview" ? <h1>Overview</h1>
                                : underlinenavController[currentStep].titulo === "Repositories" ? (
                                    <>
                                    <RepositoryController />
                                    <Repositories repos={props.user[1]} />
                                    </>
                                )
                                    : underlinenavController[currentStep].titulo === "Projects" ? <h1>Projects</h1>
                                        : <h1>Packages</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default RepositoryPage;
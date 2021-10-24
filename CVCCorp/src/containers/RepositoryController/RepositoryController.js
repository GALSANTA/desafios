import React from 'react';
import ButtonDropDown from '../../components/ButtonDropDown/ButtonDropDown';
import Input from '../../components/Input/Input';

import { CaretDownFill } from 'react-bootstrap-icons';

const RepositoryController = () => {
    return (
        <div className="row mt-4 border-bottom-grey">
            <div className="col-6 mb-3">
                <Input className="form-control bg-grey-dark border-grey w-100 ms-3 d-none d-md-block"  placeholder="Find a repository..."/>
            </div>
            <div className="col-5 d-flex justify-content-end">
                <ButtonDropDown 
                className="me-1 button" 
                name="Type" 
                icon={<CaretDownFill />} 
                items={["Section 1","Section 2", "Section 3"]}/>
                <ButtonDropDown className="me-1 button" name="Language" icon={<CaretDownFill />}/>
                <ButtonDropDown className="me-1 button" name="Sort" icon={<CaretDownFill />}/>
            </div>
        </div>
    )
}

export default RepositoryController;
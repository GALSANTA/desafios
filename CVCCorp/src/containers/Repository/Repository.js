import React from 'react';
import './repository.css';

import { Star } from 'react-bootstrap-icons';

import Button from '../../components/Button/Button';

const Repository = (props) => {

    

    function dataAtualFormatada(data) {
        data = new Date(data);
        var dia = data.getDate().toString().padStart(2, '0');
        var mes = (data.getMonth() + 1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
        var ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    return (
        <div className="col-12 mt-3 mb-2 repository-item border-bottom-grey">
            <div className="row">
                <div className="col-9 text-grey-light ">
                    <a className="repository-link" href={props.link}>
                        <h3 className="title">{props.name}</h3>
                    </a>
                    <div>
                        <p>{props.description}</p>
                    </div>
                    <div className="f6 text-grey-light ">
                        <span className="me-4 ">
                            <span className={`${props.language} repo-language-color`} />
                            <span className="ms-1 ">{props.language}</span>
                        </span>
                        Updated at {dataAtualFormatada(props.updated)}
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <Button className="d-flex button" name="star" unName="Unstar" icon={<Star className="mb-1" />}/>
                </div>
            </div>
        </div>
    )
}

export default Repository;
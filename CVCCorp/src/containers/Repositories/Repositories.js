import React from 'react';
import Repository from '../Repository/Repository';

const Repositories = (props) => {
    return (
        <>
            <div className="row">
                {
                    props.repos.data.map(e => 
                    <Repository name={e.name} 
                    description={e.description} 
                    updated={e.updated_at} 
                    language={e.language} 
                    link={e.html_url}/>)
                }
            </div>
        </>
    )
}

export default Repositories;

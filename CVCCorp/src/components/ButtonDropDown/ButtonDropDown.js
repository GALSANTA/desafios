import React from 'react';

const ButtonDropDown = (props) => {

    const [state, setState] = React.useState(false);

    return (
        <>
            <button className={props.className} onClick={() => setState(!state)}>

                <span>{props.name}</span>
                {
                    props.icon ? (<span className="ms-1">{props.icon}</span>) : <></>
                }
            </button>
            {
                props.items ? state ? (<div className="row bg-grey text-white" width="200px" height="400px" style={{
                    position: "absolute",
                    zIndex: 5,
                    marginTop: "40px"
                }}>{
                        props.items.map(e => <div className="col-12">{e}</div>)
                    }</div>) : <></> : <></>
            }
        </>
    )
}

export default ButtonDropDown;
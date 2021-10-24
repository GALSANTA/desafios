import React from 'react';
import './user.css';

import { Building, Envelope, GeoAltFill, Link45deg, PeopleFill } from 'react-bootstrap-icons';
import Button from '../../components/Button/Button';

const User = (props) => {

    const profile = [
        { "name": props.user.company, "component": <Building /> },
        { "name": props.user.location, "component": <GeoAltFill /> },
        { "name": props.user.blog, "component": <Link45deg /> },
        { "name": props.user.email, "component": <Envelope /> },
    ];

    return (
        <>
            <div className="row ">
                <div className="col-12" style={{ borderBottom: "1px solid" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-3 col-sm-3 col-md-12">
                                <a href={props.html_url}>
                                    <img className="rounded-circle position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0 img-fluid img-avatar-fluid" src={props.user.avatar_url} alt="" width="300" />
                                </a>
                            </div>
                            <div className="col col-xs-3 col-sm-6 col-md-12">
                                <h1 className="title-name text-grey-light mt-3">{props.user.name}</h1>
                                <span className="title-login text-grey-dark">{props.user.login}</span>
                            </div>
                        </div>
                        <div className="row mt-4">
                        <Button className="button" name="Follow" unName="Unfollow"/>
                        </div>
                        <div className="row bio text-grey-light mt-3 mb-3">{props.user.bio}</div>
                        <div className="row mt-3 d-flex justify-content-start">
                            <div className="d-flex text-grey-light">
                                <div className="me-2">
                                    <a className="d-flex justify-content-evenly underline_none text-grey-light" href={props.followers_url}>
                                        <span className="me-1 text-grey-dark" ><PeopleFill /></span>
                                        <span className="me-1">{props.user.followers}</span>
                                        <span className="text-grey-dark">followers</span>
                                    </a>
                                </div>
                            .
                            <div className="me-2">
                                    <a className="d-flex ms-2 me-1 justify-content-between underline_none text-grey-light" href={props.following_url}>
                                        {props.user.following}
                                        <span className="ms-1 text-grey-dark">following</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <ul className="text-grey-light profile">
                                {
                                    profile.map(e => e.name ? (
                                    <li className="row mt-1">
                                    <span className="col-1">{e.component}</span>
                                    <span className="col-10">{e.name}</span>
                                </li>): <></>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="container">
                        <h2 className="text-grey-light mb-2 h4">Achievements</h2>
                        <div className="position-relative"><a href="https://archiveprogram.github.com/" className="d-inline-block">
                            <img alt="Arctic Code Vault Contributor" width="64px" src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;


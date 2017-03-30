// довідники
import React from 'react';

import NavLink from './NavLink';

function Directory(props) {
    return (
        <section className="content books">
            <div className="mdl-tabs">
                <div className="mdl-tabs__tab-bar">
                    <NavLink to="/directory" className="mdl-tabs__tab" onlyActiveOnIndex={true}>About</NavLink>
                    <NavLink to="/directory/groups" className="mdl-tabs__tab">Groups</NavLink>
                    <NavLink to="/directory/departments" className="mdl-tabs__tab">Departments</NavLink>
                    <NavLink to="/directory/subjects" className="mdl-tabs__tab">Subjects</NavLink>
                    <NavLink to="/directory/faculties" className="mdl-tabs__tab">Faculties</NavLink>
                </div>

                <div className="mdl-tabs__panel">
                    {props.children}
                </div>
            </div>
        </section>
    )}

export default Directory;
import React from 'react';

import NavLink from './components/NavLink';

class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Schedule</span>
                        <span className="mdl-layout-spacer"></span>
                        <nav className="mdl-navigation">
                            <NavLink to="/" className="mdl-navigation__link" onlyActiveOnIndex={true}>Home</NavLink>
                            <NavLink to="/timetable" className="mdl-navigation__link">Timetable</NavLink>
                            <NavLink to="/directory" className="mdl-navigation__link">Directory</NavLink>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default App;
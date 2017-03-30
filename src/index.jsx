import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import books from './data/books';

import App from './App';

import Home from './components/Home';
import NotFound from './components/NotFound';

import Timetable from './components/Timetable';
import Directory from './components/Directory';
import Groups from './components/Groups';
import Departments from './components/Departments';
import AboutDirectory from './components/AboutDirectory';
import Subjects from './components/Subjects';
import Faculties from './components/Faculties';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="timetable" component={Timetable}/>
            <Route path="directory" component={Directory}>
                <IndexRoute component={AboutDirectory}/>
                <Route path="groups" component={Groups}/>
                <Route path="departments" component={Departments}/>
                <Route path="subjects" component={Subjects}/>
                <Route path="faculties" component={Faculties}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,

    document.getElementById('root'));
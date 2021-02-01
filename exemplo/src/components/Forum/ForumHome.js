import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ForumCategories from './ForumCategories';
import ForumTopic from './ForumTopics';
import ForumDiscussion from './ForumDiscussion';


const ForumHome = props => (
    <Switch>

        <Route path="/forum/categories" component={ForumCategories}/>
        <Route path="/forum/topics/:catid" component={ForumTopic} />
        <Route path="/forum/discussion/:catid/:topid" component={ForumDiscussion}/>

        <Redirect to="/forum/categories"/>

    </Switch>
)

export default ForumHome;



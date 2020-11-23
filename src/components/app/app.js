import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from  '../post-list/post-list';
import PostAddFrom from '../post-add-form/post-add-from';

import './app.css';

const App = () =>{
    return (
        <div className = "app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>    
            <PostList/>
            <PostAddFrom/>
        </div>
    )
}

export default App;
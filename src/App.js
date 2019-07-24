import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import Product from './containers/product'
import Counter from './containers/counter';
import Home from './containers/Home';
import Select from './containers/select';
import Profile from './containers/profile';
import Posts from './containers/posts';
import PostItem from './containers/post_item';
import Shop from './containers/shop';
import Sort from './containers/sort';
import Test from './containers/letconst';
import TabsExample from './containers/TabsExample';
import SampleTest from './containers/detector';
import Finder from './containers/finder';
import Tabs from './containers/tabs';
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 34px 35px;
    border-bottom: 1px solid #eee;
    a {
    background-color: #525050bd;
    text-decoration: none;
    color: #fff;
    width: 100px;
    text-align: center;
    padding: 7px;
    border-radius: 8px;
    font-weight: bold;
    }
`;

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header>
                    <NavLink
                        to="/counter"
                        activeStyle={{color: '#101010'}}
                        activeClassName="selected"
                    >
                        Counter</NavLink><br/>
                    <NavLink
                        to="/posts"
                        activeStyle={{color: '#101010'}}
                        activeClassName="selected"
                    >
                        Posts</NavLink><br/>
                    <NavLink
                        to="/shop"
                        activeStyle={{color: '#101010'}}
                        activeClassName="selected"
                    >
                        Shop</NavLink><br/>
                    <Link to={{
                        pathname: '/select',
                        hash: '#selectbox',
                        search: '?select=true'
                    }}>select</Link><br/>
                </Header>
                <Switch>
                    <Route exact path="/posts/:id/:username" component={PostItem}/>
                    <Route exact path="/counter" component={Counter}/>
                    <Route exact path="/tabs" component={TabsExample}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/product" component={Product}/>
                    <Route exact path="/select" component={Select}/>
                    <Route exact path="/sort" component={Sort}/>
                    <Route exact path="/test" component={Test}/>
                    <Route exact path="/tabs" component={Tabs}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/finder" component={Finder}/>
                    <Route exact path="/popup" component={SampleTest}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact render={() => <h3>oops 404</h3>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;

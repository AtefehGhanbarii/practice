import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from './redux/create';
import { Provider } from 'react-redux';
import Product from './containers/product'
import Counter from './containers/counter';
import Home from './containers/Home';
import ReduxShop from './containers/reduxShop';
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
import TodoList from './containers/TodoList';
import ReduxCounter from './containers/reduxCounter';
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

const { store, persistor } = createStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <div>
                        <Header>
                            <NavLink
                                to="/posts"
                                activeStyle={{ color: '#101010' }}
                                activeClassName="selected"
                            >
                                Posts</NavLink><br/>
                            <Link to={{
                                pathname: '/select',
                                hash: '#selectbox',
                                search: '?select=true'
                            }}>select</Link><br/>
                            <Link to={{
                                pathname: '/tabs',
                                hash: '#selectbox',
                                search: '?select=true'
                            }}>Tabs</Link><br/>
                            <Link to={{
                                pathname: '/todolist',
                                hash: '#selectbox',
                                search: '?select=true'
                            }}>To Do List</Link><br/>
                            <Link to={{
                                pathname: '/reduxcounter',
                                hash: '#selectbox',
                                search: '?select=true'
                            }}>Redux Counter</Link><br/>
                            <Link to={{
                                pathname: '/reduxshop',
                                hash: '#selectbox',
                                search: '?select=true'
                            }}>Redux Shop</Link><br/>
                            <NavLink
                                to="/shop"
                                activeStyle={{ color: '#101010' }}
                                activeClassName="selected"
                            >
                                Shop</NavLink><br/>
                        </Header>
                        <Switch>
                            <Route exact path="/posts/:id/:username" component={PostItem}/>
                            <Route exact path="/posts" component={Posts}/>
                            <Route exact path="/counter" component={Counter}/>
                            <Route exact path="/tabs" component={TabsExample}/>
                            <Route exact path="/shop" component={Shop}/>
                            <Route exact path="/product" component={Product}/>
                            <Route exact path="/select" component={Select}/>
                            <Route exact path="/sort" component={Sort}/>
                            <Route exact path="/test" component={Test}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/finder" component={Finder}/>
                            <Route exact path="/popup" component={SampleTest}/>
                            <Route exact path="/todolist" component={TodoList}/>
                            <Route exact path="/reduxcounter" component={ReduxCounter}/>
                            <Route exact path="/reduxshop" component={ReduxShop}/>
                            <Route exact path="/" component={Home}/>
                            <Route exact render={() => <h3>oops 404</h3>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};


export default App;

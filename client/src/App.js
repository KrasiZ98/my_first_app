
import './App.css';

import { Login } from './components/login-page/Login';
import { Register } from './components/register-page/Register';
import { Create } from './components/create-page/Create';
import { Edit } from './components/edit-page/Edit';
import { Details } from './components/details-page/Details';
import { Navigation } from './components/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home-page/Home';
import { Catalog } from './components/catalog-page/Catalog';
import { Footer } from './components/footer/Footer';


import AuthContextProvider from './context/AuthContext';
import AlbumContextProvider from './context/AlbumContext';
import { Logout } from './logout/Logout';
import { Delete } from './components/delete/Delete';
import { RouteGards } from './util/RouteGards';
import { Search } from './components/search-page/Search';

function App() {
    return (
        <div className="App">

            <AuthContextProvider >
                <Navigation />

                <AlbumContextProvider>
                    <Routes >
                        <Route path='/' element={<Home />} ></Route>
                        <Route path='/login' element={<Login />} ></Route>
                        <Route path='/register' element={<Register />} ></Route>
                        <Route path='/create' element={<RouteGards> <Create /> </RouteGards> } ></Route>
                        <Route path='/catalog' element={<Catalog />} ></Route>
                        <Route path='/search' element={<Search />} ></Route>
                        <Route path='/details/:id' element={<Details />} ></Route>
                        <Route path='/delete/:id' element={ <RouteGards> <Delete /> </RouteGards>} ></Route>
                        <Route path='/edit/:id' element={<RouteGards > <Edit /> </RouteGards> } ></Route>
                        <Route path='/logout' element={<Logout />} ></Route>
                    </Routes>
                </AlbumContextProvider>

            </AuthContextProvider>
            <Footer />
        </div>
    );
}

export default App;

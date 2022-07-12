import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
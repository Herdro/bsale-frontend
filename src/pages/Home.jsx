import React from 'react'
import '../styles/global.scss'
import Layout from '../containers/Layout';
import Header from '../components/Header';
import CardContainer from '../containers/CardContainer';

const Home = () => {
    return (
        <Layout>
            <Header />
            <CardContainer />
        </Layout>
    );
}

export default Home;
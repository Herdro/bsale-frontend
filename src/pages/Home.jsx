import React from 'react'
import '../styles/global.scss'
import Layout from '../containers/Layout';
import Header from '../components/Header';
import CardContainer from '../containers/CardContainer';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Layout>
            <Header />
            <CardContainer />
            <Footer />
        </Layout>
    );
}

export default Home;
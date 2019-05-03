import React from "react";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { configureFakeBackend } from './_helpers';

configureFakeBackend();

class Index extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Header />
                <Footer />
            </Provider>
        );
    }
}

export default Index;
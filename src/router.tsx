import {createHashRouter} from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import Products from './pages/Products';
import Team from './pages/Team';
import Header from './components/Header';
import {Layout} from 'antd';

const Route = ({Component}: any) => {
    return (
        <Layout
            style={{
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Component />
        </Layout>
    );
};

const router = createHashRouter([
    {
        path: '/',
        element: <Route Component={Home} />,
    },
    {
        path: '/products',
        element: <Route Component={Products} />,
    },
    {
        path: '/team',
        element: <Route Component={Team} />,
    },
]);

export default router;

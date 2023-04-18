import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import router from './router';
import {ConfigProvider, theme} from 'antd';
import 'antd/dist/reset.css';
import './cursor.css';
import './index.css';
import CursorProvider from './CursorProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: '#E5A7FC',
                    colorBgBase: '#29002d',
                    fontFamily: 'Cooper, cursive',
                },
            }}
        >
            <CursorProvider>
                <RouterProvider router={router} />
            </CursorProvider>
        </ConfigProvider>
    </React.StrictMode>,
);

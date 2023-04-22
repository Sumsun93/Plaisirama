import React from 'react';
import {Grid, Image, Layout, Menu, theme} from 'antd';
import logo from '../assets/Logo_Plaisirama.svg';
import logoSmall from '../assets/Icon_Plaisirama.svg';
import {useLocation, useNavigate} from 'react-router-dom';
import {CursorContext} from '../CursorProvider';
import styled from 'styled-components';

const Header = () => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const navigate = useNavigate();
    const location = useLocation();
    const {onCursor} = React.useContext(CursorContext);
    const {md} = Grid.useBreakpoint();

    return (
        <Layout.Header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'transparent',
                width: '100%',
                padding: '0',
                height: 'auto',
            }}
        >
            <Logo
                theme={theme}
                src={md ? logo : logoSmall}
                preview={false}
                style={{
                    cursor: 'pointer',
                    padding: '20px',
                    maxWidth: md ? '500px' : '200px',
                }}
                onClick={() => {
                    navigate('/');
                }}
                onMouseEnter={() => {
                    onCursor('pointer');
                }}
                onMouseLeave={() => {
                    onCursor(false);
                }}
            />

            <Menu
                theme="dark"
                mode="horizontal"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}
            >
                <Item
                    theme={theme}
                    key="1"
                    selected={location.pathname === '/products'}
                    style={{
                        color: colorPrimary,
                        backgroundColor: 'transparent',
                        fontSize: md ? '2.5em' : '1em',
                    }}
                    onClick={() => {
                        navigate('/products');
                    }}
                    onMouseEnter={() => {
                        onCursor('pointer');
                    }}
                    onMouseLeave={() => {
                        onCursor(false);
                    }}
                >
                    Nos Produits
                </Item>
                <Item
                    theme={theme}
                    key="2"
                    selected={location.pathname === '/team'}
                    style={{
                        color: colorPrimary,
                        backgroundColor: 'transparent',
                        fontSize: md ? '2.5em' : '1em',
                    }}
                    onClick={() => {
                        navigate('/team');
                    }}
                    onMouseEnter={() => {
                        onCursor('pointer');
                    }}
                    onMouseLeave={() => {
                        onCursor(false);
                    }}
                >
                    L'équipe
                </Item>
                <Item
                    theme={theme}
                    key="2"
                    selected={location.pathname === '/cart'}
                    style={{
                        color: colorPrimary,
                        backgroundColor: 'transparent',
                        fontSize: md ? '2.5em' : '1em',
                        marginRight: '20px',
                    }}
                    onClick={() => {
                        navigate('/cart');
                    }}
                    onMouseEnter={() => {
                        onCursor('pointer');
                    }}
                    onMouseLeave={() => {
                        onCursor(false);
                    }}
                >
                    Panier
                </Item>
            </Menu>
        </Layout.Header>
    );
};

export default Header;

const Logo = styled(Image)`
    &:hover {
        filter: drop-shadow(0 0 1rem ${(props) => props.theme.colorPrimary});
    }
`;

const Item = styled(Menu.Item)`
    ${({selected, theme}: {selected: boolean; theme: any}) =>
        selected &&
        `
        text-shadow: 0.05em 0 #fff, -0.05em 0 #fff, 0 0.05em #fff, 0 -0.05em #fff, 0.05em 0.05em #fff, -0.05em -0.05em #fff, 0.05em -0.05em #fff, -0.05em 0.05em #fff;
        filter: drop-shadow(0 0 1rem ${theme.colorPrimary});
        
    `}

    &:hover {
        text-shadow: 0.05em 0 #fff, -0.05em 0 #fff, 0 0.05em #fff,
            0 -0.05em #fff, 0.05em 0.05em #fff, -0.05em -0.05em #fff,
            0.05em -0.05em #fff, -0.05em 0.05em #fff;
        filter: drop-shadow(0 0 1rem ${(props) => props.theme.colorPrimary});
    }
`;

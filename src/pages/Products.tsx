import {Grid, Layout, Spin, theme, Typography} from 'antd';
import {ProductType} from '../types/product';
import Product from '../components/Product';
// @ts-ignore
import SteinStore from 'stein-js-client';

import durcirama from '../assets/productImages/durcirama.png';
import lubricul from '../assets/productImages/lubricul.png';
import wrapqueue from '../assets/productImages/wrapqueue.png';
import chocabite from '../assets/productImages/chocabite.png';
import plaisiramal from '../assets/productImages/plaisiramal.png';
import styled, {keyframes} from 'styled-components';
import {useEffect, useState} from 'react';
import {useCart} from 'react-use-cart';

const Products = () => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();

    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getProducts = async () => {
        const store = new SteinStore(
            'https://api.steinhq.com/v1/storages/64426713eced9b09e9cb274b',
        );
        store.read('produits').then((res: any) => {
            const newProducts: ProductType[] = [
                {
                    id: 1,
                    image: lubricul,
                    name: '',
                    slogan: '',
                    price: 0,
                    description: '',
                    isAvailable: true,
                },
                {
                    id: 2,
                    image: wrapqueue,
                    name: '',
                    slogan: '',
                    price: 0,
                    description: '',
                    isAvailable: true,
                },
                {
                    id: 3,
                    image: plaisiramal,
                    name: '',
                    slogan: '',
                    price: 0,
                    description: '',
                    isAvailable: true,
                },
                {
                    id: 4,
                    image: chocabite,
                    name: '',
                    slogan: '',
                    price: 0,
                    description: '',
                    isAvailable: true,
                },
                {
                    id: 5,
                    image: durcirama,
                    name: '',
                    slogan: '',
                    price: 0,
                    description: '',
                    isAvailable: true,
                },
            ];

            res.forEach((product: any, index: number) => {
                newProducts[index].name = product.name;
                newProducts[index].slogan = product.slogan;
                newProducts[index].description = product.description;
                newProducts[index].price = product.price;
                newProducts[index].isAvailable = product.isAvailable === 'TRUE';
            });

            setProducts(newProducts);

            setIsLoading(false);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (md === undefined) return null;

    if (isLoading)
        return (
            <Spin
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '2em',
                }}
                size={'large'}
                tip="Chargement de votre plaisir..."
            />
        );

    return (
        <Layout.Content
            style={{
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: md ? '100px' : '50px',
            }}
        >
            <Typography.Title
                style={{
                    fontSize: md ? '6em' : '2em',
                    color: colorPrimary,
                    margin: '0 0 100px 0',
                    fontWeight: 700,
                    textAlign: 'center',
                    textShadow:
                        '.02em 0 #fff, -.02em 0 #fff, 0 .02em #fff, 0 -.02em #fff, .02em .02em #fff, -.02em -.02em #fff, .02em -.02em #fff, -.02em .02em #fff',
                    filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                    textTransform: 'uppercase',
                }}
            >
                N<BlinkingChar time={5}>o</BlinkingChar>
                tre gamme de p<BlinkingChar time={1}>r</BlinkingChar>
                oduits
            </Typography.Title>

            {products.map((product) => (
                <Product data={product} />
            ))}
        </Layout.Content>
    );
};

export default Products;

const blinking = keyframes({
    '0%': {
        opacity: 0.99,
    },
    '19.999%': {
        opacity: 0.99,
    },
    '20%': {
        opacity: 0.4,
    },
    '21.999%': {
        opacity: 0.4,
    },
    '22%': {
        opacity: 0.99,
    },
    '62.999%': {
        opacity: 0.99,
    },
    '63%': {
        opacity: 0.4,
    },
    '63.999%': {
        opacity: 0.4,
    },
    '64%': {
        opacity: 0.99,
    },
    '64.999%': {
        opacity: 0.99,
    },
    '65%': {
        opacity: 0.4,
    },
    '69.999%': {
        opacity: 0.4,
    },
});

const BlinkingChar = styled.span`
    animation: ${blinking} ${({time}: {time: number}) => time}s linear infinite;
`;

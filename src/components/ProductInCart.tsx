import {ProductType} from '../types/product';
import {Button, Col, Grid, Image, Row, theme, Typography} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import React from 'react';
import {useCart} from 'react-use-cart';
// @ts-ignore
import SteinStore from 'stein-js-client';

type Props = {
    data: any;
};

const ProductInCart = ({data}: Props) => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();
    const {addItem, inCart, getItem, updateItemQuantity, removeItem} =
        useCart();

    const addNewItem = () => {};

    const updateQuantity = (add = true) => {
        const item = getItem(data.id.toString());
        if (item) {
            updateItemQuantity(
                data.id.toString(),
                add ? item.quantity + 1 : item.quantity - 1,
            );
        }
    };

    return (
        <Row
            style={{
                width: '100%',
                marginBottom: md ? '100px' : '20px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: md ? '0 100px' : '0',
            }}
        >
            <Col>
                <Image
                    src={data.image}
                    alt={data.name}
                    style={{
                        height: md ? '100px' : '50px',
                        width: md ? '100px' : '50px',
                        borderRadius: 10,
                        margin: 'auto',
                        border: `5px solid ${colorPrimary}`,
                        filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                    }}
                />
            </Col>
            <Col
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 0,
                }}
            >
                <Typography.Title
                    level={3}
                    style={{
                        fontSize: md ? '3em' : '1em',
                        color: 'white',
                        margin: md ? '0 20px' : '0 10px',
                    }}
                >
                    {data.name}
                </Typography.Title>
                <Typography.Text
                    style={{
                        fontSize: md ? '2em' : '1em',
                        color: colorPrimary,
                        margin: md ? '0 20px' : '0 10px',
                        marginLeft: 0,
                    }}
                >
                    {data.price * getItem(data.id.toString()).quantity}$
                </Typography.Text>
            </Col>
            <Col>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        style={{
                            width: md ? '50px' : '30px',
                            height: md ? '50px' : '30px',
                            fontSize: md ? '1.5em' : '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onClick={() => updateQuantity(false)}
                    >
                        -
                    </Button>
                    <Typography.Text
                        style={{
                            fontSize: md ? '1.5em' : '1em',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: md ? '0 20px' : '0 10px',
                        }}
                    >
                        {getItem(data.id.toString()).quantity}
                    </Typography.Text>
                    <Button
                        style={{
                            width: md ? '50px' : '30px',
                            height: md ? '50px' : '30px',
                            fontSize: md ? '1.5em' : '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onClick={() => updateQuantity()}
                    >
                        +
                    </Button>

                    <Button
                        style={{
                            width: md ? '50px' : '30px',
                            height: md ? '50px' : '30px',
                            fontSize: md ? '1.5em' : '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: md ? 20 : 10,
                        }}
                        onClick={() => removeItem(data.id.toString())}
                        icon={<DeleteOutlined />}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default ProductInCart;

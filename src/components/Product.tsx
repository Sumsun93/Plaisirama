import {ProductType} from '../types/product';
import {Button, Col, Grid, Image, Row, theme, Typography} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import React from 'react';
import {useCart} from 'react-use-cart';

type Props = {
    data: ProductType;
};

const Product = ({data}: Props) => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();
    const {addItem, inCart, getItem, updateItemQuantity} = useCart();

    const addNewItem = () => {
        addItem({
            id: data.id.toString(),
            name: data.name,
            image: data.image,
            price: data.price,
        });
    };

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
                padding: md ? '0 300px' : '0 50px',
                marginBottom: '100px',
            }}
        >
            <Col sm={{span: 24}} md={{span: 4}}>
                <Image
                    src={data.image}
                    alt={data.name}
                    style={{
                        height: md ? '300px' : '200px',
                        width: md ? '300px' : '200px',
                        borderRadius: 10,
                        margin: 'auto',
                        border: `5px solid ${colorPrimary}`,
                        filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                    }}
                />
            </Col>
            <Col
                sm={{span: 24}}
                md={{span: 20}}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingLeft: md ? '100px' : '0',
                    marginTop: md ? '0' : '20px',
                }}
            >
                <Typography.Title
                    level={3}
                    style={{
                        fontSize: md ? '3em' : '2em',
                        color: colorPrimary,
                        margin: 0,
                        textShadow:
                            '.02em 0 #fff, -.02em 0 #fff, 0 .02em #fff, 0 -.02em #fff, .02em .02em #fff, -.02em -.02em #fff, .02em -.02em #fff, -.02em .02em #fff',
                        filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                    }}
                >
                    {data.name}
                </Typography.Title>
                <Typography.Title
                    level={4}
                    style={{
                        color: colorPrimary,
                        fontSize: md ? '2em' : '1em',
                        fontStyle: 'italic',
                        margin: 0,
                        marginBottom: 20,
                    }}
                >
                    {data.slogan}
                </Typography.Title>
                <Typography.Text
                    style={{
                        fontSize: md ? '1.5em' : '1em',
                        color: 'white',
                        margin: 0,
                        marginBottom: 20,
                    }}
                >
                    {data.description}
                </Typography.Text>
                {data.price && (
                    <Typography.Title
                        level={3}
                        style={{
                            fontSize: md ? '3em' : '2em',
                            color: colorPrimary,
                            margin: 0,
                            textShadow:
                                '.02em 0 #fff, -.02em 0 #fff, 0 .02em #fff, 0 -.02em #fff, .02em .02em #fff, -.02em -.02em #fff, .02em -.02em #fff, -.02em .02em #fff',
                            filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                        }}
                    >
                        {data.price} $
                    </Typography.Title>
                )}
                {data.isAvailable ? (
                    <>
                        {inCart(data.id.toString()) ? (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 20,
                                }}
                            >
                                <Button
                                    style={{
                                        fontSize: md ? '1.5em' : '1em',
                                        height: 'auto',
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
                                        margin: 0,
                                        marginLeft: 20,
                                        marginRight: 20,
                                    }}
                                >
                                    {getItem(data.id.toString()).quantity}
                                </Typography.Text>
                                <Button
                                    style={{
                                        fontSize: md ? '1.5em' : '1em',
                                        height: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onClick={() => updateQuantity()}
                                >
                                    +
                                </Button>
                            </div>
                        ) : (
                            <Button
                                style={{
                                    marginTop: 20,
                                    fontSize: md ? '1.5em' : '1em',
                                    padding: md ? '10px 50px' : '5px 25px',
                                    height: 'auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={addNewItem}
                                icon={
                                    <ShoppingCartOutlined
                                        style={{
                                            fontSize: md ? '1.5em' : '1em',
                                            marginRight: 10,
                                        }}
                                    />
                                }
                            >
                                Ajouter au panier
                            </Button>
                        )}
                    </>
                ) : (
                    <Button
                        style={{
                            marginTop: 20,
                            fontSize: md ? '1.5em' : '1em',
                            padding: md ? '10px 50px' : '5px 25px',
                            height: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        disabled
                        icon={
                            <ShoppingCartOutlined
                                style={{
                                    fontSize: md ? '1.5em' : '1em',
                                    marginRight: 10,
                                }}
                            />
                        }
                    >
                        En rupture de stock
                    </Button>
                )}
            </Col>
        </Row>
    );
};

export default Product;

import {ProductType} from '../types/product';
import {Button, Col, Grid, Image, Row, theme, Typography} from 'antd';
import React from 'react';

type Props = {
    data: ProductType;
};

const Product = ({data}: Props) => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();

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
                    }}
                >
                    {data.description}
                </Typography.Text>
                <Button
                    disabled
                    style={{
                        marginTop: 20,
                        fontSize: md ? '1.5em' : '1em',
                        padding: md ? '10px 50px' : '5px 25px',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    En rupture de stock
                </Button>
            </Col>
        </Row>
    );
};

export default Product;

import {
    Button,
    Form,
    Grid,
    Input,
    Layout,
    notification,
    theme,
    Typography,
} from 'antd';
// @ts-ignore
import SteinStore from 'stein-js-client';
import styled, {keyframes} from 'styled-components';
import {useCart} from 'react-use-cart';
import ProductInCart from '../components/ProductInCart';
import {useState} from 'react';

const Cart = () => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();
    const {isEmpty, items, cartTotal, emptyCart} = useCart();
    const [api, contextHolder] = notification.useNotification();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onFinish = (values: any) => {
        setIsLoading(true);
        const store = new SteinStore(
            'https://api.steinhq.com/v1/storages/64426713eced9b09e9cb274b',
        );
        store
            .append('commandes', [
                {
                    name: `${values.firstname} ${values.lastname}`,
                    number: values.phone,
                    products: `${items.map((item: any) => {
                        return ` ${item.name} x${item.quantity}`;
                    })}`,
                    price: cartTotal,
                },
            ])
            .then((res: any) => {
                emptyCart();
                api.success({
                    message: 'Commande effectuée',
                    description: 'Votre commande a bien été prise en compte',
                });
                setIsLoading(false);
            })
            .catch((err: any) => {
                console.log(err);
                api.error({
                    message: 'Erreur',
                    description: 'Une erreur est survenue',
                });
                setIsLoading(false);
            });
    };

    if (md === undefined) return null;

    if (isEmpty) {
        return (
            <>
                {contextHolder}
                <Layout.Content
                    style={{
                        height: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: md ? '100px' : '50px',
                    }}
                >
                    <Typography.Title
                        style={{
                            fontSize: md ? '6em' : '2em',
                            color: colorPrimary,
                            margin: md ? '0 0 100px 0' : '0 0 50px 0',
                            fontWeight: 700,
                            textAlign: 'center',
                            textShadow:
                                '.02em 0 #fff, -.02em 0 #fff, 0 .02em #fff, 0 -.02em #fff, .02em .02em #fff, -.02em -.02em #fff, .02em -.02em #fff, -.02em .02em #fff',
                            filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                            textTransform: 'uppercase',
                        }}
                    >
                        Votre panier est vide
                    </Typography.Title>
                </Layout.Content>
            </>
        );
    }

    return (
        <>
            {contextHolder}
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
                        margin: md ? '0 0 100px 0' : '0 0 50px 0',
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow:
                            '.02em 0 #fff, -.02em 0 #fff, 0 .02em #fff, 0 -.02em #fff, .02em .02em #fff, -.02em -.02em #fff, .02em -.02em #fff, -.02em .02em #fff',
                        filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                        textTransform: 'uppercase',
                    }}
                >
                    V<BlinkingChar time={5}>o</BlinkingChar>
                    tre pa<BlinkingChar time={1}>n</BlinkingChar>
                    ier
                </Typography.Title>

                {items.map((product) => (
                    <ProductInCart data={product} />
                ))}

                <Form
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onFinish={onFinish}
                >
                    <Typography.Title
                        style={{
                            fontSize: md ? '4em' : '2em',
                            color: colorPrimary,
                            margin: 0,
                            marginTop: '50px',
                            textAlign: 'center',
                        }}
                    >
                        Total : {cartTotal} $
                    </Typography.Title>

                    <Typography.Text
                        style={{
                            fontSize: md ? '1.5em' : '1em',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        (Le paiement se fera à la livraison)
                    </Typography.Text>

                    <Typography.Title
                        style={{
                            fontSize: md ? '2em' : '1em',
                            color: colorPrimary,
                            textAlign: 'center',
                        }}
                    >
                        Veuillez entrer vos coordonnées
                    </Typography.Title>

                    <Form.Item
                        label="Prénom"
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez entrer votre prénom',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Nom"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Veuillez entrer votre nom',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Numéro de téléphone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Veuillez entrer votre numéro de téléphone',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            loading={isLoading}
                            type="primary"
                            htmlType="submit"
                        >
                            Valider la commande
                        </Button>
                    </Form.Item>
                </Form>
            </Layout.Content>
        </>
    );
};

export default Cart;

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

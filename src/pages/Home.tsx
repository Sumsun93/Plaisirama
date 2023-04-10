import {Image, Layout, Typography} from 'antd';
import logo from '../assets/Logo_Plaisirama.svg';
import styled, {keyframes} from 'styled-components';

const Home = () => {
    return (
        <Layout
            style={{
                width: '100%',
                height: '100vh',
            }}
        >
            <Layout.Content
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    src={logo}
                    style={{
                        width: '1000px',
                        marginBottom: '200px',
                        filter: 'drop-shadow(0px 0px 2px #FFD5FF) drop-shadow(0px 0px 2px #FFD5FF) drop-shadow(0px 0px 4px #FFD5FF) drop-shadow(0px 0px 3px #D42CCA) drop-shadow(0px 0px 4px #D42CCA) drop-shadow(0px 0px 15px) drop-shadow(0px 0px 2px) drop-shadow(0vw 0px 2px #D42CCA) drop-shadow(0vw 0px 200px #D42CCA)',
                    }}
                    preview={false}
                />

                <Typography.Title
                    level={2}
                    style={{
                        color: '#e5a6fd',
                        fontSize: '130px',
                        fontWeight: 400,
                        letterSpacing: '10px',
                        textShadow:
                            '1px 0px 4px #FFD5FF, 2px 0px 4px #FFD5FF, 3px 0px 4px #FFD5FF, 2px 0px 3px #D42CCA, 2px 3px 15px #D42CCA, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #D42CCA,40px 0vw 200px #D42CCA',
                    }}
                >
                    P<BlinkingChar time={3}>R</BlinkingChar>
                    OCH
                    <BlinkingChar time={2}>A</BlinkingChar>
                    INEM
                    <BlinkingChar time={5}>E</BlinkingChar>
                    NT
                </Typography.Title>
            </Layout.Content>
        </Layout>
    );
};

export default Home;

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

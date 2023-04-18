import {Col, Grid, Layout, Row, theme, Typography} from 'antd';
import ReactPlayer from 'react-player';
import styled, {keyframes} from 'styled-components';
import pub from '../assets/pub.mp4';
import TDC from '../assets/TDC.svg';
import thumbnailPub from '../assets/thumbnail-pub.jpeg';

const Home = () => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md, xl, xxl} = Grid.useBreakpoint();

    if (md === undefined) return null;

    return (
        <Layout.Content
            style={{
                height: '100%',
            }}
        >
            <Row
                justify="center"
                align="middle"
                style={{
                    height: '100%',
                    paddingTop: xxl ? '300px' : '50px',
                }}
            >
                <Col
                    sm={{span: 24}}
                    md={{span: 24}}
                    lg={{span: 24}}
                    xl={{span: 24}}
                    xxl={{span: 12}}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: xxl ? 'flex-start' : 'center',
                        padding: xl ? '0 100px' : '0',
                    }}
                >
                    <Typography.Title
                        style={{
                            fontSize: md ? '4em' : '2em',
                            color: colorPrimary,
                            margin: 0,
                            textAlign: xxl ? 'left' : 'center',
                        }}
                    >
                        Le plaisir partout,
                        <br />
                        même en se trompant
                    </Typography.Title>
                    <Typography.Title
                        style={{
                            fontSize: md ? '7em' : '4em',
                            margin: 0,
                            color: colorPrimary,
                            textShadow:
                                '.02em 0 #fff, -.02em 0 #fff, 0 .02em #fff, 0 -.02em #fff, .02em .02em #fff, -.02em -.02em #fff, .02em -.02em #fff, -.02em .02em #fff',
                            filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                        }}
                    >
                        D<BlinkingChar time={3}>E </BlinkingChar>
                        TR
                        <BlinkingChar time={5}>
                            <img
                                src={TDC}
                                alt="TDC"
                                style={{
                                    height: '1em',
                                    width: '1em',
                                    transform: 'translateY(-.1em)',
                                }}
                            />
                        </BlinkingChar>
                        <BlinkingChar time={2}>U</BlinkingChar>S
                    </Typography.Title>
                </Col>

                <Col
                    sm={{span: 24}}
                    md={{span: 24}}
                    lg={{span: 24}}
                    xl={{span: 24}}
                    xxl={{span: 12}}
                    style={{
                        padding: xl ? '0 100px' : '0',
                    }}
                >
                    <ReactPlayer
                        url={pub}
                        light={
                            <img
                                src={thumbnailPub}
                                alt="pub"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            />
                        }
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: 20,
                            overflow: 'hidden',
                            border: '5px solid white',
                            filter: `drop-shadow(0 0 0.75rem ${colorPrimary})`,
                        }}
                        width="100%"
                        height="100%"
                        controls
                        playing
                        volume={0.1}
                        config={{
                            file: {
                                attributes: {
                                    poster: thumbnailPub,
                                },
                            },
                        }}
                    />
                </Col>
            </Row>
        </Layout.Content>
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

import {Col, Grid, Layout, Row, theme, Typography} from 'antd';
import styled, {keyframes} from 'styled-components';

const Team = () => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();

    if (md === undefined) return null;

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
                    fontSize: md ? '4em' : '2em',
                    color: colorPrimary,
                    margin: 0,
                    textAlign: 'center',
                }}
            >
                Page en construcfion
            </Typography.Title>
        </Layout.Content>
    );
};

export default Team;

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

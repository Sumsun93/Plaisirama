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
            <Row>
                <Col span={12}>
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
                        L'aventure Plaisirama
                    </Typography.Title>
                    <Typography.Text>
                        <Typography.Paragraph>
                            L’aventure plaisirama commence dans les années 1980.
                            Quand Hubert Barton, alors acteur porno de renommée
                            internationale décide de lancer sa propre boîte de
                            production de contenu pornographique à Fort Myer en
                            Floride.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            Très vite grâce à un style trash assumé il arrive a
                            se faire une place parmi les plus grands.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            Dans les années 2000, avec l'arrivée d'internet,
                            l'entreprise décide de digitaliser son contenu et
                            mise tout sur sa nouvelle plateforme VOD en ligne.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            En 2008 l’entreprise décide de conquérir de nouveaux
                            marché, Plaisirama lance une gamme de produit liée
                            au sexe: des sextoys, des préservatifs, du viagra
                            ect….
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            Suite au développement de cette nouvelle activité,
                            Plaisirama déplace ses locaux et son nouveau centre
                            de production a San Andreas.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            Actuellement les activités de Plaisirama son gérée
                            par la Famille Barton, les frères Arthur, Terry et
                            Thomas s'occupent de l’ensemble des productions de
                            la société.
                        </Typography.Paragraph>
                    </Typography.Text>
                </Col>
                <Col
                    span={12}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: colorPrimary,
                            width: '300px',
                            height: '300px',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}
                    />
                    <Typography.Title
                        style={{
                            fontSize: md ? '2em' : '1em',
                            color: 'white',
                            textAlign: 'center',
                            margin: '0',
                            textTransform: 'uppercase',
                        }}
                    >
                        Hubert Barton
                    </Typography.Title>
                    <Typography.Text>
                        Directeur des Expériences Intimes
                    </Typography.Text>
                </Col>
            </Row>
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

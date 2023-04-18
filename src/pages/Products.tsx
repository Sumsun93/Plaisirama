import {Grid, Layout, theme, Typography} from 'antd';
import {ProductType} from '../types/product';
import Product from '../components/Product';

import durcirama from '../assets/productImages/durcirama.png';
import lubricul from '../assets/productImages/lubricul.png';
import wrapqueue from '../assets/productImages/wrapqueue.png';
import chocabite from '../assets/productImages/chocabite.png';
import plaisiramal from '../assets/productImages/plaisiramal.png';
import styled, {keyframes} from 'styled-components';

const Products = () => {
    const {
        token: {colorPrimary},
    } = theme.useToken();
    const {md} = Grid.useBreakpoint();

    const products: ProductType[] = [
        {
            image: lubricul,
            name: 'Lubricul',
            slogan: 'Glisser comme un pro, sans jamais dire «Oups!»',
            description:
                "Lubricul, le lubrifiant qui glisse entre vos doigts comme une perle de rosée sur une feuille de nénuphar ! Avec son pouvoir de glisse époustouflant, il rendra vos moments intimes aussi fluides qu'une danse de pingouins sur la banquise. Dites adieu aux frictions gênantes et bonjour au plaisir sans limites avec Lubricul ! En plus il est 100% compatible avec nos produits WrapQueue et PlaisiraMal !",
        },
        {
            image: wrapqueue,
            name: 'WrapQueue',
            slogan: 'Enfourne le, manque juste la sauce',
            description:
                "Protégez votre queue avec WrapQueue, le préservatif qui ne se défile jamais ! Avec son design innovant et sa résistance exceptionnelle, WrapQueue est votre meilleur allié pour des moments intimes en toute sécurité. Avec WrapQueue, enfilez-le et c'est parti pour la queue-leu-leu !",
        },
        {
            image: plaisiramal,
            name: 'PlaisiraMal',
            slogan: 'Si tu as mal, c’est l’anal',
            description:
                'Découvrez "PlaisiraMal", le gode osé qui vous fera grimper au septième ciel ! Parfait pour les aventuriers du plaisir, sa texture veinée et sa forme ergonomique vous garantissent des sensations inoubliables. Osez l\'extase avec PlaisiraMal et préparez-vous à hurler...de bonheur ! Soyez audacieux, soyez coquin, soyez PlaisiraMal !',
        },
        {
            image: chocabite,
            name: 'Chocabite',
            slogan: 'C’est fort en grumeaux',
            description:
                "Vous en avez l'eau à la bouche ? Alors préparez-vous à croquer dans nos Chocabites, les biscuits érotiques qui vous feront rougir de plaisir ! Leur forme phallique et leur chocolat dégoulinant sont conçus pour satisfaire vos désirs les plus ardents et titiller votre imagination.",
        },
        {
            image: durcirama,
            name: 'Durcirama',
            slogan: 'Tout Plaisirama en toi',
            description:
                "Marre de flancher au moment crucial ? Envie de monter sur le ring et de tenir jusqu'à la fin du round ? Avec Durcirama, devenez le champion de l'endurance sexuelle ! Plus besoin de prier pour durer, laissez notre pilule vous tenir la barre.",
        },
    ];

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

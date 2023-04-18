import React, {useEffect, useState} from 'react';
import cursorImg from './assets/cursor.png';
import cursorHoverImg from './assets/cursorHover.png';
import styled, {keyframes} from 'styled-components';

type CursorContextType = {
    onCursor: (cursor: false | string) => void;
};

export const CursorContext = React.createContext<CursorContextType>({
    onCursor: () => {},
});

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left'];

const CursorProvider = ({children}: any) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [cursor, setCursor] = useState<boolean | string>(false);

    const onMouseMove = (event: any) => {
        const {pageX: x, pageY: y} = event;
        setMousePosition({x, y});
    };

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    });

    const {x, y} = mousePosition;

    const onCursor = (cursorType: string | false) => {
        cursorType =
            (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
        setCursor(cursorType);
    };

    return (
        <CursorContext.Provider value={{onCursor}}>
            <Image
                src={cursor ? cursorHoverImg : cursorImg}
                alt="cursor"
                style={{
                    top: y,
                    left: x,
                    width: cursor ? '50px' : '40px',
                }}
            />
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;

const lgbtDropShadow = keyframes`
    0% {
            filter: drop-shadow(0 0 1rem #ff0000);
    }
    25% {
            filter: drop-shadow(0 0 1rem #0000ff);
    }
    50% {
            filter: drop-shadow(0 0 1rem #ff7f00);
    }
    75% {
            filter: drop-shadow(0 0 1rem #ee82ee);
    }
    100% {
            filter: drop-shadow(0 0 1rem #ff0000);
    }
`;

const Image = styled.img`
    position: absolute;
    z-index: 9999;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: width 0.2s ease;
    animation: ${lgbtDropShadow} 2s infinite;
`;

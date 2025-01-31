import React from 'react';
import styled from 'styled-components';

export interface GridProps {
    container?: boolean;
    spacing?: number;
    size?: number;
    children: React.ReactNode;
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div<{ size: number; spacing: number }>`
    flex: 0 0 ${(props) => (props.size / 12) * 100}%;
    max-width: ${(props) => (props.size / 12) * 100}%;
    padding: ${(props) => props.spacing / 2}px;
    box-sizing: border-box;
`;
const ContainerContext = React.createContext<number>(0);

const useContainerSpacing = () => {
    return React.useContext(ContainerContext);
};
export const Grid: React.FC<GridProps> = ({ container, spacing = 0, size = 12, children }) => {
    
    const containerSpacing = useContainerSpacing();
    
    if (container) {
        if (spacing) {
            return (
            <ContainerContext.Provider value={spacing}>
                <Container>{children}</Container>
            </ContainerContext.Provider>
            );
        }
        return <Container>{children}</Container>;
    }

    return (
        <ContainerContext.Provider value={spacing}>
            <Item size={size} spacing={containerSpacing}>
                {children}
            </Item>
        </ContainerContext.Provider>
    );
};
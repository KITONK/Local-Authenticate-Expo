import React from 'react';
import styled from 'styled-components/native';

interface Props {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
    return (
        <Wrapper
            onPress={onClick}
        >
            <Text>{text}</Text>
        </Wrapper>
    );
};

const Wrapper = styled.TouchableOpacity`
    width: 100%;
    background-color: #0893fc;
    padding: 10px;
    border-radius: 5px;
`;

const Text = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

export default Button;
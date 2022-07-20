import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Button from "../../components/Button/Button";

interface Props {
    onAuthenticate: () => void;
}

const AuthScreen = ({ onAuthenticate }: Props) => {
    return (
        <View>
            <Welcome>Welcome</Welcome>
            <Description>Please click on the button to go to the app</Description>
            <Button 
                text="Login" 
                onClick={onAuthenticate}
            />
        </View>
    );
};

const Welcome = styled.Text`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
`;

const Description = styled.Text`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
`;

export default AuthScreen;
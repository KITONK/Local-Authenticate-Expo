import React from 'react';
import styled from 'styled-components/native';

import Button from '../../components/Button/Button';

interface Props {
    setIsAuthenticated: any;
}

const HomeScreen = ({ setIsAuthenticated }: Props) => {
    return (
        <Wrapper>
            <Title>Home Screen</Title>
            <Description>Well met!</Description>
            <ButonField>
                <Button 
                    text="Log out"
                    onClick={() => setIsAuthenticated(false)}
                />
            </ButonField>
        </Wrapper>
    );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;  
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 700;
    padding-left: 15px;
    padding-bottom: 20px;
`;

const ButonField = styled.View`
    margin-top: auto;
    width: 100%;
    padding-bottom: 30px;
`;

const Description = styled.Text`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin: auto 0;
    margin-bottom: 20px;
`;

export default HomeScreen;
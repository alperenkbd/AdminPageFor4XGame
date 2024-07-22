import React from 'react';
import styled from 'styled-components';



const PntButton = (props ) => {

    const { label,
            leftIcon,
            onClick } = props;

    return (
        <ButtonContainer onClick={onClick} {...props}>
            {leftIcon && <IconLeft>{leftIcon}</IconLeft>}
            {label}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.button`
    width: 100%; 
    padding: 10px; 
    border-radius: 5px; 
    border: 1px solid #454545; 
    background-color: #FF6000; 
    font-family: Arial, sans-serif; 
    font-size: 16px; 
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 30px;
    color: ${({ textColor }) => textColor || '#ffffff'};

    &:hover {
        background-color: #454545; 
    }

    &:focus {
        outline: none; 
    }
`;

const IconLeft = styled.span`
    display: flex;
    align-items: center;
    margin-right: 8px;
`;


export default PntButton;
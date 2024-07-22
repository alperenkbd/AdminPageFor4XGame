import React from 'react';
import styled from 'styled-components';


const PntInput = (props) => {

    const { label,
        type = 'text',
        value,
        onChange,
        onFocus,
        onBlur,
        leftIcon,
        rightIcon,
        onRightIconClick } = props;


    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <InputContainer>
                {leftIcon && <IconLeft>{leftIcon}</IconLeft>}
                <Input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    hasLeftIcon={!!leftIcon}
                    hasRightIcon={!!rightIcon}
                    {...props}
                />
                {rightIcon && (
                    <IconRight onClick={onRightIconClick}>
                        {rightIcon}
                    </IconRight>
                )}
            </InputContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
    text-align: left;
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 12px;
    padding-left: ${({ hasLeftIcon }) => (hasLeftIcon ? '40px' : '12px')};
    padding-right: ${({ hasRightIcon }) => (hasRightIcon ? '40px' : '12px')};
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;
    font-family: Arial;
    min-height: 25px;
    min-width: 250px;

    &:focus {
        border-color: #FF6000;
    }
`;

const IconLeft = styled.span`
    position: absolute;
    left: 8px;
    display: flex;
    align-items: center;
`;

const IconRight = styled.span`
    position: absolute;
    right: 8px;
    display: flex;
    align-items: center;
`;


export default PntInput;

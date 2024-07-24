import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';


const ComboBox = (props) => {

    const { options, label, error, placeholder, selectedOption, onChange } = props;
    

    //const exampleUsageOfOptions = [
    //    { value: 'option1', label: 'Option 1' },
    //    { value: 'option2', label: 'Option 2' }
    //];

    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <Select
                id="comboBox"
                value={selectedOption}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

//TO:DO Add style for component after implementation of dashboardConfig Page

export default ComboBox;

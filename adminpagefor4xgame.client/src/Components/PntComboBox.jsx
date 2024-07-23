import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';


const ComboBox = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const { options, label, error } = props;

    const handleChange = (option) => {
        setSelectedOption(option);
    };

    //const exampleUsageOfOptions = [
    //    { value: 'option1', label: 'Option 1' },
    //    { value: 'option2', label: 'Option 2' }
    //];

    return (
        <div>
            <label htmlFor="comboBox">{ label }</label>
            <Select
                id="comboBox"
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

//TO:DO Add style for component after implementation of dashboardConfig Page

export default ComboBox;

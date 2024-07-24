import React, { useState, useEffect } from 'react';
import PntDataTable from './../Components/PntDataTable';
import PntModal from './../Components/PntModal';
import PntInput from './../Components/PntInput';
import PntButton from './../Components/PntButton'
import PntComboBox from './../Components/PntComboBox'
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

const exampleColumns = [
    { key: 'id', name: 'Data No' },
    { key: 'buildingTypes', name: 'Building Type' },
    { key: 'buildingCost', name: 'Building Cost' },
    { key: 'constructionTime', name: 'Construction Time' }
];



const SConfigurationDashboard = () => {

    const [buildingCost, setbuildingCost] = useState();
    const [buildingTime, setbuildingTime] = useState();
    const [buildings, setBuildings] = useState();
    const [configData, setconfigData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({value:-1,label:''});

    const [errors, setErrors] = useState({
        buildingType: '',
        buildingCost: '',
        constructionTime: ''
    });


    const validateForm = () => {

        let valid = true;
        let newErrors = {
            buildingType: '',
            buildingCost: '',
            constructionTime: ''
        };

        if (!selectedOption) {
            valid = false;
            newErrors.buildingType = 'Building Type is required';
        }

        if (!buildingCost) {
            valid = false;
            newErrors.buildingCost = 'Building Cost is required';
        } 

        if (buildingCost <= 0) {
            valid = false;
            newErrors.buildingCost = 'Building Cost must be a positive number';
        }

        if (!buildingTime) {
            valid = false;
            newErrors.constructionTime = 'Building Time is required';
        }

        if (30 > buildingTime || buildingTime >1800) {
            valid = false;
            newErrors.constructionTime = 'Construction time should be minimum 30 seconds and maximum 1800';
        }


        setErrors(newErrors);
        return valid;
    }


    useEffect(() => {
        fetchConfigData();
        fetchBuildingTypes();
    }, []);

    const fetchBuildingTypes = async () => {
        try {
            const response = await fetch('https://localhost:7255/api/BuildingType');
            if (!response.ok) {
                setBuildings("Hata..!");
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const cleanData = await data.map(data => ({ value: data.id, label: data.buildingTypes }))
            setBuildings(cleanData);
        } catch (error) {
            console.error('Error fetching building data:', error);
        }
    };

    const fetchConfigData = async () => {
        try {
            const response = await fetch('https://localhost:7255/api/ConfigData/get');
            if (!response.ok) {
                setBuildings("Hata..!");
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setconfigData(data);
        } catch (error) {
            console.error('Error fetching building data:', error);
        }
    };

    const updateBuildingTypes = async () => {
        var dataWillBeSent = selectedOption.map((d) => ({ Id: d.id, BuildingTypes: d.buildingTypes, IsAdded: true }))
        try {
            const response = await fetch('https://localhost:7255/api/BuildingType/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataWillBeSent)
            });

            const data = await response.json();

            if (!response.ok)
                alert("Could not update building types..!" + data.Message);
            return true;
            
        } catch (error) {
            console.error('Error updating building data:', error);
        }
    };

    const createConfigData = async () => {
        const newConfigData = {
            BuildingTypes: selectedOption.label, 
            BuildingCost: parseInt(buildingCost, 10), 
            ConstructionTime: parseInt(buildingTime, 10) 
        };
        const configData = { configData: newConfigData };


        console.log(configData);

        fetch('https://localhost:7255/api/ConfigData/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newConfigData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => console.error('Error:', error));
    };

    const checkIsStringEmpty = (value) => {
        if (value)
            return true
        return false
    }


    const handleBuildCostChange = (event) => {
        setbuildingCost(event.target.value);

        if (checkIsStringEmpty(event.target.value))
            setErrors(prevErrors => ({
                ...prevErrors,
                buildingCost: ''
            }));
    };

    const handleBuildTimeChange = (event) => {
        setbuildingTime(event.target.value);

        if (checkIsStringEmpty(event.target.value))
            setErrors(prevErrors => ({
                ...prevErrors,
                constructionTime: ''
            }));
    };

    const handleChange = (option) => {
        setSelectedOption(option);

        if (checkIsStringEmpty(option))
            setErrors(prevErrors => ({
                ...prevErrors,
                buildingType: ''
            }));
    };

    const clearAllInputs = () => {
        setbuildingCost();
        setbuildingTime();
        setbuildingTime();
        setSelectedOption({ value: -1, label: '' });

    }


    const handleButtonClick = () => {
        if (validateForm()) {
            updateBuildingTypes(); 
            createConfigData();
            clearAllInputs();
            closeModal();
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };



    const componentForModal = () => {

        return <>
            <PntComboBox
                options={buildings}
                label={"Building Type"}
                placeholder={"Select Building Type..."}
                onChange={handleChange}
                error={errors.buildingType}
            />
            <PntInput
                label="Building Cost"
                value={buildingCost}
                onChange={handleBuildCostChange}
                type={"number"}
                min={1}
                error={errors.buildingCost}
            />
            <PntInput
                label="Construction Time (Between 30-1800)"
                value={buildingTime}
                onChange={handleBuildTimeChange}
                type={"number"}
                min={30}
                max={1800}
                error={errors.constructionTime}
            />
            <PntButton label="Add" onClick={handleButtonClick} />
        </>
    }


    const imageUrl = 'https://www.panteon.games/wp-content/uploads/2021/05/news03.png';

    return (<BackgroundImageContainer imageUrl={imageUrl}>

        <PntDataTable
            customComponent={
                <PntModal
                    leftIcon={<FaPlus />}
                    label={"Add New Row"}
                    content={componentForModal()}
                    openModal={openModal}
                    closeModal={closeModal}
                    isOpen={isOpen}
                     />}
            columns={exampleColumns}
            rows={configData}
            header={"CONFIGURATION PAGE"}
        />

    </BackgroundImageContainer>
    );
};

const BackgroundImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: 1900px 540px;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;


export default SConfigurationDashboard;

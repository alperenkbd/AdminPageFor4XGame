import 'react';
import PntDataTable from './../Components/PntDataTable';
import PntModal from './../Components/PntModal';
import PntInput from './../Components/PntInput';
import PntButton from './../Components/PntButton'
import PntComboBox from './../Components/PntComboBox'

const exampleColumns = [
    { key: 'id', name: 'Data No' },
    { key: 'buildingType', name: 'Building Type' },
    { key: 'buildingCost', name: 'Building Cost' },
    { key: 'ConstructionTime', name: 'Construction Time' }
];

const exampleRows = [
    { id: 1, buildingType: 'Farm', buildingCost: 1000, ConstructionTime: 180 },
    { id: 2, buildingType: 'Farm', buildingCost: 2000, ConstructionTime: 50 },
    { id: 3, buildingType: 'Farm', buildingCost: 3000, ConstructionTime: 100 },
    { id: 4, buildingType: 'Farm', buildingCost: 4000, ConstructionTime: 230 },
    { id: 5, buildingType: 'Farm', buildingCost: 5000, ConstructionTime: 235 },
];

const handleButtonClick = () => {
    alert('Button clicked!');
};

const componentForModal = () => {

    return <>
        <PntComboBox
            options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' }
            ]}
            label={"Building Type"}
            placeholder={"Select Building Type..." }
        />
        <PntInput
            label="Building Cost"
            value={""}
        />
        <PntInput
            label="Construction Time"
            value={""}
        />
        <PntButton label="Add" onClick={handleButtonClick} />
    </>
}


const SConfigurationDashboard = () => {


    return (<>
        
        <PntDataTable
            customComponent={<PntModal content={componentForModal()} />}
            columns={exampleColumns}
            rows={exampleRows}
            header={"CONFIGURATION DATA TABLE"}
        />
        
    </>
    );
};








export default SConfigurationDashboard;

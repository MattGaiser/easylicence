import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    RadioButtonsGroupLegalEntity,
    RadioButtonsGroupFoodCookedLocation,
    RadioButtonsGroupVehicleType, RadioButtonsManufacturingType, RadioButtonsSalesLocations
} from "./radiogroupcorporation";

import TrafficIcon from '@mui/icons-material/Traffic';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ForestIcon from '@mui/icons-material/Forest';
import PulseLoader from "react-spinners/PulseLoader";
import {useState} from "react";


const delay = ms => new Promise(res => setTimeout(res, ms));

const rotations = [{
    icon: <TrafficIcon/>,
    text: "Generating Street Use Form"
    },
    {
        icon: <LocalFireDepartmentIcon/>,
        text: "Faxing Fire Inspection Request"
    },
    {
        icon: <ForestIcon/>,
        text: "Saving Trees from Needless Slaughter"
    }]



const steps = [
    {
        label: 'Operating Location',
        description: `Where are you operating out of?`,
    },
    {
        label: 'Ownership Structure',
        description:
            'What kind of ownership structure will you operate under?',
    },
    {
        label: 'Vehicle Type',
        description: `What kind of vehicle are are you selling out of?`,
    },
    {
        label: 'Manufacturing Location',
        description: `Will you be selling pre-packaged food or food made on premises?`,
    },
    {
        label: 'Sales Location',
        description: `Are you selling on private, public property, or both?
`,
    },
];

export default function VerticalLinearStepper() {
    const [rotationIndex, setRotationIndex] = React.useState(0);
    const rotate = async () => {
        await delay(4000);
        setRotationIndex(1)
        await delay(4000);
        setRotationIndex(2)
        await delay(4000);
        setRotationIndex(3)

    }

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#f44336");

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        const notify = () => toast("Data Saved");
        notify();
        if (activeStep === steps.length-1) {
            rotate();
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: 700 }} className="card-box">
            <ToastContainer />
            {activeStep !== steps.length && (<Stepper activeStep={activeStep} orientation="vertical"  className="step-box">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent >
                            <h1>{step.label}</h1>
                            <Typography>{step.description}</Typography>
                            {
                                {
                                    0: <RadioButtonsGroupFoodCookedLocation />,
                                    1: <RadioButtonsGroupLegalEntity />,
                                    2: <RadioButtonsGroupVehicleType />,
                                    3: <RadioButtonsManufacturingType/>,
                                    4: <RadioButtonsSalesLocations />
                                }[activeStep]
                            }
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>)}
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    {rotationIndex < 3 && (
                        <div>{rotations[rotationIndex].icon}{rotations[rotationIndex].text}      <PulseLoader color={color} loading={loading} size={15} />
                        </div>
                    )}
                    {rotationIndex > 2 && (<div><Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button></div>)}
                </Paper>
            )}
        </Box>
    );
}
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
    RadioButtonsGroupVehicleType,
    RadioButtonsManufacturingType,
    RadioButtonsSalesLocations,
    CalendarSelectorFireInspection
} from "./radiogroupcorporation";

import TrafficIcon from '@mui/icons-material/Traffic';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ForestIcon from '@mui/icons-material/Forest';
import PulseLoader from "react-spinners/PulseLoader";
import {useState} from "react";
import {shouldSkipGeneratingVar, TextField} from "@mui/material";
import FormsList from "./formslist";
import axios from "axios"
import ReactTooltip from "react-tooltip";

const apiURL = "https://walrus-app-h4w3o.ondigitalocean.app/sendText?number=4039918588"


const delay = ms => new Promise(res => setTimeout(res, ms));

const rotations = [{
    icon: <TrafficIcon className="icon-loader" style={{fontSize: 100}}/>,
    text: "Generating Street Use Form"
},
    {
        icon: <LocalFireDepartmentIcon className="icon-loader" style={{fontSize: 100}}/>,
        text: "Faxing Fire Inspection Request"
    },
    {
        icon: <ForestIcon className="icon-loader" style={{fontSize: 100}}/>,
        text: "Saving Trees from Needless Slaughter"
    }]


const steps = [
    {
        label: 'Operating Location',
        description: `Where are you operating out of?`,
        tooltip: 'The operating location of your business is defined as where regular operations relevant to the production and sale of food take place.' +
            'Different types of permits are required for different locations and regulations differ between locations. For example, a home location requires a Class 2 permit.'
    },
    {
        label: 'Ownership Structure',
        description:
            'What kind of ownership structure will you operate under?',
        tooltip: ''

    },
    {
        label: 'Vehicle Type',
        description: `What kind of vehicle are are you selling out of?`,
        tooltip: ''

    },
    {
        label: 'Manufacturing Location',
        description: `Will you be selling pre-packaged food or food made on premises?`,
        tooltip: ''

    },
    {
        label: 'Sales Location',
        description: `Are you selling on private, public property, or both?`,
        tooltip: '',
    },
    {
        label: 'Fire Inspection Date',
        description: `By what date will you be ready for a fire inspection?`,
        tooltip: ''
    },
];

export default function VerticalLinearStepper() {
    const [rotationIndex, setRotationIndex] = React.useState(0);
    const [tooltip, showTooltip] = useState(true);

    const rotate = async () => {
        await delay(4000);
        setRotationIndex(1)
        await delay(4000);
        setRotationIndex(2)
        await delay(4000);
        setRotationIndex(3)

    }

    let [loading, setLoading] = useState(true);
    let [updateLink, setUpdateLink] = useState(true);

    let [color, setColor] = useState("#f44336");

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        const notify = () => toast("Data Saved");
        notify();
        if (activeStep === steps.length - 1) {
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

    const handleShowUpdate = () => {
        setUpdateLink(true);
    };

    const sendText = (number) => {
        axios
            .get(apiURL)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            });
        const notify = () => {
            toast("Check your phone for a text!");
        }
        notify();
        handleShowUpdate();

    };

    return (
        <Box sx={{width: 700}} className="card-box">
            <ToastContainer/>
            {tooltip && <ReactTooltip effect="solid" />}
            <p><b>This is a substantially shortened experience given the speedy presentation requirements.</b></p>
            {activeStep !== steps.length && (
                <Stepper activeStep={activeStep} orientation="vertical" className="step-box">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <h1 data-tip={step.tooltip}
                                    onMouseEnter={() => showTooltip(true)}
                                    onMouseLeave={() => {
                                        showTooltip(false);
                                        setTimeout(() => showTooltip(true), 50);
                                    }}>{step.label}</h1>
                                <Typography>{step.description}</Typography>
                                {
                                    {
                                        0: <RadioButtonsGroupFoodCookedLocation/>,
                                        1: <RadioButtonsGroupLegalEntity/>,
                                        2: <RadioButtonsGroupVehicleType/>,
                                        3: <RadioButtonsManufacturingType/>,
                                        4: <RadioButtonsSalesLocations/>,
                                        5: <CalendarSelectorFireInspection/>
                                    }[activeStep]
                                }
                                <Box sx={{mb: 2}}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{mt: 1, mr: 1}}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{mt: 1, mr: 1}}
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
                <Paper square elevation={0} sx={{p: 3}}>
                    {rotationIndex < 3 && (
                        <div
                            className="icon-label-box">{rotations[rotationIndex].icon}<span>{rotations[rotationIndex].text}</span><PulseLoader
                            color={color} loading={loading} size={15}/>
                        </div>
                    )}
                    {rotationIndex > 2 && (<div><Typography>All steps completed - you&apos;re finished. Copies of the submitted forms are below for your records.</Typography>
                        <FormsList/>
                        <Button sx={{mt: 1, mr: 1}}>
                            Download All
                        </Button>
                        <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                            Repeat Process
                        </Button>
                        <p>Want to be notified when there is progress on your licence? Add your number below for text updates.</p>
                        <div><TextField id="standard-basic" label="Phone Number" variant="standard"/> <Button
                            onClick={sendText} sx={{mt: 1, mr: 1}}>
                            Get Updates
                        </Button></div>
                            { updateLink && (<p>Or check <a href="/status/cc37dde0-0aee-11ed-861d-0242ac120002">here</a> for updates</p>)}
                    </div>)}
                </Paper>
            )}
        </Box>
    );
}
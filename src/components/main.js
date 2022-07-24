import VerticalLinearStepper from "./stepper";
import {Card} from "@mui/material";
import * as React from 'react';
import Button from "@mui/material/Button";
import RequirementList from "./requirement-list";
import {HomePage} from "./homepage";


export function Main() {

    const [chosenType, setChosenType] = React.useState(null);
    const [activeForm, setActiveForm] = React.useState(false);

    const openForm = () => {
        setActiveForm(true)
    }
    return (<div>{chosenType === null && (<Card className="card-box">
        <HomePage changeFunct={setChosenType}/>
    </Card>)}
        {chosenType !== null && !activeForm && (<Card className="initial-card-box">
            <h1>Sell Mobile Food in Calgary</h1>
            <p className="max-width">We are excited that you are here. Whether you want to build a food truck empire or
                just want to share you grandmother's ribs with your community, this is where you start. Things you will
                want before getting started:</p>
            <RequirementList className="requirement-list-box"/>
            <Button variant="contained" onClick={openForm}>Get Started Building Your Dreams</Button>
        </Card>)}
        {activeForm && (<Card className="card-box">
            <VerticalLinearStepper/>
        </Card>)} </div>)
}
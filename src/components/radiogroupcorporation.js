import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export function RadioButtonsGroupLegalEntity() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="sp" control={<Radio />} label="Sole Proprietorship" />
                <FormControlLabel value="p" control={<Radio />} label="Partnership" />
                <FormControlLabel value="c" control={<Radio />} label="Corporation" />
            </RadioGroup>
        </FormControl>
    );
}

export function RadioButtonsGroupFoodCookedLocation() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="cb" control={<Radio />} label="Commercial Based" />
                <FormControlLabel value="hb" control={<Radio />} label="Home Based" />
                <FormControlLabel value="ot" control={<Radio />} label="Out of Town" />
                <FormControlLabel value="m" control={<Radio />} label="Mobile" />
            </RadioGroup>
        </FormControl>
    );
}

export function RadioButtonsGroupVehicleType() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="tr" control={<Radio />} label="Commercial Based" />
                <FormControlLabel value="pc" control={<Radio />} label="Home Based" />
            </RadioGroup>
        </FormControl>
    );
}

export function RadioButtonsManufacturingType() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="pf" control={<Radio />} label="Pre-Packaged Food" />
                <FormControlLabel value="of" control={<Radio />} label="On Premises Food" />
            </RadioGroup>
        </FormControl>
    );
}

export function RadioButtonsSalesLocations() {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="pf" control={<Radio />} label="Public Property" />
                <FormControlLabel value="of" control={<Radio />} label="Private Property" />
                <FormControlLabel value="bt" control={<Radio />} label="Both" />
            </RadioGroup>
        </FormControl>
    );
}
import * as React from "react";
import {Card} from "@mui/material";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HandymanIcon from '@mui/icons-material/Handyman';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export function HomePage(props) {

    const setFoodTruck = () => {
        props.changeFunct('ft')
    }

    return (
        <div className="home-box">
            <Card className="card-box-home icon-label-box" >
            Contractor <HandymanIcon className="icon-stuff" fontSize="large"/>
        </Card>
            <Card className="card-box-home icon-label-box">
            Retail <PointOfSaleIcon className="icon-stuff" fontSize="large"/>
        </Card>
            <Card className="card-box-home icon-label-box" onClick={setFoodTruck}>
            Mobile Food Vendor <FastfoodIcon className="icon-stuff" fontSize="large"/>
        </Card>
            <Card className="card-box-home icon-label-box">
                Other <ContactSupportIcon className="icon-stuff" fontSize="large"/>
            </Card></div>
    );
}
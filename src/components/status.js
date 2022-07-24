import {Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import * as React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DownloadIcon from "@mui/icons-material/Download";

export default function Status() {
    return (
<div>
<h1>Licence Status Request</h1>
    <Card className="card-box">

        <List>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon  />
                </ListItemIcon>
                <ListItemText primary="Land Use  Permit Application" />
                <ListItemIcon>
                    <a href=""><DownloadIcon/></a>
                </ListItemIcon>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Street Use Permit Application" />
                <ListItemIcon>
                    <DownloadIcon/>
                </ListItemIcon>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Class 2 Development Permit Application" />
                <ListItemIcon>
                    <DownloadIcon/>
                </ListItemIcon>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Fire Inspection Request" />
                <ListItemIcon>
                    <DownloadIcon/>
                </ListItemIcon>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="AHS Inspection Request" />
                <ListItemIcon>
                    <DownloadIcon/>
                </ListItemIcon>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="AMVIC Licence Application" />
                <ListItemIcon>
                    <DownloadIcon/>
                </ListItemIcon>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Planning Approval Application" />
                <ListItemIcon>
                    <DownloadIcon/>
                </ListItemIcon>
            </ListItem>
        </List>
    </Card>
</div>
    );
}
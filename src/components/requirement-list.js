import * as React from "react";
import Box from "@mui/material/Box";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CheckBoxOutlineBlankIcon  from '@mui/icons-material/CheckBoxOutlineBlank';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function RequirementList() {


    return (<Box sx={{ width: '80%', bgcolor: 'background.paper', marginLeft: '20%' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem >
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon  />
                            </ListItemIcon>
                            <ListItemText primary="Any Existing Documents" />
                    </ListItem>
                    <ListItem >
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Photo ID" />
                    </ListItem>
                    <ListItem >
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Timeline for Business" />
                    </ListItem>
                </List>
            </nav>
        </Box>

    );
}
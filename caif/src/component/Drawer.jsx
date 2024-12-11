import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Switch } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, useNavigate } from 'react-router-dom';
import '../css files/Drawer.css'

export default function AnchorTemporaryDrawer() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon className='link' />
            </IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='drawer-div'>
                    <Link to='/login'>
                        <p className='link'>Login</p>
                    </Link>
                    <a href="#faqSection">
                        FAQs
                    </a>
                </div>
            </Drawer>
        </div>
    );
}
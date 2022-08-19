import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import {teamOpenModal} from '../../../redux/teamEditModalSlice/teamEditModalSlice'
import { teamDeleteOpen } from '../../../redux/teamDeleteModalSlice/teamDeleteModalSlice';


const ITEM_HEIGHT = 48;

export default function LongMenu() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch()

  return (
    <div>

        <MoreHorizIcon style={{color:'white'}} onClick={handleClick}/>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '13ch',
            backgroundColor:'#d0f4de'
          },
        }}
      >
       
          <MenuItem  onClick={() => {
            handleClose()
            dispatch(teamOpenModal())
          }}>
           Edit
          </MenuItem>
          
          <MenuItem   onClick={() => {
            handleClose()
            dispatch(teamDeleteOpen())
          }}>
            Delete
          </MenuItem>
     
      </Menu>
    </div>
  );
}
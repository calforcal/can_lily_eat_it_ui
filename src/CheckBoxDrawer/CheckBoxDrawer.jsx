import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CheckBoxForm from '../CheckBoxForm/CheckBoxForm';
import SettingsIcon from '@mui/icons-material/Settings';

function CheckBoxDrawer({ userId }) {
  const [open, setOpen] = useState(false);
  const [userAllergens, setUserAllergens] = useState([]);

  const saveUserSelections = () => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${userId}/allergens`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({allergens: userAllergens.join()})
    })
    .then((response) => {
      if (response.status == 201) {
        navigate("/profile", { state: userData.id })
      }
      else if (response.status == 200) {
        setOpen(false);
        alert("Your submissions were saved successfully.")
      }
    })
    .catch((err) => console.log(err))
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <List sx={{ display:'flex', flexDirection: 'column' }}>
      <Button sx={{ marginTop: -1.5, paddingBottom: -1.5, color: 'white', backgroundColor: '#1d95fe', fontSize: 24 }} size='large' onClick={toggleDrawer(false)}>Close</Button>
      <CheckBoxForm setUserAllergens={setUserAllergens}/>
      <Button sx={{ color: 'white', margin: 1, borderRadius: 20, backgroundColor: '#1d95fe', fontSize: 18 }} onClick={saveUserSelections}>Save Selections</Button>
    </List>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><SettingsIcon sx={{color: "white"}} fontSize="large"/></Button>
      <Drawer open={open}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CheckBoxDrawer;
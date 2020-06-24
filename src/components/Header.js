import React from 'react';
import Typography from '@material-ui/core/Typography';

function Header() {
  return (
    <header style={headerStyle}>
      <Typography component="h1" variant="button">Avatar Suspect Expander</Typography>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
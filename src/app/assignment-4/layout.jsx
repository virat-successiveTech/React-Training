'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const navItems = Array.from({ length: 14 }, (_, i) => ({
  text: `Question ${i + 1}`,
  href: `/assignment-4/question-${i + 1}`,
}));

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <Link key={item.text} href={item.href} passHref legacyBehavior>
          <ListItem button component="a">
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Assignment 4
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Permanent drawer for desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Temporary drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8, // To push content below AppBar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

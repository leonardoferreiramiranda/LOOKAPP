import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../pages/Feed';

const DrawerComponent = () => {
    
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen
            name="Feed"
            component={Feed}
            />
        </Drawer.Navigator>
    );
}

export default DrawerComponent;
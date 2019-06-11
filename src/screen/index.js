import Page1 from './Page1';
import Page2 from './Page2';


import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createBottomTabNavigator({
        Home: Page1,
        About: Page2
    })
);

export default Routes;
// import React from 'react';
import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';
import { DrawerContent} from './DrawerContent';
import {
  Dashboard,
  ViewNote,
  AddNote,
  EditNote,
} from "../components/notes";
import {
  Profile,
  Logout
} from '../components/user'
import {
  Login,
  Register,
  RecoverPassword
} from '../components/auth'

const AuthStack = StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  RecoverPassword: {
    screen: RecoverPassword
  },
}, {
  navigationOptions: {
    headerTintColor: '#9013FE'
  }
});

const AppStack = StackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  ViewNote: {
    screen: ViewNote
  },
  AddNote: {
    screen: AddNote
  },
  EditNote: {
    screen: EditNote
  }
},
  {
    navigationOptions: {
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#9013FE'
      },
      headerBackTitle: null
    }
  });

const ProfileStack = StackNavigator({
  User: {
    screen: Profile
  }
},
  {
    navigationOptions: {
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#9013FE'
      }
    }
  });

const AppDrawer = DrawerNavigator({
  NoteDraw: {
    screen: AppStack,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  UserDraw: {
    screen: ProfileStack,
    navigationOptions: {
      drawerLabel: 'Edit Profile'
    }
  },
  LogoutDraw: {
    screen: Logout,
    navigationOptions: {
      drawerLabel: 'Logout'
    }
  }
}, {
  contentComponent: DrawerContent,
  drawerBackgroundColor: '#9013FE',
  contentOptions: {
    activeTintColor: '#9013FE',
    inactiveTintColor: '#fff',
    activeBackgroundColor: '#fff',
  }
});


export const RootStack = SwitchNavigator({
  Auth: AuthStack,
  // App: AppStack,
  // AppT: AppTabs,
  App: AppDrawer
});
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import FavoriteScreen from './screens/FavoriteScreen'
//* import FavoritesContextProvider from './store/context/favorites-context'
import { Provider } from 'react-redux'
import { store } from './store/redux/store'

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
          },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
          headerShown: true,
          drawerContentStyle: { backgroundColor: '#351401' },
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#311401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} /> }}
        />
        <Drawer.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{
            title: 'Favorites',
            drawerIcon: ({ size, color }) => <Ionicons name="star" color={color} size={size} />,
          }}
        />
      </Drawer.Navigator>
    </>
  )
}

export default function App() {
  return (
    <>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <StatusBar style="light" />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: 'Meals Categories',
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: 'white',
              cardStyle: { backgroundColor: '#3f2f25' },
              headerShown: true,
            }}
          >
            <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                title: 'Meal Overview',
              }}
            />

            <Stack.Screen
              name="MealDetails"
              component={MealDetailScreen}
              options={{
                title: 'Meal Detail',
                // headerRight: () => {
                //   return (
                //     <>
                //       <Button title="Tap me xD" />
                //     </>
                //   )
                // },
              }}
            />
          </Stack.Navigator>
          {/* <CategoriesScreen /> */}
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  )
}

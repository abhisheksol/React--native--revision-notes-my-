
import Details from './detail';
import Setting from './setting';



function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="details" component={Setting} />
     
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer;
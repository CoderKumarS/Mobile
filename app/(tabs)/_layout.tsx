import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const screens: {
    name: string;
    title: string;
    icon: {
      focused: React.ComponentProps<typeof Ionicons>['name'];
      unfocused: React.ComponentProps<typeof Ionicons>['name'];
    };
  }[] = [
      { name: 'index', title: 'Home', icon: { focused: 'home-sharp', unfocused: 'home-outline' } },
      { name: 'about', title: 'About', icon: { focused: 'information-circle', unfocused: 'information-circle-outline' } },
      { name: 'gallery', title: 'Gallery', icon: { focused: 'images', unfocused: 'images-outline' } },
    ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: { display: 'none' },
        tabBarIconStyle: { marginBottom: 5 },
        tabBarItemStyle: { paddingVertical: 5 },
        tabBarStyle: {
          position: 'absolute',
          height: 50,
          backgroundColor: '#25292e',
        },
        // headerShown: false,
        headerStyle: { backgroundColor: '#25292e',},
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      {screens.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, focused }) => (
              <div className={`flex items-center justify-center rounded-xl px-5 py-0.5 ${focused ? 'bg-slate-600' : 'bg-transparent'}`}>
                <Ionicons name={focused ? icon.focused : icon.unfocused} color={color} size={24} />
              </div>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

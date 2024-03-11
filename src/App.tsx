import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigation from '@components/Navigation';
import CardPage from './pages/CardPage';
import TabPage from './pages/TabPage';


interface BottomNavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}
// TODO: get icons
const items: BottomNavItem[] = [
  { icon: <i ></i>, label: 'Cards', path: '/cards' },
  { icon: <i ></i>, label: 'Tabs', path: '/tabs' },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navigation items={ items } />
      <Routes>
        <Route path="/cards" element={<CardPage />} />
        <Route path="/tabs" element={<TabPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App

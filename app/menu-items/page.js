'use client'

import { useState, useEffect } from 'react';
import MenuItemForm from '../components/MenuItemForm';

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('/api/menu-items');
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  return (
    <div>
      <h1>Menu Items</h1>
      <MenuItemForm onItemAdded={fetchMenuItems} />
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
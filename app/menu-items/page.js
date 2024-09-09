'use client'

import { useState, useEffect } from 'react';
import MenuItemForm from '../components/MenuItemForm';
import Link from 'next/link';

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await fetch('/api/menu-items');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
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
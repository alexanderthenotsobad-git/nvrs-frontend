'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function MenuItemPage() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenuItem();
  }, [id]);

  const fetchMenuItem = async () => {
    try {
      const res = await fetch(`/api/menu-items/${id}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setItem(data);
    } catch (error) {
      console.error('Error fetching menu item:', error);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <p>Description: {item.description}</p>
    </div>
  );
}
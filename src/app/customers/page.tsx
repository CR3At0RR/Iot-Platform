// pages/about.tsx
'use client'
import React from 'react';
import Table from '../components/ui/table';
const columns = [
  { key: 'createdTime', label: 'Created Time' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
];

const data = [
  {createdTime: '2022-01-01', name: 'John Doe', email: 'john@example.com' },
  // ... more data
];
const handleAdd = () => {
  // Handle adding new item
  console.log('Adding new item');
};

const handleEdit = (row: any) => {
  // Handle editing item
  console.log('Editing item:', row);
};

const handleDelete = (row: any) => {
  // Handle deleting item
  console.log('Deleting item:', row);
};
const Users: React.FC = () => {
  return (
    <Table 
    data={data}
    columns={columns}
    pageSize={15}
    searchable={true}
    sortable={true}
    onAdd={handleAdd}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />
  );
};

export default Users;
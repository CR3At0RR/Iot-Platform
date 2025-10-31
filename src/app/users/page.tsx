// pages/about.tsx
'use client'
import React, { useState } from 'react';
import Table from '../components/ui/table';
import ConfirmDeleteModal from '../components/ui/modal/deleteModal';
const columns = [
  { key: 'createdTime', label: 'Created Time' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'customerName', label: 'Customer Name' },
];

const initialData = [
  {createdTime: '2022-01-01', name: 'John Doe', email: 'john@example.com', customerName: 'Customer 1'},
  // ... more data
];

const Users: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const handleAdd = () => {
    // Handle adding new item
    console.log('Adding new item');
  };
  
  const handleEdit = (row: any) => {
    // Handle editing item
    console.log('Editing item:', row);
  };
  
  const handleDelete = (row: any) => {
    setSelectedRow(row);
    setDeleteModalOpen(true);
  };
  
  const confirmDelete = () => {
    setData(data.filter((item:any) => item !== selectedRow));
    setDeleteModalOpen(false);
    setSelectedRow(null);
  };
  return (
    <>
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
  <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        itemName={selectedRow?.name}
      />
    </>
  );
};

export default Users;
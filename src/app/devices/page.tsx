'use client';
import React, { useState } from 'react';
import Table from '../components/ui/table';
import AddDeviceModal from '../components/ui/modal/addDeviceModal';
import ConfirmDeleteModal from '../components/ui/modal/deleteModal';

const columns = [
  { key: 'createdTime', label: 'Created Time' },
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'profile', label: 'Profile' },
  { key: 'customerName', label: 'Customer Name' },
];

const initialData = [
  { name: 'Device 1', status: 'Active', createdTime: '2022-01-01', profile: 'Profile 1', customerName: 'Customer 1' },
  // ... more data
];

const Users: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAdd = () => {
    setAddModalOpen(true);
  };

  const handleAddDevice = (newDevice: { name: string; customer: string }) => {
    const createdTime = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const updatedDevice = { 
      ...newDevice, 
      createdTime, 
      status: 'Active', 
      profile: 'Default Profile', 
      customerName: 'Customer 1'
    };
    setData([...data, updatedDevice]);
    setAddModalOpen(false);
  };

  const handleDelete = (row: any) => {
    setSelectedRow(row);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setData(data.filter((item) => item !== selectedRow));
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
        onEdit={(row) => console.log('Editing:', row)}
        onDelete={handleDelete}
      />
      <AddDeviceModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAddDevice={handleAddDevice}
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

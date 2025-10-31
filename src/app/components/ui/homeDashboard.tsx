
import React from 'react';
import ViewDashboard from './dashboard';

const HomeDashboard = () => {
  const dashboardConfig = {
    widgets: [
      {
        type: 'stat',
        size: 'small',
        props: {
          title: 'Active Devices',
          value: '1,234',
          description: '24 new since last week',
        },
      },
      {
        type: 'stat',
        size: 'small',
        props: {
          title: 'Data Points',
          value: '5.6M',
          description: '10% increase from last month',
        },
      },
      {
        type: 'chart',
        size: 'full',
        props: {
          title: 'Device Activity',
          data: [12, 19, 3, 5, 2, 3],
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
      },
      {
        type: 'list',
        size: 'medium',
        props: {
          title: 'Recent Alerts',
          items: [
            'Device "Sensor-A" offline',
            'High temperature detected on "Motor-3"',
            'Low battery on "Gateway-2"',
          ],
        },
      },
    ],
  };

  return <ViewDashboard config={dashboardConfig} />;
};

export default HomeDashboard;

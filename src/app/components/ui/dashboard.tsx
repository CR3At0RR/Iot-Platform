import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card/card';

// Sample widget components
const StatWidget = ({ title = '', value = '', description = '' }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-sm text-gray-500">{description}</p>
    </CardContent>
  </Card>
);

const ChartWidget = ({ title = '', data = [] }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-48 flex items-center justify-center bg-gray-100 rounded">
        Chart Placeholder: {data.join(', ')}
      </div>
    </CardContent>
  </Card>
);

const ListWidget = ({ title = '', items = [] }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
// Sample widget components
const ProgressWidget = ({ title = '', value = 0, maxValue = 100 }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className={`h-full bg-gray-500 rounded-full`}
          style={{ width: `${(value / maxValue) * 100}%` }}
        />
      </div>
      <p className="text-sm text-gray-500">
        {value}/{maxValue}
      </p>
    </CardContent>
  </Card>
);

const KPIWidget = ({ title = '', value = '', previousValue = '', trend = 'up' }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend === 'up' ? '+' : '-'} {Math.abs(Number(value) - Number(previousValue))}
        </div>
      </div>
      <p className="text-sm text-gray-500">
        {previousValue ? `Previous: ${previousValue}` : ''}
      </p>
    </CardContent>
  </Card>
);

const TableWidget = ({ title = '', headers = [], rows = [] }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="p-2 border border-gray-200 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row:any, index) => (
            <tr key={index} className="border-b border-gray-200">
              {row.map((cell:any, index:any) => (
                <td key={index} className="p-2 border border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);

// Widget registry - maps widget types to their components
const WIDGET_COMPONENTS:any = {
  stat: StatWidget,
  chart: ChartWidget,
  list: ListWidget,
  progress:ProgressWidget,
  kpi:KPIWidget,
  table:TableWidget
};

const viewDashboard = ({ config }: { config: any }) => {
  const widgets = config?.widgets || [];

  // Function to determine column span based on widget size
  const getColSpan = (size:any) => {
    switch (size) {
      case 'small':
        return 'col-span-1';
      case 'medium':
        return 'col-span-2';
      case 'large':
        return 'col-span-3';
      case 'full':
        return 'col-span-full';
      default:
        return 'col-span-1';
    }
  };

  if (widgets.length === 0) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500">No widgets configured</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map((widget:any, index:any) => {
          const WidgetComponent = WIDGET_COMPONENTS[widget.type];
          
          if (!WidgetComponent) {
            console.warn(`Unknown widget type: ${widget.type}`);
            return null;
          }

          return (
            <div
              key={index}
              className={`${getColSpan(widget.size)}`}
            >
              <WidgetComponent {...(widget.props || {})} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default viewDashboard;
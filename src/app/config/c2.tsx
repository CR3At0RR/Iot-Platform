interface Widget {
    type: string;
    size: string;
    props: {
      title: string;
      value?: string;
      description?: string;
      data?: number[];
      items?: string[];
    };
  }
  
  interface Config {
    widgets: Widget[];
  }
  const dashboardConfig = {
    "widgets": [
      {
        "type": "stat",
        "size": "small",
        "props": {
          "title": "Total Users",
          "value": "1234",
          "description": "Total registered users"
        }
      },
      {
        "type": "chart",
        "size": "medium",
        "props": {
          "title": "Daily Active Users",
          "data": [100, 120, 80, 150, 130] 
        }
      },
      {
        "type": "list",
        "size": "small",
        "props": {
          "title": "Top 5 Countries",
          "items": ["USA", "India", "UK", "Canada", "Australia"]
        }
      },
      {
        "type": "progress",
        "size": "small",
        "props": {
          "title": "Conversion Rate",
          "value": 75,
          "maxValue": 100
        }
      },
      {
        "type": "kpi",
        "size": "small",
        "props": {
          "title": "Revenue",
          "value": "$10,000",
          "previousValue": "$8,000",
          "trend": "up" 
        }
      },
      {
        "type": "table",
        "size": "large",
        "props": {
          "title": "Top Products",
          "headers": ["Product Name", "Sales", "Revenue"],
          "rows": [
            ["Product A", 100, "$5000"],
            ["Product B", 80, "$4000"],
            ["Product C", 60, "$3000"]
          ]
        }
      }
    ]
  }
    
    export default dashboardConfig;
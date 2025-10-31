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
    widgets: [
      // Header Stats Row
      {
        type: "stat",
        size: "small",
        props: {
          title: "Total Revenue",
          value: "$48,234",
          description: "↑ 12% from last month"
        }
      },
      {
        type: "stat",
        size: "small",
        props: {
          title: "Active Users",
          value: "2,451",
          description: "↑ 8.2% from last week"
        }
      },
      {
        type: "stat",
        size: "small",
        props: {
          title: "Conversion Rate",
          value: "3.2%",
          description: "↓ 1.1% from yesterday"
        }
      },
      // Chart Widget - Full Width
      {
        type: "chart",
        size: "full",
        props: {
          title: "Revenue Overview",
          data: [
            6800,
            7200,
            8000,
            7500,
            8300,
            9200,
            8800,
            8400,
            9800,
            10000,
            10200,
            11000
          ]
        }
      },
      // Recent Activity List
      {
        type: "list",
        size: "medium",
        props: {
          title: "Recent Activities",
          items: [
            "New user registration: John Doe",
            "Order #1234 placed ($543)",
            "Support ticket #789 resolved",
            "New feature deployed: Dark Mode",
            "System maintenance completed"
          ]
        }
      },
      // Performance Stats
      {
        type: "stat",
        size: "small",
        props: {
          title: "Page Load Time",
          value: "0.8s",
          description: "95th percentile"
        }
      },
      // Another List Widget
      {
        type: "list",
        size: "small",
        props: {
          title: "Top Performers",
          items: [
            "Product A - 234 sales",
            "Product B - 187 sales",
            "Product C - 142 sales"
          ]
        }
      },
      // Growth Stats
      {
        type: "stat",
        size: "medium",
        props: {
          title: "Growth Metrics",
          value: "+27.4%",
          description: "Quarter-over-Quarter Growth"
        }
      }
    ]
  };
  
  export default dashboardConfig;
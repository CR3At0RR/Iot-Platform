'use client'
import Dashboard from '@/app/components/ui/dashboard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const getDashboardConfig = async (dashboardId: string) => {
  try {
    const config = await import(`@/app/config/${dashboardId}`);
    return config.default;
  } catch (error) {
    console.error('Error loading dashboard config:', error);
    return null;
  }
};

export default function Home() {
  const searchParams = useSearchParams();
  const [config, setConfig] = useState(null);
  const dashboardId = searchParams.get('dashboardId');

  useEffect(() => {
    if (!dashboardId) return;

    getDashboardConfig(dashboardId).then(loadedConfig => {
      if (loadedConfig) {
        setConfig(loadedConfig);
      }
    });
  }, [dashboardId]);

  if (!config) {
    return <div>Loading...</div>;
  }

  return <Dashboard config={config} />;
}
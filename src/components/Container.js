import { useState } from 'react';
import Dashboard from './Dashboard';
// import Dataset from './Dataset';
import { mockTasks } from './mockTasks';

const Container = () => {
  const [dashboard, setDashboard] = useState(mockTasks);
  return (
    <div className="Container">
      <>
        <Dashboard dashboardData={dashboard} />
      </>
    </div>
  );
};

export default Container;

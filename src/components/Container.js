import { useState } from 'react';
import Dashboard from './Dashboard';
import Dataset from './dataset';
// import { mockTasks } from './mockTasks';

const Container = () => {
  const [dashboard, setDashboard] = useState(Dataset);
  return (
    <div className="Container">
      <>
        <Dashboard dashboardData={dashboard} />
      </>
    </div>
  );
};

export default Container;

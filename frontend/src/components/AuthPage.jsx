import React, { useState } from 'react';
import { Tabs } from 'antd';
import Login from './Login';
import Register from './Register';

const { TabPane } = Tabs;

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="border-2 bg-white shadow-xl p-5 mx-0 my-auto max-w-96 w-full">
                <Tabs centered activeKey={activeTab} onChange={handleTabChange}>
                    <TabPane tab="Login" key="login">
                        <Login />
                    </TabPane>
                    <TabPane tab="Register" key="register">
                        <Register />
                    </TabPane>
                </Tabs>
            </div>
    </div>

  );
};

export default AuthPage;

import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import GenerateCode from './components/GenerateCode';
import Login from './containers/Login';
import ScanCode from './components/ScanCode';
import StudentCount from './components/StudentCount';

const App = () => (
  <Router>
    <Dashboard path="/" />
    <ScanCode path="assistance/:cohortid" />
    <Login path="login" />
    <GenerateCode path="generate" />
    <StudentCount path="count" />
  </Router>
);

export default App;

import React from 'react';
import PageComposer from './layout/PageComposer';
import PageMain from './layout/PageMain';
import PageFooter from './layout/PageFooter';
import PageNavbar from './layout/navbar/PageNavbar';

import Dashboard from './dashboard/Dashboard';
import Projects from './projects/Projects';
import Users from './users/Users';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const navbar = (
    <PageNavbar
      links={[
        <Link to="/">Dashboard</Link>,
        <Link to="/projects">Projects</Link>,
        <Link to="/users">Users</Link>
      ]}
    />
  );

  const main = (
    <PageMain>
      <Route exact path="/" component={Dashboard} />
      <Route path="/projects" component={Projects} />
      <Route path="/users" component={Users} />
    </PageMain>
  );

  return (
    <Router>
      <PageComposer
        navbar={navbar}
        main={main}
        footer={<PageFooter />}
      />
    </Router>
  );
}

export default App;

import React from 'react';
import PageComposer from './layout/PageComposer';
import PageContent from './layout/PageContent';
import PageFooter from './layout/PageFooter';
import PageNavbar from './layout/navbar/PageNavbar';

function App() {
  return (
    <PageComposer
      navbar={<PageNavbar />}
      content={<PageContent />}
      footer={<PageFooter />}
    />
  );
}

export default App;

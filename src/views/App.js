import { 
  Container, 
} from 'react-bootstrap';
import '../styles//App.css';

import { useState } from 'react';
import { Pane, Tablist, Tab } from 'evergreen-ui';

import HomeTabComponent from '../components/HomeTabComponent';
import ResourcesTabComponent from '../components/ResourcesTabComponent';
import CitizenshipTabComponent from '../components/CitizenshipTabComponent';
import GovernmentJobTabComponent from '../components/GovernmentJobTabComponent';
import LawbookTabComponent from '../components/LawbookTabComponent';
import BusinessesTabComponent from '../components/BusinessesTabComponent';

function App() {
  const Navigation = () => {
    return (
      <>
        <Container
          expand="lg"
        >
          <div style={{
            height: "64px",
            display: "flex",
            alignItems: "center"
          }}>
            <div id="logo-nav" style={{
              display: "flex",
              alignItems: "center"
            }}>
              <img alt="Canada Leaf" width="20px" height="20px" style={{
                marginRight: "10px"
              }} src={process.env.PUBLIC_URL + "/canada-leaf.png"} />
              <h5 style={{ margin: "0px" }}>Canada.gov</h5>
            </div>

            <div id="tabs" style={{
              alignItems: "center"
            }}>
              <Pane marginLeft="50px">
                <Tablist>
                  {tabs.map((tab, index) => (
                    <Tab
                      key={tab.name}
                      id={tab.name}
                      onSelect={() => setSelectedIndex(index)}
                      isSelected={index === selectedIndex}
                      aria-controls={`panel-${tab.name}`}
                    >
                      {tab.name}
                    </Tab>
                  ))} 
                </Tablist>
              </Pane>
            </div>
          </div>
        </Container>

        <div style={{
          borderBottom: "1px solid #edeff5"
        }} />
      </>
    )
  }

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [tabs] = useState([
    { name: "Home", component: <HomeTabComponent /> },
    { name: "Resources", component: <ResourcesTabComponent /> },
    { name: "Citizenship", component: <CitizenshipTabComponent /> },
    { name: "Government Jobs", component: <GovernmentJobTabComponent />},
    { name: "Lawbook", component: <LawbookTabComponent />},
    { name: "Businesses", component: <BusinessesTabComponent />},
  ]);

  return (
    <div className="App">
      <Navigation />

      <Container
        expand="lg"
        style={{
          marginTop: "20px"
        }}
      >
        <h1 style={{
          marginBottom: "8px"
        }}>{tabs[selectedIndex].name}</h1>

        <div style={{
          borderBottom: "1px solid #edeff5",
          marginBottom: "20px"
        }} />

        {tabs[selectedIndex].component}
      </Container>
    </div>
  );
}

export default App;

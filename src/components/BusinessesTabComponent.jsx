import { useEffect, useState } from "react";
import axios from "axios";

import {
  Tablist,
  Pane,
  SidebarTab,
  Spinner,
  Alert,
  Table,
  Badge
} from "evergreen-ui";

const BusinessesTabComponent = () => {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ businesses, setBusinesses ] = useState(null);

  useEffect(() => {
    axios.post("https://brixybot.bubbleapps.io/version-test/api/1.1/wf/canada::getbusinesses")
      .then((response) => {
        setBusinesses(response.data.response.businesses);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const TabComponent = () => {
    return (
      <Pane display="flex" height={"100%"}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <SidebarTab
              key={tab.name}
              id={tab.name}
              onSelect={() => setTabSelectedIndex(index)}
              isSelected={index === tabSelectedIndex}
              aria-controls={`panel-${tab.name}`}
            >
              {tab.name}
            </SidebarTab>
          ))}
        </Tablist>
        <Pane padding={16} background="tint1" flex="1" borderRadius={4}>
          {tabs.map((tab, index) => (
            <Pane
              key={tab.name + index}
              id={`panel-${tab.name + index}`}
              role="tabpanel"
              aria-labelledby={tab.name + index}
              aria-hidden={index !== tabSelectedIndex}
              display={index === tabSelectedIndex ? "block" : "none"}
            >
              {tab.content}
            </Pane>
          ))}
        </Pane>
      </Pane>
    );
  }

  const BusinessTableComponent = () => {
    const [search, setSearch] = useState("");
    const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
    
    return (
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell
            value={search || ""}
            onChange={(e) => {
              setSearch(e);
              
              setFilteredBusinesses(
                businesses.filter((business) => {
                  return business.registeredName.toLowerCase().includes(e.toLowerCase());
                })
              );
            }}
          />
          <Table.TextHeaderCell>Active</Table.TextHeaderCell>
          <Table.TextHeaderCell>Registered</Table.TextHeaderCell>
          <Table.TextHeaderCell>Founders</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={360}>
          {filteredBusinesses.map((business, index) => (
            <Table.Row key={business._id}>
              <Table.TextCell>{business.registeredName}</Table.TextCell>
              <Table.Cell>
                {business.active ? (
                  <Badge color="green">Active</Badge>
                ) : (
                  <Badge color="red">Inactive</Badge>
                )}
              </Table.Cell>
              <Table.TextCell isNumber>
                {business.registeredYear}
              </Table.TextCell>
              <Table.TextCell>{business.founders.join(", ")}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const tabs = [
    {
      name: "Businesses",
      content: (
        <>
          <h3>Registered Businesses in Canada</h3>
          <p>
            Want to register your business in Canada, but not sure if your name is already in use? Use this tool to easily search and find out.
          </p>

          { loading ? (
            <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
              <Spinner />
            </Pane>
          ) : error ? (
            <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
              <Alert intent="danger" 
                title="Whoops! Something went wrong."
              >
                {error.message}
              </Alert>
            </Pane>
          ) : (
            <>
              <BusinessTableComponent />
            </>
          )}
        </>
      )
    }
  ];

  return (
    <>
      <TabComponent />
    </>
  );
}

export default BusinessesTabComponent;
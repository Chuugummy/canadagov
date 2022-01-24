import { Alert, Pagination, Pane, Tablist, Tab } from "evergreen-ui";
import { Col, Row } from "react-bootstrap";

import { useState } from "react";

import HomeResourcesComponent from "./HomeResourcesComponent";

const HomeTabComponent = () => {
  const QuickNavigationTile = (props) => {
    const {
      title,
      body,
      scrollTo
    } = props.nav;

    return (
      <Col xs={12} md={4} style={{
        borderLeft: "3px solid #3366FF",
        cursor: "pointer"
      }} onClick={() => {
        document.getElementById(scrollTo).scrollIntoView({
          behavior: "smooth"
        });
      }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Col>
    )
  }

  return (
    <>
      <Alert intent="none" title="Welcome to Canada.gov!" marginBottom={32}>
        This site is a work in progress, you may experience some bugs.
      </Alert>

      <Row
        style={{
          marginBottom: 32,
        }}
      >
        <QuickNavigationTile
          nav={{
            title: "Resources",
            body: "Find information about the government of Canada.",
            scrollTo: "home-resources",
          }}
        />
        <QuickNavigationTile
          nav={{
            title: "Citizenship",
            body: "Learn about the Canadian citizenship process.",
            scrollTo: "home-citizenship",
          }}
        />
        <QuickNavigationTile
          nav={{
            title: "Events",
            body: "Find information about upcoming events.",
            scrollTo: "home-events",
          }}
        />
      </Row>

      <div
        style={{
          borderBottom: "1px solid #edeff5",
          marginBottom: "32px",
        }}
      />

      <div id="home-resources">
        <HomeResourcesComponent />
      </div>

      <div
        style={{
          borderBottom: "1px solid #edeff5",
          marginBottom: "32px",
        }}
      />

      <div id="home-citizenship">
        <h3>Citizenship</h3>
        <p>Learn about the Canadian citizenship process.</p>

        <p>
          Canada uses a digital citizenship registration system to move away from the traditional paper-based system. Paper-based citizenship registration is a time-consuming process that requires you to complete a series of paperwork and pay a fee.
          Digital citizenship registration is a much faster and easier process that requires you to complete a very short, simple registration process. Digital citizenship is also far more secure, due to the fact that it is signed by the blockchain.
        </p>

        <h5>How do I apply for Canadian citizenship?</h5>
        <p>
          You can apply for Canadian citizenship by accessing the <strong>Citizenship</strong> tab on the navigation bar.
        </p>

        <h5>What are the requirements to be a Canadian citizen?</h5>
        <p>
          <ul>
            <li>
              You must be a citizen of Canada.
            </li>
            <li>
              You must have valid documentation required by the border you're passing. You can see each respective border's requirements in the <strong>Citizenship</strong> tab.
            </li>
          </ul>
        </p>
      </div>

      <div
        style={{
          borderBottom: "1px solid #edeff5",
          marginBottom: "32px",
        }}
      />

      <div id="home-events">
        <h3>Events</h3>
        <p>Find information about upcoming events, like openings of new government buildings, etc.</p>

        <h5>Planned Events</h5>
        <ul>
          <li>
            <strong>Opening of border with Socialist Republic of Toronto</strong>
            <p>A border crossing with Socialist Republic of Toronto will be opened soon!</p>
          </li>
          <li>
            <strong>Opening of the Toronto Police Department</strong>
            <p>The Toronto Police Department will be opened and ready to serve Toronto on the 24th of January!</p>
          </li>
        </ul>

        <small>There are no more planned events.</small>
      </div>
    </>
  );
};

export default HomeTabComponent;

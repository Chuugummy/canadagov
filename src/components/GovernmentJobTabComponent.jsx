import { Badge, Icon, SideSheet, Pane, Heading, Paragraph, Tablist, Tab, Card } from "evergreen-ui";
import { Col, Row } from "react-bootstrap";

import { useState } from "react";

const GovernmentJobTabComponent = () => {
  const JobSelectionItem = (props) => {
    const {
      title,
      body,
      detailedJobInfo,
      detailedJobRequirements,
      detailedJobIncome,
      subtitle
    } = props.nav;

    const [isShown, setIsShown] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [tabs] = useState([
      {
        title: "Information",
        content: (
          <>
            {detailedJobInfo}
          </>
        )
      },
      {
        title: "Requirements",
        content: (
          <>
            {detailedJobRequirements}
          </>
        )
      },
      {
        title: "Income",
        content: (
          <>
            {detailedJobIncome}
          </>
        )
      }
    ]);

    return (
      <>
        <SideSheet
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          containerProps={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
          }}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16} borderBottom="muted">
              <Heading size={600}>{title}</Heading>
              <Paragraph size={400} color="muted">
                {subtitle}
              </Paragraph>
            </Pane>
            <Pane display="flex" padding={8}>
              <Tablist>
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab.title}
                    isSelected={selectedIndex === index}
                    onSelect={() => setSelectedIndex(index)}
                  >
                    {tab.title}
                  </Tab>
                ))}
              </Tablist>
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <Card
              backgroundColor="white"
              elevation={0}
              height={"100%"}
              padding={16}
            >
              {tabs[selectedIndex].content}
            </Card>
          </Pane>
        </SideSheet>

        <Col xs={12} md={4} style={{
          borderLeft: "3px solid #3366FF",
          cursor: "pointer"
        }} onClick={() => {
          setIsShown(true);
        }}>
          <h3>{title}</h3>
          <p>{body}</p>
        </Col>
      </>
    );
  }

  return (
    <>
      <p>
        This page contains all the government jobs you can apply for in Canada.
        Note that eligibility requirements vary by job.
      </p>
      <Row
        style={{
          marginBottom: "32px",
        }}
      >
        <JobSelectionItem
          nav={{
            title: "Police Officer",
            body: "Maintain the security of the country and its citizens.",
            subtitle: "Maintain peace and order.",
            detailedJobInfo: (
              <>
                <p>
                  Police officers are responsible for enforcing the law and
                  protecting the public. They are also responsible for
                  maintaining the integrity of the government and its citizens.
                  Officers have the sole responsibility for maintaining Canada
                  and its government systems.
                </p>

                <p>
                  Police officers are not paid by the government. They are paid
                  by the local government, so the central government does not
                  determine the officers payment. The salary of a police officer
                  is not based on the level of education or the level of
                  experience.
                </p>

                <h5>Opportunities</h5>

                <ul>
                  <li>
                    <p>Ability to work in a team</p>
                  </li>
                  <li>
                    <p>Ability to work in a fast-paced environment</p>
                  </li>
                  <li>
                    <p>Ability to work in a secure environment</p>
                  </li>
                </ul>
              </>
            ),
            detailedJobRequirements: (
              <>
                <p>
                  There are virtually no requirements for a police officer.
                  However, there are some requirements for a police officer to
                  be successful.
                </p>

                <ul>
                  <li>
                    <p>You must not have a criminal record</p>
                  </li>
                  <li>
                    <p>You must have a valid driver's license</p>
                  </li>
                  <li>
                    <p>You must have a valid passport</p>
                  </li>
                  <li>
                    <p>You must have a valid health card</p>
                  </li>
                  <li>
                    <p>You must have a valid work permit</p>
                  </li>
                </ul>
              </>
            ),
            detailedJobIncome: (
              <>
                <p>
                  Salaries for each respective law enforcement role are as
                  following:
                </p>

                <ul>
                  <li>
                    <p>
                      Core Police Officer: <strong>$1,800 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Special Police Officer: <strong>$2,000 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Lieutenant: <strong>$2,500 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Captain: <strong>$3,000 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Major: <strong>$3,500 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Lieutenant Commander:{" "}
                      <strong>$4,000 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Commander: <strong>$4,500 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Chief: <strong>$5,000 / month</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Police Chief of Police: <strong>$5,500 / month</strong>
                    </p>
                  </li>
                </ul>
              </>
            ),
          }}
        />

        <JobSelectionItem
          nav={{
            title: "Redstone Engineer",
            body: "Build and repair redstone powered structures.",
            subtitle: "Build and repair redstone powered structures.",
            detailedJobInfo: (
              <>
                <p>
                  Redstone engineers are responsible for building and repairing redstone powered structures. They are also responsible for maintaining the integrity of government buildings and civil infrastructure.
                </p>

                <p>
                  Redstone engineers are paid by the government. The salary of a redstone engineer is based on the level of education and experience.
                </p>

                <h5>Opportunities</h5>

                <ul>
                  <li>
                    <p>Ability to work in a fast-paced environment</p>
                  </li>
                  <li>
                    <p>Ability to learn while doing work</p>
                  </li>
                  <li>
                    <p>Ability to collaborate with other engineers</p>
                  </li>
                </ul>
              </>
            ),
            detailedJobRequirements: (
              <>
                <p>The only requirement is that you need a bachelor's degree in engineering or a related field.</p>
              </>
            ),
            detailedJobIncome: (
              <>
                <p>The average salary for an engineer is <strong>$2,800 / month</strong>.</p>
              </>
            )
          }}
        />

        <JobSelectionItem
          nav={{
            title: "Ministry of Admissions Border Inspector",
            body: "Grant access to or deny entry to applicants.",
            subtitle: "Grant access to or deny entry to applicants.",
            detailedJobInfo: (
              <>
                <p>
                  Border inspectors are responsible for inspecting and granting access to or denying entry to applicants. Border inspectors have a very
                  large role in keeping terrorists and criminals out of Canada.
                </p>

                <p>
                  Border inspects are chosen by a labour lottery every 4 years in October. When chosen, the inspector will immediately begin work the following
                  day after being admitted. The inspector will be paid by the government, specifically the Ministry of Admissions (MOA).
                </p>

                <h5>Opportunities</h5>

                <ul>
                  <li>
                    <p>Work in a secure environment</p>
                  </li>
                  <li>
                    <p>Make money doing simple things</p>
                  </li>
                  <li>
                    <p>Help in maintaining Canadas integrity</p>
                  </li>
                </ul>
              </>
            ),
            detailedJobRequirements: (
              <>
                <p>
                  To become a border inspector, you must be a citizen of Canada and have a high school diploma. You will need to be a Canadian citizen
                  for 4 years, or have a family member that has served in the armed forces for 4 years.
                </p>
              </>
            ),
            detailedJobIncome: (
              <>
                <p>
                  The salary for a border inspector is determined by their performance every week, and the amount of applicants they denied entry to or
                  granted entry to Canada to. A good week of work will earn you <strong>$1,000</strong> per week.
                </p>
              </>
            )
          }}
        />
      </Row>
    </>
  );
}

export default GovernmentJobTabComponent;
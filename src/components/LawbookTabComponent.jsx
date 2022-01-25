import {
  Pane,
  Tablist,
  SidebarTab,
  Table,
  Badge
} from "evergreen-ui";

import { useState } from "react";

const LawbookTabComponent = () => {
  const LawbookTabItem = () => {
    return (
      <Pane display="flex" height={"100%"}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {lawsTabs.map((tab, index) => (
            <SidebarTab
              key={tab.name}
              id={tab.name}
              onSelect={() => setLawsSelectedIndex(index)}
              isSelected={index === lawsSelectedIndex}
              aria-controls={`panel-${tab.name}`}
            >
              {tab.name}
            </SidebarTab>
          ))}
        </Tablist>
        <Pane padding={16} background="tint1" flex="1" borderRadius={4}>
          {lawsTabs.map((tab, index) => (
            <Pane
              key={tab.name + index}
              id={`panel-${tab.name + index}`}
              role="tabpanel"
              aria-labelledby={tab.name + index}
              aria-hidden={index !== lawsSelectedIndex}
              display={index === lawsSelectedIndex ? "block" : "none"}
            >
              {tab.content}
            </Pane>
          ))}
        </Pane>
      </Pane>
    );
  }

  const getSeverityBadge = (severity) => {
    severity = severity.toLowerCase();
    switch (severity) {
      case "low":
        return <Badge color="yellow">Low</Badge>;
      case "medium":
        return <Badge color="orange">Medium</Badge>;
      case "high":
        return <Badge color="red">High</Badge>;
      default:
        return <Badge color="red">Extreme</Badge>;
    }
  }

  const crimes = [
    {
      name: "Burglary",
      severity: "Medium",
      usualPunishment: "Imprisonment",
    },
    {
      name: "Theft",
      severity: "Medium",
      usualPunishment: "Imprisonment",
    },
    {
      name: "Assault",
      severity: "High",
      usualPunishment: "Fine",
    },
    {
      name: "Battery",
      severity: "High",
      usualPunishment: "Imprisonment",
    },
    {
      name: "Malicious Destruction",
      severity: "Medium",
      usualPunishment: "Fine",
    },
    {
      name: "Manslaughter",
      severity: "Extreme",
      usualPunishment: "Imprisonment or Capital Punishment",
    },
    {
      name: "Murder 1st Degree",
      severity: "Extreme",
      usualPunishment: "Imprisonment or Capital Punishment",
    },
    {
      name: "Murder 2nd Degree",
      severity: "High",
      usualPunishment: "Imprisonment",
    },
    {
      name: "Murder 3rd Degree",
      severity: "High",
      usualPunishment: "Imprisonment",
    },
    {
      name: "Possession of Poisonous Substances",
      severity: "Medium",
      usualPunishment: "Fine",
    },
    {
      name: "Robbery",
      severity: "High",
      usualPunishment: "Fine",
    },
    {
      name: "Extortion",
      severity: "High",
      usualPunishment: "Fine",
    },
    {
      name: "Terrorism",
      severity: "Extreme",
      usualPunishment: "Capital Punishment",
    },
    {
      name: "Malice",
      severity: "Low",
      usualPunishment: "Fine",
    },
    {
      name: "Misuse of Firearm",
      severity: "High",
      usualPunishment: "Seizure of Firearm License, Imprisonment, or Fine",
    },
    {
      name: "Misuse of Drug",
      severity: "High",
      usualPunishment: "Imprisonment or Fine",
    },
    {
      name: "Illegal Border Crossing",
      severity: "Medium",
      usualPunishment: "Arrest and Extradition or High Prison",
    },
    {
      name: "Border Crossing with Intent to Commit Crime",
      severity: "High",
      usualPunishment: "Arrest and Extradition or High Prison",
    },
    {
      name: "Possession of Explosive Device",
      severity: "Extreme",
      usualPunishment: "Capital Punishment",
    },
    {
      name: "Importation of Illegal Goods",
      severity: "Extreme",
      usualPunishment: "Imprisonment and Extradition or High Prison",
    },
    {
      name: "Fleeing the State",
      severity: "Extreme",
      usualPunishment: "Imprisonment or Capital Punishment upon extradition",
    },
    {
      name: "Possession of Stolen Property",
      severity: "High",
      usualPunishment: "Fine",
    },
  ];

  const [lawsSelectedIndex, setLawsSelectedIndex] = useState(0);
  const [lawsTabs] = useState([
    { name: "Section 1 - Introduction", content: (
      <>
        <h3>Introduction</h3>
        
        <p>
          These laws are a part of the <strong>Canada's Constitution</strong> and are the basis for the life of the people of Canada.
          The laws are divided into sections, which are divided into subsections.
        </p>

        <h5>Introduction - Passing New Laws</h5>

        <p>
          New laws are constituted by constituents of the House of Commons. The House of Commons is the legislative body of the people of Canada.
          A law requires a majority of the House of Commons to pass, usually by a two-thirds majority. Once a law is passed by the Commons, it is brought
          up in the House of the People. The House of the People is the legislative body where the final decision is made on whether or not the law will be passed.

          <br />
          <br />

          If the law is approved by the House of the People, it is finally sent to the Prime Minister for approval. The Prime Minister is the head of government.
          If the Prime Minister approves the law, it is constituated as a law. If the Prime Minister rejects the law, the House of the People can override the decision,
          and file a complaint with the Canadian Court of Justice.
        </p>

        <h5>Introduction - Law Repealment</h5>

        <p>
          A law can be repealed by the House of Commons. The House of Commons can pass legislation to repeal a law. The Canadian Court of Justice will review the law
          and decide whether or not it can be repealed.
        </p>
      </>
    ) },
    { name: "Section 2 - Fundamental Rights", content: (
      <>
        <h3>Fundamental Rights</h3>

        <p>
          The fundamental rights of the people of Canada are:
        </p>

        <ul>
          <li>
            <strong>Freedom of Speech</strong> - the right to speak freely and without fear of being labeled as a threat to public order.
          </li>
          <li>
            <strong>Freedom of Religion</strong> - the right to worship and practice a religion.
          </li>
          <li>
            <strong>Freedom of Assembly</strong> - the right to assemble and hold public meetings.
          </li>
          <li>
            <strong>Freedom of Press</strong> - the right to press and publish.
          </li>
          <li>
            <strong>Right of Revolution</strong> - the right to organize and change government.
          </li>
          <li>
            <strong>Freedom of Petition</strong> - the right to petition the government.
          </li>
          <li>
            <strong>Right of a Fair and Legal Process</strong> - the right to a fair and legal procession.
          </li>
          <li>
            <strong>Right to a Just Process</strong> - the right to a just process in court.
          </li>
          <li>
            <strong>Right to an Attorneys General</strong> - the right to an Attorney General.
          </li>
          <li>
            <strong>Right to a Re-trial</strong> - the right to a re-trial.
          </li>
        </ul>

        <p>
          The fundamental rights of the people of Canada are not limited to the above.
        </p>

        <p>
          A fundamental right is a human right that our founders believed would be essential to the survival of our nation and to the
          happiness of our people.
        </p>
      </>
    ) },
    { name: "Section 3 - Firearms", content: (
      <>
        <h3>Firearms</h3>

        <p>
          The Canadian Constitution does not give any specific laws regarding firearms. However, the Canadian Constitution does give a general law regarding
          firearms. The law in short states that: "No person shall be convicted of a felony for the possession of a firearm unless proven guilty of unlawful
          actions with a firearm." This law is not limited to firearms. A  firearm is a device that fires a projectile in order to kill or injure another person or animal.

          <br />
          <br />

          The law also states that any persons under the age of 18 are not allowed to possess a firearm, and that the firearm owner must be a registered Canadian citizen.

          <br />
          <br />

          The following variants of firearms are illegal and owning such a weapon is a felony:

          <ul>
            <li>
              <strong>Assault weapons</strong> - weapons that fires high caliber ammunition at a high rate of fire and are designed to inflict serious injury.
            </li>
            <li>
              <strong>Machine guns</strong> - weapons that fires at a very high rate of fire and are designed to inflict serious injury to large groups of people quickly.
            </li>
          </ul>
          
          The following weapon attachments are illegal and are considered a felony:

          <ul>
            <li>
              <strong>Silencer</strong> - muzzle device that reduces the acoustic intensity of the muzzle report and the recoil when a weapon is fired.
            </li>
            <li>
              <strong>Bump-stock</strong> - a device that is attached to the trigger of a firearm that allows the user to fire the weapon as if it were automatic.
            </li>
            <li>
              <strong>Sawed-off shotgun barrels</strong> - sawed-off shotgun barrels allow easy concealment and maneuverability of the weapon.
            </li>
          </ul>

          The punishments for owning an illegal firearm or attachment can include lengthy imprisonment, fines, seizure of property, and/or imprisonment for life.
          <br />
          <br />
        </p>
      </>
    ) },
    { name: "Section 4 - Internet Privacy", content: (
      <>
        <h3>Internet Privacy</h3>

        <p>
          Canada believes that privacy on the Internet is a human right. Therefore, knowingly collecting personal information from users of the Internet is illegal.
          To gain consent to collect personal information from users of the Internet, use cookie prompts and describe the purpose of the information being collected.

          <br />
          <br />

          Collecting this data from users is illegal and can be punishable by seizure of domains, servers, and/or imprisonment:

          <ul>
            <li>
              <strong>Address</strong> - the physical address of the user. (this does not include collecting postal addresses or confirming a users identity.)
            </li>
            <li>
              <strong>Voting Record</strong> - the voting record of the user.
            </li>
            <li>
              <strong>UUIX ID</strong> - the unique user identification number of the user.
            </li>
            <li>
              <strong>Social Security Number</strong> - the social security number of the user. (this does include verifying a users identity.)
            </li>
          </ul>

          This is not a comphrensive list. You can call the Canadian Ministry of Privacy and Safety to learn more about the laws regarding the collection of personal
          information.
        </p>
      </>
    ) },
    { name: "Section 5 - Government Reform", content: (
      <>
        <h3>Government Reform</h3>

        <p>
          Canada believes that government reform is a human right. Therefore, it is legal to pressure the government to change its policies if it is not in line with
          the people.

          <br />
          <br />

          The following are examples of government reform:

          <ul>
            <li>
              <strong>Taxes</strong> - reform can be done to the taxes.
            </li>
            <li>
              <strong>Diplomatic Relations</strong> - reform can influence Canadian foreign relations.
            </li>
            <li>
              <strong>Military</strong> - reform can be done to the military.
            </li>
          </ul>

          This is not a comphrensive list. You can call the Canadian Ministry of Community Relations to learn more about the laws regarding government reform.
        </p>
      </>
    ) },
    { name: "Section 6 - Crimes", content: (
      <>
        <h3>Crimes</h3>

        <p>
          The table below lists all crimes in Canada. The table is not exhaustive and may not be a complete list of crimes.
        </p>

        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Crime</Table.TextHeaderCell>
            <Table.TextHeaderCell>Severity</Table.TextHeaderCell>
            <Table.TextHeaderCell>Usual Punishment</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height={360}>
            {crimes.map((crime) => (
              <Table.Row key={Math.floor() * Math.random()}>
                <Table.TextCell>{crime.name}</Table.TextCell>
                <Table.TextCell>{getSeverityBadge(crime.severity)}</Table.TextCell>
                <Table.TextCell>{crime.usualPunishment}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    ) },
  ]);

  return (
    <>
      <LawbookTabItem />
    </>
  );
}

export default LawbookTabComponent;
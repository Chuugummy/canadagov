import {
  Pane,
  Tablist,
  Tab,
  SidebarTab
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
  ]);

  return (
    <>
      <LawbookTabItem />
    </>
  );
}

export default LawbookTabComponent;
import {
  Pane,
  Tablist,
  Tab
} from "evergreen-ui";

import { useState } from "react";

const HomeResourcesComponent = () => {
  const HomeResourcesTabComponent = () => {
    return (
      <Pane marginBottom="15px">
        <Tablist>
          {homeResourcesTabs.map((tab, index) => (
            <Tab
              key={tab.name}
              id={tab.name}
              onSelect={() => setHomeResourcesSelectedIndex(index)}
              isSelected={index === homeResourcesSelectedIndex}
              aria-controls={`panel-${tab.name}`}
            >
              {tab.name}
            </Tab>
          ))}
        </Tablist>
      </Pane>
    );
  }

  const [homeResourcesSelectedIndex, setHomeResourcesSelectedIndex] = useState(0);
  const [homeResourcesTabs] = useState([
    { name: "Online Banking", content: (
      <>
        <p>Canada uses a digital banking system to provide you with access to your financial information and services. You can access your account online at any time, anywhere, and from any device.</p>
        <h5>Why?</h5>
        <p>
          Online banking is a convenient way to access your financial information and services. Like mentioned above, you can access your account online at any time, anywhere, and from any device.
          Online banking also provides you with the ability to make payments and transfer funds to other accounts. Unlike traditional banking, online banking is completely secure and easy to use.
        </p>
      </>
    ) },
    { name: "Digital Citizenship", content: (
      <>
        <p>
          Canada uses a digital citizenship registration system to move away from the traditional paper-based system. Paper-based citizenship registration is a time-consuming process that requires you to complete a series of paperwork and pay a fee.
          Digital citizenship registration is a much faster and easier process that requires you to complete a very short, simple registration process.
        </p>

        <h5>How do I apply for Canadian citizenship?</h5>
        <p>
          You can apply for Canadian citizenship by accessing the <strong>Citizenship</strong> tab on the navigation bar.
          You will be asked a series of questions including your nationality, family information, etc. After the questionnarie, the system will determine if you're eligible
          to be a Canadian citizen.
          <br />
          <br />
          If you are, you will be given the proper information to retrieve your digital citizenship information.
          <br />
          <br />
          If you are not, you will be given the option to re-apply for Canadian citizenship, there is no limit or fee to re-apply.
        </p>
      </>
    ) },
    { name: "Applying for Government Benefits", content: (
      <>
        <p>
          You can apply for government benefits by visiting the Ministry of Labour's office in Toronto. The office is open Monday through Friday, 5:00 p.m. to 7:00 p.m.
        </p>

        <h5>What government benefits am I eligible for?</h5>
        <p>
          You can apply for the following government benefits:
          <br />
          <br />
          <ul>
            <li>
              <strong>Pension</strong>
              <p>Pension is a form of financial assistance that pays you for your work. You can apply for a pension by visiting the Ministry of Labour's office in Toronto.</p>
            </li>
            <li>
              <strong>Disability</strong>
              <p>Applying for a disability will provide you with a disability pension and a disability pension credit.</p>
            </li>
            <li>
              <strong>Veteran Status</strong>
              <p>Applying for veteran status will provide you with a veteran pension and a veteran pension credit of upwards of $2,500.</p>
            </li>
            <li>
              <strong>Severe Sickness Relief</strong>
              <p>Applying for severe sickness relief will provide you with a severe sickness pension and a severe sickness pension credit of upwards of $10,000.</p>
            </li>
          </ul>
          
          The Ministry of Labours office will determine your eligibility for each benefit.
        </p>
      </>
    ) }
  ]);

  return (
    <>
      <h3>Resources</h3>
      <p>Find information about the government of Canada, and about the country itself.</p>

      <HomeResourcesTabComponent />
      {homeResourcesTabs[homeResourcesSelectedIndex].content}
    </>
  );
}

export default HomeResourcesComponent;
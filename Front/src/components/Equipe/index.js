import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import damien from './damien.jpg';
import amelie from './ameliie.png';
import dimitri from './dimitribachere.jpg';
import jordan from './jdcv - Copie.jpg';
import linkedin from './linkedin.svg';

import './ekip.scss';

const Ekip = () => (
  <div className="containerEquipe">
    <div className="TeamBack">
      <h2 className="team">Team Back</h2>
      <div className="photos">
        <Card>
          <Image src={damien} className="Damien" />
          <Card.Content>
            <Card.Header>Damien Valet</Card.Header>
            <Card.Meta>
              <span className="date">Scrum master</span>
            </Card.Meta>
            <Card.Description>
              Responsable Git

              <a target="_blank" href="https://www.linkedin.com/in/damienvalet/" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className="socials" />
              </a>
            </Card.Description>
          </Card.Content>

        </Card>
        <Card>
          <img src={amelie} className="Amelie" alt="Amélie" />
          <Card.Content>
            <Card.Header>Amélie Sausseau</Card.Header>
            <Card.Meta>
              <span className="date">Lead Dev Back</span>
            </Card.Meta>
            <Card.Description>
              <a target="_blank" href="https://www.linkedin.com/in/amelie-sausseau/" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className="socials socialsAmelie" />
              </a>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </div>
    <div className="TeamBack">
      <h2 className="team">Team Front</h2>
      <div className="photos">
        <Card>
          <img src={dimitri} alt="Dimitri" className="dimitrii" />
          <Card.Content>
            <Card.Header>Dimitri Bachère</Card.Header>
            <Card.Meta>
              <span className="date">Lead Dev Front</span>
            </Card.Meta>
            <Card.Description>
              <a target="_blank" href="https://www.linkedin.com/in/dimitri-bach%C3%A8re-4a6920192/" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className="socials" />
              </a>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <img src={jordan} alt="jordan" className="jordan" />
          <Card.Content>
            <Card.Header>Jordan DUPONT</Card.Header>
            <Card.Meta>
              <span className="date">Product Owner</span>
            </Card.Meta>
            <Card.Description>
              <a target="_blank" href="https://www.linkedin.com/in/jordan-dupont/" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className="socials" />
              </a>
            </Card.Description>
          </Card.Content>

        </Card>
      </div>
    </div>
  </div>
);

export default Ekip;

import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import CheckboxButtons from '../components/CheckboxButtons/CheckboxButtons';

const stateNormal = {
  isRich: false,
  title: 'правила дома',
  items: [
    {
      text: 'Можно курить',
      checked: false,
    },
    {
      text: 'Можно с питомцами',
      checked: true,
    },
    {
      text: 'Можно пригласить гостей (до 10 человек)',
      checked: true,
    },
  ],
};

const stateRich = {
  isRich: true,
  title: 'доступность',
  items: [
    {
      title: 'Широкий коридор',
      text: 'Ширина коридоров в номере не менее 91 см.',
      checked: false,
    },
    {
      title: 'Помощник для инвалидов',
      text: 'На 1 этаже вас встретит специалист  и проводит до номера.',
      checked: false,
    },
  ],
};

const Index = (): ReactElement => (
  <Layout title="landing page" pageClass="landing">
    <div className="container">
      <div className="firstExample">
        <CheckboxButtons
          isRich={stateNormal.isRich}
          title={stateNormal.title}
          items={stateNormal.items}
        />
      </div>
      <div className="secondExample">
        <CheckboxButtons
          isRich={stateRich.isRich}
          title={stateRich.title}
          items={stateRich.items}
        />
      </div>
    </div>

    <style jsx>{`
      .container {
        padding: 20px;
      }
      .firstExample {
        max-width: 222px;
      }
      .secondExample {
        padding-top: 50px;
        max-width: 266px;
      }
    `}</style>
  </Layout>
);

export default Index;

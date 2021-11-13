import type { ReactElement } from 'react';
import DropdownRoom from '../components/DropdownRoom/DropdownRoom';

const Index = (): ReactElement => (
  <div style={{margin:'30px'}}>
  <DropdownRoom placeholder='2 спальни, 2 кровати' values = {[
    {
      text: 'Спальни',
      value: 2,
      spellCases: ['спальня', 'спальни', 'спален'],
    },
    {
      text: 'Кровати',
      value: 2,
      spellCases: ['кровать', 'кровати', 'кроватей'],
    },
    {
      text: 'Ванные комнаты',
      value: 0,
      spellCases: ['ванная', 'ванные', 'ванных'],
    },
  ]
  }/>  
  </div>
);

export default Index;

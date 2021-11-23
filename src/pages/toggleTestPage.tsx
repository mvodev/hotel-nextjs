/* eslint-disable no-console */
import type { ReactElement, PropsWithChildren } from 'react';

import Toggle from '../components/Toggle/Toggle';

interface ILayoutProps {
  pageClass: string;
  title?: string;
}

const Layout = ({
  pageClass,
}: PropsWithChildren<ILayoutProps>): ReactElement => (
  <>
    <main className={pageClass} style={{margin:'100px'}}>
      <Toggle {...{
        isChecked:false,
        description:"Получать умопомрачительные спецпредложения",
        }}/>
      <div style={{marginBottom:'50px'}}/>
      <Toggle {...{
        isChecked:true,
        description:"Получать спецпредложения"}}/>
    </main>

  </>
);

export default Layout;


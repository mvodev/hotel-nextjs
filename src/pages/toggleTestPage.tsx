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
        onChange:()=>{},
        id:'toggle1'
        }}/>
      <div style={{marginBottom:'50px'}}/>
      <Toggle {...{
        isChecked:true,
        description:"Получать вау спецпредложения",
        onChange:()=>{},
        id:"toggle2"}}/>
    </main>

  </>
);

export default Layout;


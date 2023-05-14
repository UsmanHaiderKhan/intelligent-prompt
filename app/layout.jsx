import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';

export const metadata = {
    title:'Intelligent-Prompt',
    description: 'Discover & share the Intelligent Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <div className='app'>
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
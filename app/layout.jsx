
//apply CSS to our entire app
import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

//metadata is used for SEO  
export const metadata = {
    title: "Prompt-astic",
    description: "A fantastic prompt generator for writers"
}
//this is the layout for our entire app
//children is used as props to pass in the content of the page
const RootLayout = ({ children}) => {
  return (
    <html lang='en'>
        <body>
            {/* authentication */}
            <Provider>
                <div className='main'>
                    {/* change the background color */}
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout;
import Header from './Header'
import Head from 'next/head'

function Layout({children}) {
    return (
        <>
        <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"rel="stylesheet"/>
        </Head>
        <Header />
        <div>
            {children}
        </div>
        </>
    )
}

export default Layout

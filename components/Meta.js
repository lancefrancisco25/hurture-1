import Head from "next/head";

const Meta = ({title, keywords, description}) => {
    return(
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8"/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>
            <link rel='icon' href='/favico.ico'/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Hurture',
    keywords: 'hurture, help, new twitter, help,',
    description: 'This is our amazing description'
}

export default Meta
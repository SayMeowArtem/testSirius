import styled from '@emotion/styled'
import Head from "next/head";
import {ComponentType, ReactElement} from "react";

interface MainLayoutPropsInterface {
    title: string
}

interface MainContainerPropsInterface {
    src: string
}

const MainContainer: ComponentType<MainContainerPropsInterface> = styled.div<MainContainerPropsInterface>`
    background-image: url(${ props => props.src});
    width: 70%;
    height: 100vh;
    margin: 0px auto;
    background-size: cover;
    overflow: hidden;
`

const MainLayout: React.FC<MainLayoutPropsInterface> = ({children, title = 'Test App'}): ReactElement => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <MainContainer src='./background.png'>
                {children}
            </MainContainer>
        </>
    )
}

export default  MainLayout
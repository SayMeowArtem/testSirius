import {ReactElement} from "react";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import styled from "@emotion/styled";
import {generateNumber} from "./index"


const AsteroidItem = styled.div`
    background-image: url(${'./aster.png'});
    background-size: cover;
    min-width: 180px;
    min-height: 165px;
    text-align: center;
    line-height: 160px;
    font-size: 50px;
    color: #fff;
    margin-right: 7px;
`

const Asteroid: React.FC = (): ReactElement => {
    return (
        <MainLayout title="My Test | Asteroid Page">
            <Link href='/'><a style={{position: 'absolute', left: '20px', top: '20px'}}>{'<- Back to star page...'}</a></Link>
                <div style={{display: 'flex', padding: '30% 15%', alignItems: 'center', alignContent: 'center'}}>
                    <AsteroidItem>{generateNumber()}</AsteroidItem>
                    <AsteroidItem>{generateNumber()}</AsteroidItem>
                    <AsteroidItem>{generateNumber()}</AsteroidItem>
                    <AsteroidItem>{generateNumber()}</AsteroidItem>
                    <AsteroidItem>{generateNumber()}</AsteroidItem>
                </div>
        </MainLayout>
    )
}

export default Asteroid


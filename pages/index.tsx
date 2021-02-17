import MainLayout  from '../components/MainLayout/'
import styled from "@emotion/styled";
import Link from 'next/link';
import {ComponentType, ReactElement, useEffect, useState} from "react";
import {
    SyncOutlined,
} from '@ant-design/icons';


interface StarPropsInterface {
    src: string,
    speed: number
}

interface StarItemInterface {
    id: string,
    speed: number,
    number: number
}

interface StateInterface {
    items: StarItemInterface[],
    renderItemNumber: number
}

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20%;
    padding-top: -100px;
    text-align: center;
`

const RepeatBtn = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;
    border: none;
    background: none;
    &:focus {
    outline:none;
    }
`

const Star: ComponentType<StarPropsInterface> = styled.div<StarPropsInterface>`
    background-image: url(${props => props.src});
    background-size: contain;
    width: 100px;
    min-height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    color: #000;
    &:hover {
        transition: 1s;
        opacity: 0.2;
    }
    animation: star ${props => props.speed}ms infinite;
    @keyframes star {
      0% {
        transform: translateY(-10vh);
      }
      100% {
        transform: translateY(100vh);
      }
`

export const generateNumber =   (): number => Math.floor(Math.random() * (9 - (-9) + 1)) + (-9);

const Home: React.FC  = (): ReactElement => {
    const [state, setState] = useState<StateInterface>({
        items: [ {id: '1', speed: 5000, number: generateNumber()},
            {id: '2', speed: 4000, number: generateNumber()},
            {id: '3', speed: 3000, number: generateNumber()},
            {id: '4', speed: 2000, number: generateNumber()},
            {id: '5', speed: 10000, number: generateNumber()},
            {id: '6', speed: 8000, number: generateNumber()},
        ],
        renderItemNumber: 0
    });

    useEffect(() => {
        if (state.items.length > state.renderItemNumber) {
            setTimeout(() => setState({
                ...state,
                renderItemNumber: ++state.renderItemNumber
            }), 30);
    }},[state.renderItemNumber])

    const handleRepeat = (): void => {
        setState({
            ...state,
            renderItemNumber: 0
        })
    }

    return (
    <div>
        <MainLayout title="My Test | Star Page">
            <RepeatBtn title="Обновить падение" onClick={handleRepeat}>
                <SyncOutlined style={{ fontSize: '32px', color: '#08c' }} spin />
            </RepeatBtn>
            <Content>
                { state.items.slice(0,state.renderItemNumber).map( (item: StarItemInterface, index) => {
                        return (
                            <Star  key={index + item.id} src={'./star.png'} speed={Number(item.speed)}>
                                {item.number}
                            </Star>
                        )
                })}
            </Content>
            <Link href='/asteroid'><a style={{position: 'absolute', right: '20px', top: '20px'}}>{'Asteroids Page ->'}</a></Link>
        </MainLayout>
    </div>
  )
}

export default Home

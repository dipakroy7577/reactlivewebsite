import React from 'react'
import HomeSection from '../../HomeSection'
import Data from './Data'

const Home = () => {
    return (
        <>
        <HomeSection {...Data[0]}/>
        <HomeSection {...Data[1]}/>
        <HomeSection {...Data[2]}/>
        <HomeSection {...Data[3]}/>
        </>
    )
}

export default Home
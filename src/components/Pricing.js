import React from 'react'
import Link from 'react-router-dom'
import Button from './Button'
import {FaFire, BsXDimondFill} from 'react-icons/fa'
export const Pricing = () => {
    return (
        <>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <link to="/sign-up" className='pricing__cintainer-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'><FaFire/></div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Transections</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </link>
                        <link to="/sign-up" className='pricing__cintainer-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'><BsXDimondFill/></div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Transections</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </link>
                    </div>
                </div>
            </div>
        </>
    )
}

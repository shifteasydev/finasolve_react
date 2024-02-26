import React from 'react';
import '../Components/HomecardStyles.css';

import Solution from "../Assets/solution.svg";
import Regulation from "../Assets/regulation.svg";
import { Link } from 'react-router-dom';


const Homecard = () => {
    return (
        <div>
            <div className="card-master">
                <div className="card-left">
                    <Link to="/solutions">
                        <img src={Solution} alt="Card01-gif" />
                        <h2 className='card-title'>Solutions</h2>
                        <p className='card-description'>E2E Enterprise Global Data Solutions, Trading Screens, FIX Connectivity, Swift, Blockchain, Global ledger, Smart Contract based settlement.</p>
                    </Link>
                </div>
                <div className="card-right">
                    <Link to="/regulations">
                    <img src={Regulation} alt="Card01-gif" />
                    <h2 className='card-title'>Regulation</h2>
                    <p className='card-description'>Greater integration and compliance with regulations including MIFID-II, SFTR, MAR/MAD, CFTC, TRACE, NFA,Finra, EMIR, REMIT</p>
                    </Link>
                </div>
            </div>

            {/* <div className="mission-cover">
                <div className="mission-head">
                    <h1>Our Mission</h1>
                </div>
                <div className="mission-card">
                    <div className="mission-left">
                        <div className="left-01">
                            <h2 className='number'>01</h2>
                            <div className="title-left">
                                <h3 className='headings '>Operational simplification</h3>
                                <p>Reduces manual efforts to create transparency and reconcile and resolve customer struggle</p>
                            </div>
                        </div>
                        <div className="left-02">
                            <h2 className='number'>02</h2>
                            <div className="title-left">
                                <h3 className='headings '>Regulatory efficiency improvement</h3>
                                <p>Enables real-time monitoring. Our central data store solution will help clients with regulator reporting and assisted reporting</p>
                            </div>
                        </div>
                        <div className="left-03">
                            <h2 className='number'>03</h2>
                            <div className="title-left">
                            <h3 className='headings '>Fraud minimisation</h3>
                            <p>With the help of blockchain, machine learning and artificial intelligence, banks and financial institutions can monitor fraud and financial crime</p>
                            </div>
                        </div>
                    </div>

                    <div className="mission-middle">
                        <img src={MissionImg} alt="missionimage" />
                    </div>

                    <div className="mission-right">
                        <div className="right-01">
                            <h2 className='number'>04</h2>
                            <div className="title-right">
                            <h3 className='headings head-right '>Liquidity and capital improvement</h3>
                            <p>Can reduce locked-in capital and provides increased transparency</p>
                            </div>
                        </div>
                        <div className="right-02">
                            <h2 className='number '>05</h2>
                            <div className="title-right">
                            <h3 className='headings head-right '>Clearing and settlement time</h3>
                            <p>Our Smart Contract technology reduces some 3rd party transaction verification/ validation and accelerates settlement</p>
                            </div>
                        </div>
                        <div className="right-03">
                            <h2 className='number'>06</h2>
                            <div className="title-right">
                            <h3 className='headings head-right '>Counterparty risk reduction</h3>
                            <p>Agreements can be codified and executed in a shared, immutable environment</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Homecard;
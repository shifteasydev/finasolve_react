import React from 'react';
import "../Components/MissioncardStyles.css";
import MissionImg from "../Assets/mission-new.png";

const MisssionCard = () => {
  return (
    <div>
        <div className="mission-cover">
                <div className="mission-head">
                    <h1>Our Missions</h1>
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
                            <h2 className='number'>06</h2>
                            <div className="title-right">
                            <h3 className='headings head-right '>Counterparty risk reduction</h3>
                            <p>Agreements can be codified and executed in a shared, immutable environment</p>
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
                            <h2 className='number'>04</h2>
                            <div className="title-right">
                            <h3 className='headings head-right '>Liquidity and capital improvement</h3>
                            <p>Can reduce locked-in capital and provides increased transparency</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default MisssionCard;
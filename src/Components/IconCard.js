import React from 'react';
import '../Components/IconcardStyles.css';
import TradeIcon from "../Assets/exchange-rate.png";
import BlockchainIcon from "../Assets/blockchain.png";
import cyberIcon from "../Assets/cyber-security.png";

const iconCard = () => {
    return (
        <div>
            <div className="icon-wrapper">
                <div className="icon-card">
                    <img src={TradeIcon} alt="icon-01"/>
                    <h4 className="icon-heading"> TRADE & TRANSACTION TOOLS </h4>
                    <p className="icon-Description"> We specialise in trade and transaction tools based on AI/ML tech stack </p>
                </div>
                <div className="icon-card hover">
                    <img src={BlockchainIcon} alt="icon-02"/>
                    <h4 className="icon-heading"> BLOCKCHAIN TOOLS </h4>
                    <p className="icon-Description"> software products to setup and maintain private and public blockchain node. Unique protocol for P2P consensus network </p>
                </div>
                <div className="icon-card">
                    <img src={cyberIcon} alt="icon-03"/>
                    <h4 className="icon-heading"> REGULATIONS AND CYBERSECURITY </h4>
                    <p className="icon-Description"> Tools for global regulator compliance and cybersecurity </p>
                </div>

            </div>
        </div>
    )
}

export default iconCard;
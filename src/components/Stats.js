import React from 'react'
import { HordeData } from '../data/HordeData'
import '../styles/Stats.css'

class Stats extends React.Component {

    constructor() {
        super()

        this.state = {
            currentHordeInformainId: 0
        }
    }

    render() {
        return (
            <div className="w-full bg-gray-900 flex flex-col place-items-center" id="Stats">
                <div className="w-84.5% space-y-24 pb-24">
                    <div className="h-412px-rem grid grid-cols-3">
                        <div className="flex flex-col justify-center space-y-8 text-center border-2 border-purple-700 rounded-3xl px-4 mx-6 feature-hype-privileges">
                            <h1 className="text-white text-4xl font-bold italic">GET HYPE</h1>
                            <p className="text-white text-xl">
                                Every Creatures of ERA OF HYPE is out-of-this-world! However, some are more exotic and more important than the rest.
                            </p>
                        </div>
                        <div className="border-2 border-opacity-0 rounded-3xl overflow-hidden feature-blockchain p-1 mx-6">
                            <div className="flex flex-col justify-center space-y-8 z-10 rounded-3xl text-center bg-gray-900 px-3 h-full">
                                <h1 className="text-white text-4xl font-bold italic">BLOCKCHAIN</h1>
                                <p className="text-white text-xl">
                                    All creatures <strong>stored</strong> as <strong>ERC-721 tokens</strong> on the <strong>Ethereum blockchain</strong> and hosted on<br></br>IPFS.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-8 text-center border-2 border-purple-700 rounded-3xl px-4 mx-6 feature-hype-privileges">
                            <h1 className="text-white text-4xl font-bold italic">PRIVILEGES</h1>
                            <p className="text-white text-xl">
                            NFT have special characteristics that can bring many privileges to their owner, like passive income, or VIP tickets for exclusive events.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col place-items-center space-y-4">
                        <h3 className="text-xl text-white">SNEAK INFORMATIONS</h3>
                        <h1 className="text-6xl text-white font-extrabold italic">2 EVOLUTIONS</h1>
                        <div className="flex space-x-8 pt-6">
                            <button className="bg-indigo-900 rounded-lg text-white text-2xl px-6 py-4 block cursor-pointer"
                               onClick={() => this.setState({currentHordeInformainId: 0})}
                               >Legendary</button>
                            <button className="bg-indigo-900 rounded-lg text-white text-2xl px-6 py-4 block cursor-pointer"
                               onClick={() => this.setState({currentHordeInformainId: 1})}
                               >Genetic</button>
                        </div>
                    </div>
                    <div>
                        {HordeData.map((item, i) => {
                            return (
                            i === this.state.currentHordeInformainId &&
                            <div className="flex space-x-16 fadeIn" key={i}>
                                <div className="flex flex-col justify-center space-y-6">
                                    <h1 className="text-white text-6xl font-extrabold italic">{item.title}</h1>
                                    <h2 className="bg-transparent text-4xl font-black pl-2"
                                        style={{
                                            WebkitTextFillColor: "transparent",
                                            WebkitBackgroundClip: "text",
                                            backgroundImage: "linear-gradient(180deg, #BEA7E1 0%, #4C3892 100%)"}
                                        }>
                                        {item.count}  <span className="text-2xl font-normal">units</span>
                                    </h2>
                                    <p className="text-white text-xl">
                                        {item.description}
                                    </p>
                                    <div className="flex space-x-6 pl-3">
                                        <a className="flex items-center bg-gray-900 border-2 border-white rounded-lg text-white text-xl px-5 py-3 block cursor-pointer" href="/">
                                            <span className="text-white text-2xl pr-2">
                                                <i className="fab fa-instagram"></i>
                                            </span>Instagram
                                        </a>
                                        <a className="flex items-center bg-gray-900 border-2 border-white rounded-lg text-white text-xl px-5 py-3 block cursor-pointer" href="/">
                                            <span className="text-white text-2xl pr-2">
                                                <i className="fab fa-discord"></i>
                                            </span>Discord
                                        </a>
                                    </div>
                                </div>
                                <img className="w-459px-rem rounded-3xl shadow" src={item.image} alt="card"></img>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;

import './wallet.css';

import React, { useState } from 'react';

export const Wallet = () => {
	const [walletName, setWalletName] = useState({
		walletName: ''
	});

	const [walletAddress, setWalletAddress] = useState({
		walletAddress: ''
	});

	const [createdWallet, setCreatedWallet] = useState({
		name: '',
		warning: ''
	});

	const handleNameChange = (event) => {
		setWalletName({ walletName: event.target.value });
	};

	const createWallet = (event) => {
		fetch('http://6714ad3aeccf.ngrok.io/api/wallet/create', {
			body: JSON.stringify(walletName),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST'
		}).then((response) => response.json())
		.then(console.log)
		.then(window.alert('test'));
		/*
		.then((wallet) => setCreatedWallet({ name: wallet.name, warning: wallet.warning }))

		.then(console.log(createdWallet));
		*/
	};

	const handleAddressChange = (event) => {
		setWalletAddress({ walletAddress: event.target.value });
	};

	const getWallet = (event) => {
		fetch('http://localhost:4444/api/wallet/get', {
			body: JSON.stringify(walletAddress),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET'
		}).then((response) => response.json());
	};

	return (
		<div className="wallet">
			<form className="wallet-create">
				<input type="text" className="wallet-name" placeholder="Enter wallet name" onChange={handleNameChange} />
				<input type="submit" value="Create Wallet" onClick={createWallet} className="create-wallet-btn" />
			</form>
			{(createdWallet.name == '') ? (
				<p className="empty"></p>
			) : (
				<p>Wallet Name: {createdWallet.name}</p>
			)}
			

			<form className="wallet-get">
				<input type="text" className="wallet-address" placeholder="Enter wallet address" onChange={handleAddressChange} />
				<input type="submit" value="Get Wallet Info" onClick={getWallet} className="get-wallet-btn" />
			</form>
		</div>
	);
};
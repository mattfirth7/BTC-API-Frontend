import './transaction.css';

import React, { useState } from 'react';

export const Transaction = () => {
	const [transToSend, setTransToSend] = useState({
		toAddress: '',
		amount: null
	});

	const [txId, setTxId] = useState({
		txId: ''
	});

	const handleAddressChange = (event) => {
		setTransToSend({ ...transToSend, toAddress: event.target.value });
	};

	const handleAmountChange = (event) => {
		setTransToSend({ ...transToSend, amount: event.target.value });
	};

	const sendTransaction = (event) => {
		fetch('http://6714ad3aeccf.ngrok.io/api/transaction/send', {
			body: JSON.stringify(transToSend),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST'
		}).then((response) => response.json());
	};

	return (
		<div className="transaction">
			<form className="send-transaction">
				<input type="text" className="to-address" placeholder="Enter recipient address" onChange={handleAddressChange} />
				<input type="number" className="amount" placeholder="Amount to send" onChange={handleAmountChange} />
				<input type="submit" value="Send Transaction" onClick={sendTransaction} className="send-tx" />
			</form>

			<form className="get-transaction">
				<input tpe="text" className="tx-id" placeholder="Enter transaction id" />
				<input type="submit" value="Get Transaction Info" className="get-tx" />
			</form>
		</div>
	);
};
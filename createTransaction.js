let Transaction = require("./transaction");

// Creating a separate transaction and with each necessary type to each property
const createTransactionFromCSV = (row) => {
	let date = new Date(row[ 0 ]);
	let type = row[ 1 ];
	let shares = parseFloat(row[ 2 ]);
	// had to do this for the $ and spaces
	let prices = parseFloat(row[ 3 ].replace(/[^0-9.]/g, ""));
	let fund = row[ 4 ];
	let investor = row[ 5 ];
	let rep = row[ 6 ];

	return new Transaction(date, type, shares, prices, fund, investor, rep);
};

module.exports = {
	createTransactionFromCSV
}
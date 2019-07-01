const fs = require('fs');
const create = require('./createTransaction');
const TransactionList = require('./transactionList');

const ReadCSV = (filePath) => {
	try {
		let list = new TransactionList([]);

		let data = fs.readFileSync(filePath, 'utf8');

		// break up the row of the csv file
		let dataArray = data.split("\r\n");
		// breaking up each row into columns
		for (let index = 1; index < dataArray.length; index++) {
			let row = dataArray[ index ];
			//had to make sure I split up every with a comma and not any commas in quotes.
			let col = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
			// creating a transaction
			let trans = create.createTransactionFromCSV(col);
			// adding that transacion to a list
			list.add(trans);
		}

		return list;
	} catch (exception) {

	}
}

module.exports = {
	ReadCSV
}
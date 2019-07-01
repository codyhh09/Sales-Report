class Transaction {
	constructor (date, type, shares, price, fund, investor, rep) {
		this._date = date;
		this._type = type;
		this._shares = shares;
		this._price = price;
		this._fund = fund;
		this._investor = investor;
		this._rep = rep;
	}

	// Got the full year
	getYear() {
		return this._date.getFullYear();
	}
	// got the month number
	getMonth() {
		return this._date.getMonth() + 1;
	}
	// got the proper quarter
	getQuarter() {
		if (this._date.getMonth() + 1 <= 3) {
			return 1;
		} else if (this._date.getMonth() + 1 <= 6) {
			return 2;
		} else if (this._date.getMonth() + 1 <= 9) {
			return 3;
		} else {
			return 4;
		}
	}

	get Type() {
		return this._type;
	}
	// got the total based on if the transaction was buying/selling
	// if selling then it's positive
	// if buying then it's negative
	// after that you will times the number of shares with the price per shares
	Total() {
		let isPostive = this._type === 'BUY' ? -1 : 1;

		return isPostive * (this._shares * this._price);
	}

	Fund() {
		return this._fund;
	}

	Investor() {
		return this._investor;
	}

	Sales_Rep() {
		return this._rep;
	}
}

module.exports = Transaction;
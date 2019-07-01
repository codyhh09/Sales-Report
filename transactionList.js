class TransactionList {
	constructor (transactions) {
		this._transactions = transactions;
	}

	add(transaction) {
		this._transactions.push(transaction);
	}

	SaleSummary() {
		let totalSummary = [];
		let yearSummary = [];
		let monthSummary = [];
		let quarterSummary = [];

		for (let index = 0; index < this._transactions.length; index++) {
			let trans = this._transactions[ index ];

			let summary = {
				rep: trans.Sales_Rep(),
				fund: trans.Fund(),
				year: trans.getYear(),
				month: trans.getMonth(),
				quarter: trans.getQuarter(),
				total: trans.Total()
			};

			let totalIndex = totalSummary.findIndex(value => value.rep === summary.rep && value.fund === summary.fund);
			let yearIndex = yearSummary.findIndex(value => value.rep === summary.rep && value.fund === summary.fund && value.year === summary.year);
			let quarterIndex = quarterSummary.findIndex(value => value.rep === summary.rep && value.fund === summary.fund && value.year === summary.year && value.quarter === summary.quarter);
			let monthIndex = monthSummary.findIndex(value => value.rep === summary.rep && value.fund === summary.fund && value.year === summary.year && value.month === summary.month);

			if (totalIndex > -1) {
				totalSummary[ totalIndex ].total += summary.total;
			} else {
				totalSummary.push({
					rep: summary.rep,
					fund: summary.fund,
					total: summary.total
				});
			}
			if (yearIndex > -1) {
				yearSummary[ yearIndex ].ytd += summary.total;
			} else {
				yearSummary.push({
					rep: summary.rep,
					fund: summary.fund,
					year: summary.year,
					ytd: summary.ytd
				});
			}
			if (quarterIndex > -1) {
				quarterSummary[ quarterIndex ].qtd += summary.total;
			} else {
				quarterSummary.push({
					rep: summary.rep,
					fund: summary.fund,
					year: summary.year,
					quarter: summary.quarter,
					qtd: summary.total
				});
			}
			if (monthIndex > -1) {
				monthSummary[ monthIndex ].mtd += summary.total;
			} else {
				monthSummary.push({
					rep: summary.rep,
					fund: summary.fund,
					year: summary.year,
					month: summary.month,
					mtd: summary.total
				});
			}
		}

		return {
			totalSummary,
			yearSummary,
			quarterSummary,
			monthSummary
		};
	}

	ManagementSummary() {
		let totalSummary = [];

		for (let index = 0; index < this._transactions.length; index++) {
			let trans = this._transactions[ index ];
			let summary = {
				rep: trans.Sales_Rep(),
				fund: trans.Fund(),
				investor: trans.Investor(),
				total: trans.Total()
			};

			let totalIndex = totalSummary.findIndex(value => value.rep === summary.rep && value.fund === summary.fund && value.investor === summary.investor);

			if (totalIndex > -1) {
				totalSummary[ totalIndex ].total += summary.total;
			} else {
				totalSummary.push({
					rep: summary.rep,
					fund: summary.fund,
					investor: summary.investor,
					total: summary.total
				});
			}
		}

		return totalSummary;
	}

	BreakReport() {
		let investorSummary = [];

		for (let index = 0; index < this._transactions.length; index++) {
			let trans = this._transactions[ index ];
			let summary = {
				investor: trans.Investor(),
				total: trans.Total()
			};

			let investorIndex = investorSummary.findIndex(value => value.investor === summary.investor);

			if (investorIndex > -1) {
				investorSummary[ investorIndex ].total += summary.total;
			} else {
				investorSummary.push({
					investor: summary.investor,
					total: summary.total
				});
			}
		}

		return investorSummary.filter(value => value.total < 0);
	}

	InvestorProfit() {
		let investorSummary = [];
		let fundSummary = [];

		for (let index = 0; index < this._transactions.length; index++) {
			let trans = this._transactions[ index ];
			let summary = {
				fund: trans.Fund(),
				investor: trans.Investor(),
				total: trans.Total()
			};

			let investorIndex = investorSummary.findIndex(value => value.investor === summary.investor);
			let fundIndex = fundSummary.findIndex(value => value.fund === summary.fund);

			if (investorIndex > -1) {
				investorSummary[ investorIndex ].total += summary.total;
			} else {
				investorSummary.push({
					investor: summary.investor,
					total: summary.total
				});
			}
			if (fundIndex > -1) {
				fundSummary[ fundIndex ].total += summary.total;
			} else {
				fundSummary.push({
					fund: summary.fund,
					total: summary.total
				});
			}
		}

		return {
			investorSummary,
			fundSummary
		};
	}

}

module.exports = TransactionList;
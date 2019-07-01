const read = require('./readFile');
const filePath = './Data.csv';

// create a list of transactions
let transList = read.ReadCSV(filePath);

// create Sales summary
let saleSummary = transList.SaleSummary();

console.log('Sales Summary');
console.log('Beginning to Date');
console.table(saleSummary.totalSummary);
console.log('Year to Date');
console.table(saleSummary.yearSummary);
console.log('Quarter to Date');
console.table(saleSummary.quarterSummary);
console.log('Month to Date');
console.table(saleSummary.monthSummary);

// create management summary report
let managementSummary = transList.ManagementSummary();
console.log('Management Summary');
console.table(managementSummary);

// creating a report for break downs on errors
let breakReport = transList.BreakReport();
console.log('Break Report');
console.table(breakReport);

let investorProfit = transList.InvestorProfit();
console.log('Investor Profit');
console.log('Investory Summary');
console.table(investorProfit.investorSummary);
console.log('Fund Summary');
console.table(investorProfit.fundSummary);

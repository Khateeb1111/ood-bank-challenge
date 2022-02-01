const Statement = require('../src/Statement')
const Transaction = require("../src/Transactions.js")

describe("Statement", () => {


  it('return headers only', () => {
    // set up
    const statement = new Statement([])

    // execute
    const expected = "date, credit, debit, balance"

    // verify
    const result = statement.getStatement()
  })


  
  it('return deposit transaction', () => {
    // set up
    const statement = new Statement([
    new Transaction("10/01/2012", 1000)
    ])

    // execute
    const expected = "date, credit, debit, balance \n
                 10/01/2012, 1000, , 1000"
    const result = statement.getStatement()
    // verify
    expect(result)toEqual(expected)
  })



})
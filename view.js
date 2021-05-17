const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle()
{
    return chalk.magenta(
        figlet.textSync
        (
            'TipCalculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model)
{
    const {billAmount} = model
    const {tip} = model
    const {total} = model

    return [{
            BillAmount: billAmount,
            Tip: tip,
            Total: total
        },
        
    ]
}

function inputForm(model)
{
    const {billAmount} = model
    const message1 = 'Bill Amount?'
    const {tip} = model
    const message2 = 'Tip(%)?'
    
    return inquirer.prompt([
        {
            name: 'billAmount',
            type : 'input',
            message: message1,
            default: input1,
            validate: function(value)
            {
                if(value >= 1)
                {
                    return true
                }
                else
                {
                   return false 
                }
            }
        },
        {
            name: 'tip',
            type : 'input',
            message: message2,
            default: input2,
            validate: function(value)
            {
                if(value >= 1)
                {
                    return true
                }
                else
                {
                   return false 
                }
            }    
        }
    ])
}


function listForm(model)
{
    const {billAmount} = model
    const message1 = 'Bill Amount?'
    const {tip} = model
    const message2 = 'Tip(%)?'
    
    
    return inquirer.prompt([
        {
            name: 'billAmount',
            type : 'input',
            message: message1,
            default: billAmount          
        },
        {
            name: 'tip',
            type : 'input',
            message: message2,
            default: tip       
        }
    ])
}


function view(model)
{
    return{
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = 
{
    view,
    inputForm,
    listForm
}
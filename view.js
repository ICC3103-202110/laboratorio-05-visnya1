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
    const {percentage} = model
    const {tip} = model
    const {total} = model

    return [{
            'Bill Amount': '$' + billAmount,
            'Tip (%)': percentage + '%',
            'Tip': '$' + tip,
            'Total':'$' + total
        },
        
    ]
}

function inputForm(model)
{
    const {billAmount} = model
    const message1 = 'Bill Amount?'
    const {percentage} = model
    const message2 = 'Tip(%)?'
    
    return inquirer.prompt([
        {
            name: 'billAmount',
            type : 'int',
            message: message1,
            default: billAmount,
            validate: function(value)
            {
                if(value >= 1)
                {
                    return true
                }
                else
                {
                   return 'it has to be a real number'
                }
            }
        },
        {
            name: 'percentage',
            type : 'int',
            message: message2,
            default: percentage,
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
    const {percentage} = model
    const message2 = 'Tip(%)?'
    
    
    return inquirer.prompt([
        {
            name: 'billAmount',
            type : 'int',
            message: message1,
            default: billAmount          
        },
        {
            name: 'percentage',
            type : 'int',
            message: message2,
            default: percentage       
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
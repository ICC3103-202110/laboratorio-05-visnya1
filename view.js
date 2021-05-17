const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle()
{
    return chalk.magenta
    (
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
    return 
    [
        {
            BillAmount: billAmount,
            Tip: tip,
            Total: total
        },
        
    ]
}

function valueInput(model)
{
    const {input} = model
    const message1 = 'Bill Amount?'
    const message2 = 'Tip(%)?'
    
    return inquirer.prompt
    ([
        {
            name: 'input',
            type : 'int',
            message: message1,
            default: input,
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
            name: 'input',
            type : 'int',
            message: message2,
            default: input,
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


function listForm(model){
    const {input} = model
    const message1 = 'Bill Amount?'
    const message2 = 'Tip(%)?'
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message1,
        message: message2,
        default: input,
        
    })
}

function view(model)
{
    return
    [
    {
        title: getTitle(),
        table: getTable(model)
    }
    ]
}

module.exports = 
{
    view,
    valueInput,
    listForm
}
const vm = require('vm')

const regex = /`/gm

function escape(template){
    return `\`${template.replace(regex, '\\`')}\``
}

class Compile {
    get(template, defaultContext, options){
        if(typeof template !== 'string'){
            throw new Error('Template must be a string')
        }
    
        const option = Object.assign({timeout: 500}, options)
        const script = new vm.Script(escape(template))
    
        return (context) => {
            try {
                return script.runInNewContext(Object.assign({}, defaultContext, context), option)
            }catch(error){
                throw new Error('Failed to compile template', error)
            }
        }
    }
}

module.exports = Compile
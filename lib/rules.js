const Compile = require('./compile')
const compile = new Compile()

function rules(message, object){
    if(message.includes("${")){
        let template = compile.get(message)
        return template(object)
    }else{
        return message
    }
}

module.exports = rules
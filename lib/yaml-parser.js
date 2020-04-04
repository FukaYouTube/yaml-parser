const fs = require('fs')
const YAML = require('js-yaml')

const rules = require('./rules')

class YamlParser {
    constructor(options){
        this.options = options
    }

    setPath(file_path){
        if(!file_path){
            throw new Error('Please indicate the path to the file')
        }

        this.file_path = file_path
    }

    getContext(keys, object){
        try {
            let message = YAML.safeLoad(fs.readFileSync(this.file_path))
            return rules(message[keys], object)
        }catch(error){
            throw new Error('Invalid file (Specify a file path using the setPath() method or check the file path)', error)
        }
    }
}

module.exports = YamlParser
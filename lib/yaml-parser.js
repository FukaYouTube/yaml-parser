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
            throw new Error('Invalid file! Please check the file for errors or the path to this file. Read more https://github.com/FukaYouTube/yaml-parser', error)
        }
    }
}

module.exports = YamlParser
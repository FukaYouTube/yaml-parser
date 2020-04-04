# YAML Parser | version -0.0.1 beta 📝
> If you need to compile javascript code in yml, then this library should help :)  

Developer: Fuka  
Contact: [@FukaChanYT](https://t.me/FukaChanYT) or [@RightDie](https://t.me/RightDie)  

## Install
```
$ npm install https://github.com/FukaYouTube/yaml-parser.git
$ npm start
```
OR
```
$ git clone https://github.com/FukaYouTube/yaml-parser.git
$ npm install
$ npm start
```

## Source code ☁︎
```javascript
const yamlParser = require('yaml-parser') // Import packages

// Test example (test/test.js)

// Template strings are changed to transmitted data
console.log(yamlParser.Rules('New message to the world: ${name}',  {  name:  'Hello World!'  }))
// Output: New message to the world: Hello World

// Or if there is no template line in the text and transfer data, then this data will be ignored
console.log(yamlParser.Rules('I am a programmer and I am writing?',  {  name:  'Hello World'  }))
// Output: I am a programmer and I am writing?

// Plain text output
console.log(yamlParser.Rules('It turns out that I write hello world?'))
// Output: It turns out that I write hello world?

// Read yaml file
const yaml =  new  yamlParser.YamlParser()

// Specify the path to the file
yaml.setPath('test/assets/msg.yml')

// We indicate the key of the object and the object we want to transfer
console.log(yaml.getContext('hello',  {  question:  {  one:  "Hello World",  two:  "Web site",  three:  "Going to work for the company"  }  }))
/*
Output:
When a programmer learns a new programming language, what does he do first?
> Hello World
> Web site
> Going to work for the company
*/
```

## Results
I don’t know, I think at least someone will be useful :)
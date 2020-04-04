const yamlParser = require('../')

// Template strings are changed to transmitted data
console.log(yamlParser.Rules('New message to the world: ${name}', { name: 'Hello World!' }))
console.log('Test: 1 \n')

// Or if there is no template line in the text and transfer data, then this data will be ignored
console.log(yamlParser.Rules('I am a programmer and I am writing?', { name: 'Hello World' }))
console.log('Test: 2 \n')

// Plain text output
console.log(yamlParser.Rules('It turns out that I write hello world?'))
console.log('Test: 3 \n')

// ---------
// Now a new level!
const yaml = new yamlParser.YamlParser()

yaml.setPath('test/assets/msg.yml')
console.log(yaml.getContext('hello', { question: { one: "Hello World", two: "Web site", three: "Going to work for the company" } }))
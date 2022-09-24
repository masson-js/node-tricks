
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// customize yargs version

yargs.version('1.1.0')

//  TEMPLATES:

// add note

yargs.command({
  command: 'add',
  describe: 'add notes',
  builder: {
      title: {
        describe: 'I add your notes',
        demandOption: true,
        type: 'string'
      },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// remove note

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
      title: {
        describe: 'remove a note',
        demanOption: true,
        type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list

yargs.command({
  command: 'create list',
  describe: 'List of my notes',
  handler() {
    console.log('list out all notes')
  }
})

// read notes

yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler() {
    console.log('Reading a note')
  }
})

yargs.parse()

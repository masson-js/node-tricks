
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// customize yargs version

yargs.version('1.1.0')

//create add command

// yargs.command({
//   command: 'add',
//   builder: {
//     title: {
//       describe: 'note title',
//       demandOption: true,
//       type: 'string'
//     },
//   },
//   describe: 'add new note',
//   handler: function(argv) {
//     console.log('title ', argv.title)
//   }
// })

// // create romve command

yargs.command({
  command: 'remove',
  describe: 'remove new note',
  builder: {
    title: {
      describe: 'Note title',
      demanOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title)
  }
})

// add, remove, list, read notes

yargs.command({
  command: 'add',
  builder: {
    title: {
      describe: 'I add you notes',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: ' body title',
      demandOption: true,
      type: 'string'
    }
  },
  describe: 'add notes',
  handler: function(argv) {
    notes.addNote(argv.title, argv.body)
  }
}
)

yargs.parse()

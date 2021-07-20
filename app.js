
const validator=require('validator')
const yargs=require('yargs')
const chalk=require('chalk')
const notes=require('./app2')

yargs.version('1.2.0')
//about 
yargs.command({
    command:'about',
    describe:'notes app',

})


//add
yargs.command({
    command:"add",
    describe:"add a new note",
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
             describe:'note body',
             demandOption:true,
             type:'string'
        }
    },
    handler:function(argv)
    {
      notes.addnote(argv.title,argv.body)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
         title:{
             describe:' note title',
             demandOption:true,
             type:'string'
         },
         body:{
            describe:'note body',
            demandOption:true,
            type:'string'
       }
    },
    handler:function(argv){
         notes.removenote(argv.title)
    }
})
//list
yargs.command({
    command:'list',
    describe:'list a note',
        handler(){
        notes.listnote();
    }

})
//read 
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
         title:{
                describe:'note title',
                demandOption:true,
                type:'string'
         },
         
    },
    handler:function(argv){
        notes.readnote(argv.title)
    }
})
yargs.parse()
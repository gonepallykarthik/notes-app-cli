
const chalk=require('chalk')
const fs=require('fs');
const { title } = require('process');

//add note 
const addnote = (title,body)=>{
const notes=loadnote(); 
const duplicatenotes= notes.find((note)=>note.title === title);


if(!duplicatenotes)
{
    notes.push({
        title:title,
        body:body
    })
    console.log(chalk.bgGreen('added a note'));
}else{
    console.log(chalk.bgRed('title already exist'))
}
 
 savenotes(notes)
}
//remove note
const removenote=(title)=>{
    const notessave=loadnote();
        const note=notessave.filter(note=>note.title !== title )

        savenotes(note)
        if(notessave.length > note.length)
        {
            console.log(chalk.bgGreen('note removed'));
        }else{
            console.log(chalk.bgRed(' note not found '));
        }
   } 
//list note
 const listnote =()=>{
       console.log(chalk.green('Your notes :'));
       const note=loadnote();
      note.forEach(notes=> console.log(chalk.green('Title :')+notes.title))
       
 }
 //read note
 const readnote =(title)=>{
    const note = loadnote()
     const titlenote= note.find((notes)=>notes.title === title)
     if(!titlenote)
     {
         console.log(chalk.bgRed.inverse('Invalid title'))
     }
     else{
         console.log(chalk.bgGreen.inverse('title : ') +titlenote.title);
         console.log('body :'+titlenote.body)
     }
 }





const savenotes=(notes)=>{
    const userdata=JSON.stringify(notes)
  fs.writeFileSync('1.json',userdata);
}
const loadnote=()=>{
    try{
     const databuffer=fs.readFileSync('1.json')
     const data=databuffer.toString();
     return JSON.parse(data);
    }catch(e){
     return []
 }

}

module.exports={
    addnote:addnote,
     removenote:removenote,
     listnote:listnote,
     readnote:readnote
}
 
 




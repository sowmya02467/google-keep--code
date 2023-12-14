let notesListRootElement = document.querySelector(".notesList");

let note = []

function renderElementToScreen(){

if (localStorage.getItem('note')){
  note = JSON.parse(localStorage.getItem('note'))
 note.forEach(notes=>{
  renderNotesToList(notes)
 
})

}
} 




  document.querySelector("#deleteAllNotes").addEventListener('click', ()=>{

   document.querySelectorAll(".notes").forEach(notes=>{
    notes.remove()
   })

     });

document.querySelector('#creatNotesButton').addEventListener('click',()=>{
  let uniqueID = 'notes' + Math.floor(Math.random() * 1000)
  
  let notes = {
    title : document.querySelector('#createNotesTitle').value,
    content : document.querySelector('#createNotesContent').value
    
  }
  addNotesToLocalsStorage(notes, uniqueID)
  renderNotesToList(notes,notes.uniqueID)
})
 
function  renderNotesToList(notes, uniqueID){

 
 
  

  let notesDiv = document.createElement("div")
  notesDiv.classList.add('notes',uniqueID)
  let notesTitle =document.createElement('h4')
  let notesContent = document.createElement('p')
  let notesDeleteButton = document.createElement('button')


  notesTitle.innerText = notes.title;
  notesContent.innerText = notes.content;
  notesDeleteButton.innerText = "Delete Note"

 notesDeleteButton.addEventListener('click',()=>{
 removeElementsFromNotesList(uniqueID)
 })





 notesDiv.appendChild(notesTitle)
 notesDiv.appendChild(notesContent)
 notesDiv.appendChild(notesDeleteButton)


notesListRootElement.appendChild(notesDiv);


document.querySelector('#createNotesTitle').value = ''
document.querySelector('#createNotesContent').value = ''
  



}


function addNotesToLocalsStorage(notes, uniqueID){
  notes = {...notes, uniqueID}

  note.push(notes)
  

 localStorage.setItem('notes', JSON.stringify(note))

}


function removeElementsFromNotesList(id){
  console.log(id)
  document.querySelector('.'+ id).remove();

  note = JSON.parse(localStorage.getItem('note'))
  let index = note.findIndex(notes=> notes.uniqueID == id)
  note.splice(index, 1)
 localStorage.setItem('note',JSON.stringify(note));





}


renderElementToScreen()













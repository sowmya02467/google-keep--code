
let noteListRootElement = document.querySelector(".notesList")

document.querySelector("#deleteAllNotes").addEventListener('click', ()=>{
   document.querySelectorAll('.notes').forEach(notes => {
    notes.remove()
   });
})


document.querySelector("#createNoteButton").addEventListener('click',()=>{
    let notes = {
        title : document.querySelector('#createNoteTitle').value,
        content : document.querySelector('#createNoteContent').value,
    }
    renderNoteToList(notes);
})

//  here we are creating the new notes throught the creat note
function renderNoteToList(notes){
    
    let notesDiv = document.createElement('div')
    notesDiv.className='notes'
    let notesTitle = document.createElement('h4')
    let notesContent = document.createElement('p')
    let notesDeleteButton = document.createElement('button')
     

  notesTitle.innerText = notes.title;
  notesContent.innerText = notes.content;
  notesDeleteButton.innerText ='Delete notes';

 notesDeleteButton.addEventListener('click', ()=>{
   notesDeleteButton.parentElement.remove()
 })

  notesDiv.appendChild(notesTitle)
  notesDiv.appendChild(notesContent)
  notesDiv.appendChild(notesDeleteButton)

  noteListRootElement.appendChild(notesDiv);
  document.querySelector("#createNoteTitle").value=''
  document.querySelector("#createNoteContent").value=''
}





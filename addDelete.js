const tbody = document.getElementById('tbody')
const input = document.getElementById('input')

let data = [
    {id: 1, title: 'salom'},
    {id: 2, title: 'salom'},
    {id: 3, title: 'salom'},
    {id: 4, title: 'salom'},
    {id: 5, title: 'salom'},
    {id: 6, title: 'salom'},
    {id: 7, title: 'salom'},
    {id: 8, title: 'salom'},
]

let inputValue = '';

const deleteFunc = (id)=>{
    data = data.filter((value)=> value.id !== id)
    render()
}


const addFunc = ()=>{
    input.addEventListener('change',(e)=>{e.target.value})

}


const render = ()=>{
    tbody.innerHTML = data.map((value)=>`
    <tr>
    <td>${value.id}</td>
    <td>${value.title}</td>
    <td>
  <button oncLick = {deleteFunc(${value.id})}> Delete </nutton>  
    </td>
    </tr>

    `).join('')
}
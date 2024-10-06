import './InputSearch.css'

function InputSearch() {
  return (
        <div className='wrapper_input'>
            <img  className='search_icon' src="/Search.svg" alt="Иконка поиска"/>
            <input 
                className='search_input' 
                type="text" 
                name='search_input' 
                placeholder='Введите название'
                autoComplete="off"
            />
        </div>

  )
}

export default InputSearch;
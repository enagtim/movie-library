import './Button.css'

function Button({text}) {
  const clickedButton = (event) => {
    console.log(event);
  }
  return (
    <>
     <button onClick={clickedButton} className='button'>{text}</button>
    </>
  )
}

export default Button;
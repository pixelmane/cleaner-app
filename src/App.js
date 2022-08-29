
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
var root = document.querySelector(':root');
function updateSize () {
  let sizing = window.innerWidth;
  if(window.innerWidth > 450){
    sizing = 450;
  } else {
    sizing = window.innerWidth
  }
  root.style.setProperty('--widthVar', sizing)
}
document.addEventListener('DOMContentLoaded', updateSize())
window.addEventListener('resize', function resize() {
  updateSize()
})
function App() {
  
  
  return (
    
    <div className="App">
      <header id='navBar'><h1>Columbus Carpet Cleaners</h1>
      <h4>Home of the 49.99 per room special!</h4>
        </header>
      <div id='banner'><div id='phoneCont'><a href='tel:440-539-9505'><h2 id="phone">ph:440-539-9505</h2></a></div></div>
      <Routes>
        <Route path='/' element={<Contact />} /> 
        <Route path='/menu/*' element ={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  );
}
function Contact() {
  
  return (
    <div>
    <div id='contactCont'>
      <h1 className='hours'>Call or Contact us below:</h1>
      <form id='theForm' name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
          <p>
            <input placeholder='name' type="text" name="name"/>
          </p>
          <p>
            <input placeholder='email' type="email" name="email"/>
          </p>
          <p>
            <textarea placeholder='Please include rooms, approximate square footage, date needed, address, phone' name="message"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      
     {/*} <form  method='post' name='myForm' id='contactForm' data-netlify="true">
      <input type="hidden" name="form-name" value="pizzaOrder" />
        <input placeholder='email' type='text'></input>
       <input placeholder='name' type='text'></input>
       <textarea style={{height: '80px'}} placeholder='message' type='text'></textarea>
       <button type="submit" id='submit'>Submit</button>
      </form>
      <form onSubmit={handleSubmit} name="contact" data-netlify="true">
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
  </form> */}
    </div>
  )
}
function Menu() {
  function handleClick(e){
    switch(e.target.id){
      case 'plantBasedIcon':
        document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(246, 137, 137)'
        document.getElementById('menuIcon').style.backgroundColor = 'rgb(92, 112, 80)'
        document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
        document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
       break;
        case 'menuIcon':
          document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('menuIcon').style.backgroundColor = 'rgb(246, 137, 137)'
          document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          break;
          case 'drinksIcon':
            document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
            document.getElementById('menuIcon').style.backgroundColor = 'rgb(92, 112, 80)'
            document.getElementById('drinksIcon').style.backgroundColor = 'rgb(246, 137, 137)'
            document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
            break;
            case 'brunchIcon':
              document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
              document.getElementById('menuIcon').style.backgroundColor = 'rgb(92, 112, 80)'
              document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
              document.getElementById('brunchIcon').style.backgroundColor = 'rgb(246, 137, 137)'
              break;
            default: 
            document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('menuIcon').style.backgroundColor = 'rgb(246, 137, 137)'
          document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          break;
        
      }
      }
    
  
  return (
    <div>
      <div id='menuCont'>
        <h1 className='hours'>menus</h1>
      </div>
    <div id='menuNavs'>
      
      <Link to='menu/plantbased'><div onClick={handleClick} id='plantBasedIcon' className='menuType'>Plant-Based</div></Link>
      <Link to='menu/menu'><div onClick={handleClick} id='menuIcon' className='menuType'>Menu</div></Link>
      <Link to='menu/drinks'><div onClick={handleClick} id='drinksIcon' className='menuType'>Drinks</div></Link>
      <Link to='menu/brunch'><div onClick={handleClick} id='brunchIcon' className='menuType'>Brunch</div></Link>
      </div>
      <div id='menuPicCont'>
      <Routes>
        <Route path='menu/plantbased' element={<PlantBased />} />
        <Route path='menu/menu' element={<FullMenu />} />
        <Route path='menu/drinks' element={<Drinks />} />
        <Route path='menu/brunch' element={<Brunch />} />
      </Routes>
      </div>
    </div>
    
  )
}
function FullMenu() {
  return (
   
      <div className='menuPic'></div>
    
  )
}function Drinks() {
  return (
   
      <div className='drinksPic'></div>
    
  )
}function Brunch() {
  return (
   
      <div className='brunchPic'></div>
    
  )
}
function PlantBased() {
  return (
   
      <div className='plantPic'></div>
    
  )
}
 
export default App;

import React from 'react'
import "./footer.scss"
function Footer(props) {
    return (
        <footer>
    
  <div className="navs">
     <ul>
       <li>HEADER TITLE</li>
       <li>Menu 1</li>
       <li>Menu 2</li>
       <li>Menu 3</li>
       <li>Menu 4</li>
    </ul>
    <ul>
        <li>HEADER TITLE</li>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
     </ul>
     <ul>
        <li>GET IN TOUCH</li>
        <li>Adrress: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi sapiente,  voluptas accusantium, d</li>
        <li>Tel:0706787789</li>
        <li>Fax:604.xxxx.xx</li>
        <li>email:fundAfrik@support.com</li>
     </ul>
</div>
  <div className="bottom">
      <div className="social">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <p>&copy; 2020 fundAfrik</p>
  </div>
</footer>
    )
}

Footer.propTypes = {

}

export default Footer


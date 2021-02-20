import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const  generateRandomString = (min, max) => {
  let randomString ="";
  for (let i = 0; i < 5; i++) {
    randomString += String.fromCharCode(Math.random() * (90 - 65) + 65)
  }  
  return randomString
}

function App() {
  const [urls, setUrls] = useState('');
  const [randomId, setRandomId] = useState(null);

  useEffect(() => {
    setRandomId(generateRandomString());
  }, [])


  const apiRequest = async (event)  => {
    if(urls === "")
    return;
    
    event.preventDefault();
    axios.post(`https://artur-electron.herokuapp.com/users/`, {
      urls: urls,
      unique_code: randomId
    })
    .then(function (response) {
      // handle success
      console.log('funcionou');
    })
    .catch(function (error) {
      // handle error
      console.log('bugou');
    })
    }

  return (
    

  <Row>
    <div className="App" >
          <div className="w3-card-4">
        <div className="w3-container artur-color">
          <h2>{randomId}</h2>
        </div>
          <form>
              <div className="w3-text-brown">
                <ul style={{paddingTop:"1%"}}>
                  1º Cola o url para tracking
                </ul>
                <ul>
                  2º Clica no Start tracking
                </ul>
                <ul>
                  3º Copia o código
                </ul>
                <ul>
                  4º Fala com o <strong>@artur_electron_bot</strong> no Telegram e envia o codigo
                </ul>
                <br></br>
              </div>
              <p className="artur-p">
              <label className="w3-text-brown-artur"><b>Tens direito a 2 produtos apenas!</b></label>
              <br></br>      
              <br></br>
              <label className="w3-text-brown-artur"><b>EM ATUALIZAÇÃO</b></label>
              <p>Funciona para:</p>
              <p>WORTEN</p>
              <p>PCDIGA</p>
              <br></br>      
              <br></br>
              <label className="w3-text-brown"><b>COMEÇA O TRACKING!</b></label>
              <input className="w3-input w3-border w3-sand" type="text" onChange={(e)=>{setUrls(e.target.value)}} value={urls} placeholder="URL" required></input>
              </p>
              <p>
              <button className="w3-btn artur-color" onClick={apiRequest}>Start tracking</button></p>
          </form>
      </div>
  </div>
  </Row>
     
  );
}

export default App;

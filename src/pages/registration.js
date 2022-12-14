import { useState } from "react";

function Registro() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="registroBody">
      <div className="regContainer">
        <h1>Hola!</h1>
        <p>Regístrate aquí para recibir nuestro boletín.</p>
        <input
          className="regInputName"
          type="text"
          name="name"
          placeholder="nombre"
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          className="regInput"
          type="e-mail"
          name="email"
          placeholder="e-mail"
          value={userInfo.email}
          onChange={handleChange}
        />
        <button className="regBtn" onClick={handleClick}>
          Registrar
        </button>
      </div>
    </div>
  );
}

export default Registro;

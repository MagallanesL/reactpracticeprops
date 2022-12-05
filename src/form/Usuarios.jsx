import React from "react";
import PropTypes from "prop-types";

function userList({ userList }) {
  return (
    <div>
      <h2>Nombre :{userList.nombre}</h2>
      <h3>apellido :{userList.apellido}</h3>
      <h4>email: {userList.email}</h4>
      <h5>Status :{userList.estado ? "CONECTADO" : "DESCONECTADO"}</h5>
    </div>
  );
}

userList.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  estado: PropTypes.bool,
};

export default userList;

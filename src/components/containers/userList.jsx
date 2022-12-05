import { estadoUser } from "../../models/estado.users";
import { User } from "./Statususer";

const Usuarios = () => {
  const defaultUser = new User(
    "Luis",
    "Magallanes",
    "mail@gmail.com",
    estadoUser.true
  );

  return <div>Usuario : {defaultUser}</div>;
};

export default Usuarios;

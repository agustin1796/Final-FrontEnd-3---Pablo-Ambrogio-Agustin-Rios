import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/favorite"}>Favorite</NavLink>
    </nav>
    // <nav className="bg-blue-500 p-4">
    //   <div className="mx-auto flex justify-between items-center">
    //     <div className="text-white text-xl font-bold">Logo</div>
    //     <div className="flex space-x-4">
    //       <NavItem href="/">Inicio</NavItem>
    //       <NavItem href="/contacto">Contacto</NavItem>
    //       <NavItem href="/dentistas">Dentistas</NavItem>
    //       <NavItem href="/favoritos">Favoritos</NavItem>
    //     </div>
    //   </div>
    // </nav>
  );
};

// const NavItem = ({ href, children }) => {
//   return (
//     <a
//       href={href}
//       className="text-white hover:text-gray-300 transition duration-300"
//     >
//       {children}
//     </a>
//   );
// };

export default NavBar
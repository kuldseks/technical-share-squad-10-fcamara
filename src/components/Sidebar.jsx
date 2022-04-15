import { NavLink, Link } from 'react-router-dom';
import { AiOutlineTeam } from 'react-icons/ai';

import { expertises } from '../utils/data';
import logo from '../assets/images/logo.png';

const isNotActiveStyle =
  'flex items-center px-5 gap-3 text-black hover:text-navColor hover:font-extrabold transition-all duration-200 ease-in-out';
const isActiveStyle =
  'flex items-center px-7 py-1 gap-3 ml-2 font-extrabold text-navColor rounded-l-full bg-white border-accent transition-all duration-200 ease-in-out';

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-gray-200 h-full 'overflow-y-scroll' min-w-210 hide-scrollbar shadow-2xl">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-275" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiOutlineTeam fontSize={25} />
            Encontre um mentor
          </NavLink>
          <h3 className="text-black font-bold mt-2 px-5 text-base 2xl:text-xl text:font-extrabold text-grey-800">
            Áreas de atuação:
          </h3>
          {expertises.slice(0, expertises.length).map((expertise) => (
            <NavLink
              to={`/expertise/${expertise.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={expertise.name}
            >
              {expertise.value}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`/user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white text-black rounded-lg shadow-2xl mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;

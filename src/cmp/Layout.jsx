import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVideo, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaHome, FaFire, FaPlayCircle, FaFilm } from 'react-icons/fa';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Layout = ({children}) => {
  const [open, setOpen] = useState(true);

  const menu = [
    {
      label: 'Home',
      icon: <FaHome />,
    },
    {
      label: 'Shorts',
      icon: <FaFire />,
    },
    {
      label: 'Subscriptions',
      icon: <FaPlayCircle />,
    },
    {
      label: 'Movies',
      icon: <FaFilm />,
    },
    {
      label: 'Home',
      icon: <FaHome />,
    },
    {
      label: 'Shorts',
      icon: <FaFire />,
    },
    {
      label: 'Music',
      icon: <FaPlayCircle />,
    },
    {
      label: 'Play',
      icon: <FaFilm />,
    },
    {
        label: 'Play',
        icon: <FaFilm />,
      },
  ];

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <nav className="bg-white-600 fixed top-0 left-0 w-full h-16 z-10 border-b flex items-center justify-between">
        <div className="flex gap x-6 items-center justify-around">
          <button
            onClick={handleToggleMenu}
            className="p-2 ml-2 hover:bg-gray-300 rounded transition-colors duration-300"
            style={{
              fontFamily: 'material-symbols-outlined',
              fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
            style={{ width: 78 }}
          />
        </div>
        <div className="flex item-center">
          <form>
            <input
              type="text"
              className="border border-slate rounded-r rounded-full transition-colors p-3"
              style={{
                height: 44,
                width: 600,
              }}
              placeholder="Search"
            />
            <button
              type="submit"
              className="ml-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300 border border-black rounded-l w-16"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="flex gap x-3 items-center justify-around basis-1/6">
          <button
            onClick={handleToggleMenu}
            className="p-2 ml-2 hover:bg-gray-300 rounded transition-colors duration-300"
            style={{
              fontFamily: 'material-symbols-outlined',
              fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
            }}
          >
            <FontAwesomeIcon icon={faBell} className="text-500 text-xl" />
          </button>
          <button
            onClick={handleToggleMenu}
            className="p-2 ml-2 hover:bg-gray-300 rounded transition-colors duration-300"
            style={{
              fontFamily: 'material-symbols-outlined',
              fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
            }}
          >
            <FontAwesomeIcon icon={faVideo} className="text-500 text-xl" />
          </button>
          <img
            src="https://yt3.ggpht.com/m4-zovRTm7FJQoGMFm-0Fl1BnJBzenbiFeQeaGnBtzLxRrj1u8D7n1ypDvY4dQIZhU22PpzWE8g=s68-c-k-c0x00ffffff-no-rj"
            alt=""
            style={{ width: 48 }}
            className="rounded-full"
          />
        </div>
      </nav>
      <aside
        className={`overflow-y-scroll bg-white-600 h-full fixed top-0 left mt-16 border-r flex flex-col gap-y-3 py-3 ${
          open ? '' : 'sm:text-sm'
        }`}
        style={{
          width: open ? 251 : 91,
          transition: 'width 0.3s ease',
        }}
      >
        {menu.map((item, index) => (
          <button key={index} className={`flex ${open ? 'flex-row' : 'flex-col'} items-center justify-center  p-3`}>
            <span className={`text-slate-888 text-2xl mr-2 ${open ? '' : 'text-sm'}`}>{item.icon}</span>
            <span className={`capitalize text-slate text-lg ${open ? '' : 'text-sm'}`}>{item.label}</span>
          </button>
        ))}
      </aside>
      <section
        className="mt-16 p-5 ml-251"
        style={{
          marginLeft: open ? 251 : 90,
          transition: 'margin-left 0.3s ease',
        }}
      >
      {children}
      </section>
    </div>
  );
};

export default Layout;

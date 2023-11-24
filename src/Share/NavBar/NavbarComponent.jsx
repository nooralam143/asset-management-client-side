import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../Navbar/Navbar.css"
import { AuthContext } from '../../providers/AuthProvider';

const NavbarComponent = () => {
  const { user, logOut } = useContext(AuthContext);


  const handalSignout = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <Navbar fluid rounded>
      <Link href="/" className='flex'>
        <img src="/ap-logo.svg" className="mr-3 h-6 sm:h-9" alt="AssetPro Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#363E51]">Asset<span className='text-[#FF1F1F]'>Pro</span></span>
      </Link>
      <div className="flex md:order-2">
        {
          user ?
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={user.photoURL} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><button onClick={handalSignout}>Sign out</button></Dropdown.Item>
              </Dropdown>
            </>
            :

            <Link to="/login">
              <button className="btn btn-sm h-10 pr-1">Login</button>
            </Link>

        }
        <Navbar.Toggle />
      </div>


      <Navbar.Collapse>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/signup-employee">Join As Employee</NavLink></li>
          <li><NavLink to="/signup-admin">Join As HR/Admin</NavLink></li>


      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import { fetchOnePet } from '../store/pet';
import UserDropdown from './UserDropdown';
import './css/NavBar.css'
// import { fetchAllProducts } from '../store/product';
import { fetchOneOrder } from '../store/order';

const NavBar = () => {
  // const history = useHistory()

  const user = useSelector(state => state.session.user);
  const pet = useSelector((state) => state.pet);

  pet.id && console.log(pet, "NAV PETtttt")
  // const orderObj = useSelector(state => state.order);
  // console.log('navbar orderObj', orderObj)
  // const orderSize = useSelector(state => {
  //   if (state.order.order.orderProducts === {}) return null
  //   else return Object.values(state.order?.order?.orderProducts).length
  // });

  // console.log('size?', orderSize)

  // console.log('navbar orderProducts', orderSize)

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchOneOrder(user?.id));
    dispatch(fetchOnePet(user?.id));
    // dispatch(fetchAllProducts());
  }, [dispatch, user?.id]);



  return (
    <nav className='NavBar'>
      {/* <div> */}
      <div>
        <NavLink to='/' exact={true} className='crunchy'>
          Crunchy
        </NavLink>
      </div>
      <div className='account-cart'>
        <div>
          <UserDropdown />
        </div>
        <NavLink to='/cart'
          className='cart-button'>
          <i class="fa-solid fa-cart-shopping" />
          &nbsp;&nbsp;&nbsp;cart
          <div className='dropdown-arrow'>
            <i class="fa-solid fa-chevron-down" />
          </div>
        </NavLink>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;

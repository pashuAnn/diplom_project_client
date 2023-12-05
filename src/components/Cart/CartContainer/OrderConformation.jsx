import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from'../CartContainer/OrderConformation.module.css';
import { useDispatch } from 'react-redux';
import { deleteAllItems } from '../../../core/redux/redusers/cardSlice';

export default function OrderConformation() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(deleteAllItems());
    }, [dispatch]);
  
    return (
      <div className={s.orderConformationContainer}>
        <h2>Your order has been accepted</h2>
        <p>We have sent more detailed information about delivery dates to your e-mail</p>
        <Link to="/allProducts" className={s.returnBtn}>
          <i className="fa-solid fa-cart-shopping"> </i>
          RETURN TO PRODUCTS
        </Link>
      </div>
    );
  }
import React, { useEffect } from 'react';
import s from'../CartContainer/OrderConformation.module.css';
import { useDispatch } from 'react-redux';
import { deleteAllItems } from '../../../core/redux/slices/cardSlice';

export default function OrderConformation() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(deleteAllItems());
    }, [dispatch]);
  
    return (
      <div className={s.orderConformationContainer}>
        <h2>Your order has been accepted</h2>
        <p>We have sent more detailed information about delivery dates to your e-mail</p>
      </div>
    );
  }
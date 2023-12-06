import React, { useState } from "react";
import { getDiscontProducts } from "../../../core/redux/slices/allProductsSlice";
import { useDispatch } from "react-redux";
import { getDiscontProductsByCategory } from "../../../core/redux/slices/productsByCatSlice";
import "./DiscountForm.css";
export default function DiscontForm() {
  const dispatch = useDispatch();

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  const get_discont = (e) => {
    
    dispatch(getDiscontProducts
    (e.target.checked));

    dispatch(getDiscontProductsByCategory(e.target.checked));
  
  };

  return (
    <div className="checkbox-wrapper-3">
      <div className="checkbox-container">
        <p>Editors choice</p>

        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={handleChange}
          onClick={get_discont}
          id="cbx-3"
        />

        <label htmlFor="cbx-3" className="toggle">
          <span></span>
        </label>
      </div>
    </div>
  );
}
import React from "react";

function CartItem(props) {
  
  
  return (
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
      
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.data.title}</div>
        <p>Qty:{props.data.count}</p>
        Rs.{props.data.price * props.data.count} 
         </div>
      <span
        onClick={() => {
          props.handleRemove(props.data.id);
        }}
        style={{ cursor: "pointer" }}
        class="badge bg-danger rounded-pill"
      >
       <i class="far fa-trash-alt"></i> Remove
      </span>
      
    </li>
  );
}

export default CartItem;

import React from 'react'

function CartColumn() {
  return (
    <div className="container-fluid text-center text-capitalize font-weight-bold d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upppercase">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upppercase">name of products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upppercase">total</p>
        </div>
      </div>
    </div>
  )
}

export default CartColumn

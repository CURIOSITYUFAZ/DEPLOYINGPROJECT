import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row2 checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Daxil Ol</div>
      <div className={props.step2 ? 'active' : ''}>Çatdırılma</div>
      <div className={props.step3 ? 'active' : ''}>Ödəniş Metodu</div>
      <div className={props.step4 ? 'active' : ''}>Sifariş et</div>
    </div>
  );
}

import PropTypes from 'prop-types';

export default function Shipping({ handlePayment, fees }) {
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비:{fees}
        <br />
      </div>
      <br />
      <button type="button" onClick={handlePayment}>
        결제
      </button>
    </>
  );
}

Shipping.propTypes = {
  fees: PropTypes.number.isRequired,
  handlePayment: PropTypes.func.isRequired,
};

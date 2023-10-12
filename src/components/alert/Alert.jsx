import "./Alert.css";

function Alert({ handleClick, attempts }) {
  return (
    <div className="alert_wraper">
      <div className="alert_box">
        <p className="alert_content">You Win in: {attempts} attempts</p>
        <button onClick={handleClick} className="alert_button">
          Restart
        </button>
      </div>
    </div>
  );
}

export default Alert;

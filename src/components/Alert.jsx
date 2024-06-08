import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/alerts";
import "../styles/Alert.css"; // Importing custom CSS for additional styling

const Alert = () => {
  const flashedMessages = useSelector((state) => state.alerts.values);
  const dispatch = useDispatch();

  return (
    <div className="alerts-container">
      {flashedMessages.map(({ category, message }, index) => (
        <div
          key={index}
          className={`alert alert-${category} alert-dismissible fade show custom-alert`}
          role="alert"
        >
          <span>{message}</span>
          <button
            type="button"
            className="close custom-close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              dispatch(remove({ category, message }));
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Alert;

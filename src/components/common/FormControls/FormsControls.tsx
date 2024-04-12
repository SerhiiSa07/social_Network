import React from "react";
import styles from "./FormControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControls + " " + (hasError ? styles.error : "")}>
      <div>
        <textarea {...props.input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControls + " " + (hasError ? styles.error : "")}>
      <div>
        <textarea {...props.input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

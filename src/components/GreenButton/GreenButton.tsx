import React, { ReactNode, MouseEvent } from "react";
import { ButtonProps } from "@mui/material/Button/Button";
import { Button } from "@mui/material";
import styles from "./GreenButton.module.css";

interface GreenButtonProps extends ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const GreenButton: React.FC<GreenButtonProps> = ({
  className,
  children,
  onClick,
  ...rest
}) => (
  <Button
    className={`${styles["green-button"]} ${className}`}
    variant="contained"
    onClick={onClick}
    {...rest}
  >
    {children}
  </Button>
);

export default GreenButton;

import React, { ReactNode, MouseEvent } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import "./GreenButton.css";

interface GreenButtonProps extends ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const GreenButton: React.FC<GreenButtonProps> = ({
  children,
  onClick,
  ...rest
}) => (
  <Button
    className="green-button"
    variant="contained"
    onClick={onClick}
    {...rest}
  >
    {children}
  </Button>
);

export default GreenButton;

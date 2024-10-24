import { ButtonHTMLAttributes } from "react";

interface LogoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export default LogoutButtonProps;
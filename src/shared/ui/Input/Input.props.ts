import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    IconLeft: boolean
    IconRight: boolean
}
export default InputProps;
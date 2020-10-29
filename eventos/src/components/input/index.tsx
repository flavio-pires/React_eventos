import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) =>{
    return(
        <div>
            <label></label>
            <input type="text"/>
        </div>
    )
}

export default Input;
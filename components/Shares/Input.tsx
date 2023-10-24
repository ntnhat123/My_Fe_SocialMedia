import React , { FC } from 'react'
import { InputProps } from "./types";
import {PiWarningCircleFill }   from 'react-icons/pi'

const Input: React.FC<InputProps> = (props) => {
    const { type, className, placeholder, isShowTextError, onChange, isValidate, value, textError } = props
    return (
        <div>
            <div className='w-full'>
            <input
                type={type}
                value={value}
                className={`
                    input border-2 bg-[#ffffff]  p-3 w-full 
                    focus:outline-none focus:ring-2 focus:ring-[#58ffb4] 
                    focus:border-transparent
                    h-[44px] mb-[2px] ${className}
                    ${isValidate ? 'border-[red] focus:border-[red]  focus:outline-[red]' : ''}      
                 `}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange && onChange(e)
                }}
            />
            {
                isShowTextError && isValidate && (
                    <div className='flex items-center text-[red] font-semibold text-sm space-x-1'>
                        <PiWarningCircleFill
                            size={15}
                        />
                        <div className=''>{textError && textError}</div>
                    </div>
                )
            }
        </div>
        </div>
    );
    }

export default Input;

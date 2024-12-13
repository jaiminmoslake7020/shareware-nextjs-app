import React, {ChangeEvent, useContext, useEffect, useRef} from 'react';
import {SinAppContext} from '@/provider/SinAppContext';


const RealInputBox = () => {
    const ref = useRef<null | HTMLInputElement>(null);

    const {
        inputValue, setInputValue, inputFocus
    } = useContext(SinAppContext);

    const onKeydown =  (event: KeyboardEvent) => {
        const keyValue = event ? ( event.key ? event.key : null ): null;
        // Block 'e', 'E', and other keys not needed for numbers
        if (keyValue === "e" || keyValue === "E" || keyValue === "+" || keyValue === "-") {
            event.preventDefault();
        } else if (
            !(
                keyValue === "Backspace" || keyValue === "Delete"
            ) &&
            inputValue && inputValue.length === 9
        ) {
            event.preventDefault();
        }
    }

    const onChange = (e:ChangeEvent) => {
        const value = e ? ( e.target ? (e.target as HTMLInputElement).value : null ): null;
        if (typeof value === "string") {
            setInputValue( value );
        }
    }


    useEffect(() => {
        const mount = () => {
            if (ref && ref.current && inputFocus) {
                ref.current?.focus();
            }
        }
        return mount();
    }, [inputFocus])

    return (
        <div className={"real-input-box"}>
            <input
                ref={ref}
                type={"number"}
                   value={inputValue}
                   onChange={onChange}
                   onKeyDown={onKeydown as unknown as React.KeyboardEventHandler<HTMLInputElement>}
            />
        </div>
    );
}

export default RealInputBox;

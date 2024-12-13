import React, {useContext} from 'react';
import {SinAppContext} from '@/provider/SinAppContext';

export type IllusionInputWrapperPropTypes = {
    inputItem: string | null,
    showCursor: boolean,
};

const IllusionInputWrapper = (props: IllusionInputWrapperPropTypes) => {
    const {
        inputItem,
        showCursor
    } = props;

    const {
        setInputFocus
    } = useContext(SinAppContext);

    const ssnFocus = () => {
        setInputFocus(true);
    }

    const inputItemClass = inputItem !== '' && inputItem !== null ? 'input-is-filled' : '';
    const currentActiveBoxClass = showCursor ? 'cursor-is-here' : '';
    return (
        <div className={`illusion-input-wrapper ${currentActiveBoxClass} ${inputItemClass}  `} role={"button"}
            onClick={ssnFocus}
        >
            <span className={"illusion-input-span"}>
                {inputItem}
            </span>
            <div className={"cursor-supporter"}>
            </div>
        </div>
    );
}

export default IllusionInputWrapper;

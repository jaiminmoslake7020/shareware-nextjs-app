import React, {useContext, useEffect, useMemo, useState} from 'react';
import IllusionInputWrapper from '@/components/illusion-wrapper/IllusionInputWrapper';
import {SinAppContext} from '@/provider/SinAppContext';


const ssnInputs = new Array(9).fill(null);

const IllusionWrapper = () => {

    const {
        inputValue,  setInputFocus, validationResult, inputFocus
    } = useContext(SinAppContext);
    const stringArray = useMemo(() => {
        return inputValue ? String( inputValue ).split("") : []
    },[inputValue]);
    const [cursorIndex, setCursorIndex] = useState<null | number>(null);

    const ssnFocus = () => {
        setInputFocus(true);
    }

    const documentClick = (e:Event) => {
        const clList = (e.target as HTMLElement)?.classList;
        if (
            clList.contains('illusion-input-wrapper') ||
            clList.contains('illusion-input-span')
        ) {
        } else {
            setInputFocus(false);
            setCursorIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', documentClick);
        return () => {
            document.removeEventListener('click', documentClick);
        }
    });

    useEffect(() => {
        const mount = () => {
            let cursorIndexInner = null as null | number;
            ssnInputs.forEach((item: null, index: number) => {
                if (typeof stringArray[index] === "undefined" && cursorIndexInner === null) {
                    cursorIndexInner = index;
                    setCursorIndex(index);
                }
            });
        }
        return mount();
    }, [stringArray])

    const additionalClasses = typeof validationResult === 'boolean' ? `results-available ${validationResult ? 'validation-success' : 'validation-error' } ` : '';

    return (
        <div className={`illusion-wrapper ${additionalClasses} `} role={"button"} onClick={ssnFocus} >
            {
                ssnInputs.map((i,index) => <IllusionInputWrapper key={'item-'+index} inputItem={typeof stringArray[index] !== "undefined" ? stringArray[index] : ''} showCursor={inputFocus && additionalClasses === '' ? cursorIndex === index : false} />)
            }
        </div>
    );
}

export default IllusionWrapper;

import {createContext, useState, ReactNode, useEffect, Context} from 'react';
import {validateSSN} from '@/business-logic/ssn';


export type SinAppContextType = {
    validationResult: boolean | null,
    inputFocus: boolean,
    setInputFocus: (v: boolean) => void,
    inputValue: string,
    setInputValue: (v: string) =>  void,
};

export const SinAppContext : Context<SinAppContextType> = createContext({
    validationResult: null as boolean | null,
    inputFocus: true as boolean,
    setInputFocus: (v: boolean) =>  { console.log(v); },
    inputValue: '',
    setInputValue: (v: string) =>  { console.log(v); },
});

export type SinAppContextProviderType = {
    children: ReactNode
}

export const SinAppContextProvider = ({children} : SinAppContextProviderType) => {

    const [inputValue, setInputValue] = useState<string>('');
    const [validationResult, setValidationResult] = useState<boolean | null>(null);
    const [inputFocus, setInputFocus] = useState<boolean>(true);

    useEffect(() => {
        const mount = () => {
            if (inputValue.length === 9) {
                setValidationResult(validateSSN(inputValue));
            } else {
                setValidationResult(null);
            }
        }
        return mount();
    }, [inputValue])

    return <SinAppContext.Provider value={{
        validationResult,
        inputValue,
        inputFocus,
        setInputValue,
        setInputFocus
    }} >
        {children}
    </SinAppContext.Provider>
}

import React from 'react';
import RealInputBox from '@/components/real-input-box/RealInputBox';
import IllusionWrapper from '@/components/illusion-wrapper/IllusionWrapper';
import {SinAppContextProvider} from '@/provider/SinAppContext';

const SinInputWrapper = () => {
    return (
        <SinAppContextProvider>
            <div className={"sin-input-wrapper"}>
                <RealInputBox />
                <label className={"font-semibold"} >Please insert SSN</label>
                <IllusionWrapper />
                <div className={"flex flex-col gap-2 max-w-[350px] lg:max-w-[550px] mt-4"}>
                    <span className={"text-xs text-gray-500 font-semibold"}>Notes</span>
                    <ul className={"list-disc pl-6"}>
                        <li className={"text-xs text-gray-500 font-semibold"}>SSN is 9 digit number.</li>
                        <li className={"text-xs text-gray-500 font-semibold"}>When sum all numbers of SSN.</li>
                        <li className={"text-xs text-gray-500 font-semibold"}>Double the every alternate number starting second number.</li>
                        <li className={"text-xs text-gray-500 font-semibold"}>Final sum of all the number when divided by 10 will have a 0 as remainder.</li>
                    </ul>
                </div>
            </div>
        </SinAppContextProvider>
    );
}

export default SinInputWrapper;

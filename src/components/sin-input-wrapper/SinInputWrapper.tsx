import React from 'react';
import RealInputBox from '@/components/real-input-box/RealInputBox';
import IllusionWrapper from '@/components/illusion-wrapper/IllusionWrapper';
import {SinAppContextProvider} from '@/provider/SinAppContext';

const SinInputWrapper = () => {
    return (
        <SinAppContextProvider>
            <div className={"sin-input-wrapper"}>
                <RealInputBox />
                <IllusionWrapper />
            </div>
        </SinAppContextProvider>
    );
}

export default SinInputWrapper;

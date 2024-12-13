import React from 'react';
import RealInputBox from '@/components/real-input-box/RealInputBox';
import IllusionWrapper from '@/components/illusion-wrapper/IllusionWrapper';
import {SinAppContextProvider} from '@/provider/SinAppContext';
import Notes from '@/components/notes/Notes';

const SinInputWrapper = () => {
    return (
        <SinAppContextProvider>
            <div className={"sin-input-wrapper"}>
                <RealInputBox />
                <label className={"font-semibold"} >Please insert SSN</label>
                <IllusionWrapper />
                <Notes />
            </div>
        </SinAppContextProvider>
    );
}

export default SinInputWrapper;

import React from 'react';

const Notes = () => {
    return (
        <div className={"notes-container"}>
            <span className={"notes-header"}>Notes</span>
            <ul className={"notes-ul"}>
                <li className={"text-xs text-gray-500 font-semibold"}>SSN is 9 digit number.</li>
                <li className={"text-xs text-gray-500 font-semibold"}>When sum all numbers of SSN.</li>
                <li className={"text-xs text-gray-500 font-semibold"}>Double the every alternate number starting second number.</li>
                <li className={"text-xs text-gray-500 font-semibold"}>Final sum of all the number when divided by 10 will have a 0 as remainder.</li>
            </ul>
        </div>
    );
}

export default Notes;

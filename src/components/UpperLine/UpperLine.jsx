/* eslint-disable react/prop-types */

const UpperLine = ({ style }) => {
    return (
        // <div>
        //         <span className=" bg-dark rounded-lg p-1 w-4 h-1"></span>            
        // </div>
        <div>
            <div className={`${style ?? 'w-12 h-1 my-5'} bg-gradient-to-r rounded-lg bg-dark`}></div>
        </div>
    )
};

export default UpperLine;
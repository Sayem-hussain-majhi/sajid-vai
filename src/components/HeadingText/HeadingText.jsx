/* eslint-disable react/prop-types */
import UpperLine from "../UpperLine/UpperLine";

const HeadingText = ({heading, subHeading}) => {
    return (
        <div>
            <UpperLine />
            <p className="text-[12px]">{subHeading}</p>
            <h1 className="text-2xl font-semibold">{heading}</h1>
        </div>
    );
};

export default HeadingText;
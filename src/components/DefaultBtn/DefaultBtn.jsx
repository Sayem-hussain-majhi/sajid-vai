/* eslint-disable react/prop-types */

const DefaultBtn = ({text}) => {
    return (
        <div>
            <button className="text-semibold text-white uppercase py-2 px-7 rounded-[30px] bg-dark text-sm hover:bg-primaryColor duration-300 mt-5">{text}</button>
        </div>
    );
};

export default DefaultBtn;
import React from "react";
import { CountryType } from "../pages/App";

type CountryItemPropsType = {
    countryitem: CountryType;
};

const CountryItem  = (props:CountryItemPropsType) => {
    let item = props.countryitem;

    return (
        <li
            className={item.visited ? "list-item active" : "list-item"}
        >
            {item.country}
        </li>
    );
};

export default CountryItem;
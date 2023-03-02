import React from "react";
import { CountryType } from  '../pages/App';
import CountryItem from "./CountryItem";

type CountryListPropsType = {
    countries: Array<CountryType>;
}

const CountryList = (props:CountryListPropsType) => {
    
    const list = props.countries;

    let countries  = list.map((item) => {
        return (
           <CountryItem
                key={item.no}
                countryitem={item}
            />  
        )
    });

    return <ul className="list">{countries}</ul>
};

export default CountryList;


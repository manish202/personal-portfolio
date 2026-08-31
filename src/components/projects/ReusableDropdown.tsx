import React, { memo } from "react";
import { type FilterNames, type NestedArrayType, type ChangeEventType } from "./constantsAndTypes";

type ReusableDropdownPropsType<T,U> = {
    label: string,
    name: FilterNames,
    options: NestedArrayType<T,U>,
    value: T,
    onChange: (e:ChangeEventType) => void,
}

const ReusableDropdown = memo(function ReusableDropdown<T extends string|number, U extends string|number>({label,name,options,...others}:ReusableDropdownPropsType<T,U>){
    return (
        <div className={`col-md-${name === "techAndPackage" ? 4 : 3}`}>
            <div className="mb-3">
                <label className="form-label">{label}</label>
                <select className="form-select" name={name} {...others}>
                    {name === "techAndPackage" && <option value="all">All</option>}
                    {options.map((opt) => (
                        <option key={opt[0]} value={opt[0]}>
                            {name === "techAndPackage" ? `${opt[0]} (${opt[1]})` : opt[1]}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}) as <T extends string|number, U extends string|number>(props: ReusableDropdownPropsType<T,U>) => React.ReactElement;

export default ReusableDropdown;
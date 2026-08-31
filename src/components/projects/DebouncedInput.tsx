import { useState, useEffect } from "react";
import { type HandleChange, type ChangeEventType } from "./constantsAndTypes";

type DebouncedInputPropsType = {
    name: string,
    handleChange: HandleChange,
    resetInput: boolean,
}

const DebouncedInput = ({name,handleChange,resetInput}:DebouncedInputPropsType) => {
    const [input,setInput] = useState<string>("");
    const onChange = (e:ChangeEventType) => setInput(e.currentTarget.value);
    useEffect(() => {
        const timer = setTimeout(() => {
            handleChange(name,input);
        }, 500);
        return () => clearTimeout(timer);
    },[input]);
    useEffect(() => {
        setInput("");
    },[resetInput]);
    return <input type="text" className="form-control" name={name} value={input} onChange={onChange} />
}

export default DebouncedInput;
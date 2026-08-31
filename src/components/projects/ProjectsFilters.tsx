import { useCallback } from "react";
import ReusableDropdown from "./ReusableDropdown";
import DebouncedInput from "./DebouncedInput";
import {
    type InitialStateType, type HandleChange, type HandleChangeEventType, type SortTypeOptionsType,
    type ProjectTypeOptionsType, type RepoTypeOptionsType, type PreviewTypeOptionsType,
    type TechAndPackagesOptionsType, sortTypeOptions, projectTypeOptions, repoTypeOptions,
    previewTypeOptions, techAndPackagesTypeOptions,
} from "./constantsAndTypes";

type ProjectsFiltersPropsType = {
    state: InitialStateType,
    handleChange: HandleChange,
    reset: () => void,
    resetInput: boolean
}

const ProjectsFilters = ({state,handleChange,reset,resetInput}:ProjectsFiltersPropsType) => {
    const onChange: HandleChangeEventType = useCallback((e) => {
        const {name,value} = e.currentTarget;
        handleChange(name,value);
    },[]);
    return (
        <div className="row my-3">
            <ReusableDropdown<SortTypeOptionsType,string>
                label="Sort By" name="sortBy" options={sortTypeOptions}
                value={state.sortBy} onChange={onChange}
            />
            <ReusableDropdown<ProjectTypeOptionsType,string>
                label="Choose Project Type" name="projectType" options={projectTypeOptions}
                value={state.projectType} onChange={onChange}
            />
            <ReusableDropdown<RepoTypeOptionsType,string>
                label="Choose Repository Type" name="repoType" options={repoTypeOptions}
                value={state.repoType} onChange={onChange}
            />
            <ReusableDropdown<PreviewTypeOptionsType,string>
                label="Choose Preview Type" name="previewType" options={previewTypeOptions}
                value={state.previewType} onChange={onChange}
            />
            <ReusableDropdown<TechAndPackagesOptionsType,number>
                label="Choose Tech/Package" name="techAndPackage" options={techAndPackagesTypeOptions}
                value={state.techAndPackage} onChange={onChange}
            />
            <div className="col-md-6">
                <label className="form-label">Search</label>
                <DebouncedInput name="search" handleChange={handleChange} resetInput={resetInput} />
            </div>
            <div className="col-md-2 align-self-center mt-3">
                <button type="button" className="btn btn-primary" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default ProjectsFilters;
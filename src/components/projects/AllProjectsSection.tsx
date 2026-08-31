import React, { useReducer, useState } from "react";
import styles from "./Projects.module.css";
import {
    fetchProjectsData, type InitialStateType, type ActionType, type HandleChange,
    type HandlePaginationType,
} from "./constantsAndTypes";
import ProjectsFilters from "./ProjectsFilters";
import ProjectsContainer from "./ProjectsContainer";
import Pagination from "./Pagination";

const initialState: InitialStateType = fetchProjectsData({});

const reducer = (state:InitialStateType,action:ActionType) => {
    switch(action.type){
        case "HANDLE_CHANGE":
            return fetchProjectsData({...state,...action.payload,page:1});
        case "PAGINATE":
            const newPage = state.page + (action.payload.dir === 'next' ? +1 : -1);
            return fetchProjectsData({...state,page:newPage});
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const AllProjectsSection: React.FC = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const [resetInput,setResetInput] = useState<boolean>(false);
    const handleChange: HandleChange = (name,value) => dispatch({type:"HANDLE_CHANGE",payload:{[name]:value.trim()}});
    const handlePagination: HandlePaginationType = (dir) => dispatch({type:"PAGINATE",payload:{dir}});
    const reset = () => {
        dispatch({type:"RESET",payload:{}});
        setResetInput(old => !old);
    }
    return (
        <section id="projects" className={`min-vh-100 ${styles.projects}`}>
            <div className="container pt-5">
                <div className={`${styles.sectionHeading} mb-1`}>
                    <span>My Entire Journey</span>
                    <h2>All Projects</h2>
                    <div className={styles.headingLine}></div>
                </div>
                <ProjectsFilters state={state} handleChange={handleChange} reset={reset} resetInput={resetInput} />
                {state.totalRecords > 0 ? (<ProjectsContainer filteredProjects={state.filteredProjects} />):(
                    <div className="row text-center">
                        <h3>No Projects Found!</h3>
                    </div>
                )}
                {state.totalRecords > state.limit && <Pagination state={state} handlePagination={handlePagination} />}
            </div>
        </section>
    )
}

export default AllProjectsSection;
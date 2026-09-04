import React from "react";
import projects from "./projects";

export const techAndPackages = [
    'html', 'css', 'javascript', 'jquery', 'bootstrap', 'owl-carousel', 'aos.js', 'okzoom.js', 'php',
    'anime.js', 'svg', 'swiper.js', 'mysql', 'react', 'react-dom', 'react-router-dom', 'react-scripts',
    'gh-pages', 'react-toastify', '@emotion/react', '@emotion/styled', '@mui/icons-material',
    '@mui/material', 'firebase', 'react-cookie', 'bcryptjs', 'node', 'express', 'mongodb', 'mongoose',
    'jsonwebtoken', 'cors', 'dotenv', 'wordpress', 'serve', 'next', 'vite', 'laravel', 'react-redux',
    '@reduxjs/toolkit', 'body-parser', 'multer', '@babel/core', '@babel/preset-env', '@babel/preset-react',
    'babel-loader', 'css-loader', 'html-webpack-plugin', 'mini-css-extract-plugin', 'style-loader',
    'webpack', 'webpack-cli', 'webpack-dev-server', 'sass', 'typescript', 'git-github', 'cookie-parser',
    'styled-components', '@auth0/auth0-react', 'react-icons', 'redux', 'graphql', '@apollo/client',
    'apollo-server', 'apollo-server-core', 'axios', 'hbs', 'joi', 'moment-timezone', 'xml-formatter',
    'xmldom', 'xpath', 
] as const;
export type TechAndPackagesOptionsType = typeof techAndPackages[number] | "all";

export const sortTypeOptions = [
    ["desc","Latest First"], ["asc","Oldest First"]
] as const;
export type SortTypeOptionsType = typeof sortTypeOptions[number][0];

export const projectTypeOptions = [
    ["all","All"], ["highlighted","Show Highlighted"], ["normal","Show Normal"]
] as const;
export type ProjectTypeOptionsType = typeof projectTypeOptions[number][0];

export const repoTypeOptions = [
    ["all","All"], ["public","Public Repository"], ["private","Private Repository"]
] as const;
export type RepoTypeOptionsType = typeof repoTypeOptions[number][0];

export const previewTypeOptions = [
    ["all","All"], ["available","Available"], ["not-available","Not Available"]
] as const;
export type PreviewTypeOptionsType = typeof previewTypeOptions[number][0];

export const techAndPackagesTypeOptions: [TechAndPackagesOptionsType,number][] = (() => {
    const mapItems = new Map<TechAndPackagesOptionsType,number>();
    const items = projects.flatMap((item) => item.techAndPackages);
    items.forEach((item) => {
        mapItems.set(item, (mapItems.get(item) || 0) + 1);
    });
    return Array.from(mapItems.entries()).sort((a, b) => b[1] - a[1]);
})();

export interface Project{
    id: number,
    title: string,
    description: string[],
    images: string[],
    approxStartDate: string,
    approxEndDate: string,
    techAndPackages: TechAndPackagesOptionsType[],
    sourceCode: string,
    livePreview: string | null,
    isHighlighted: boolean,
    isPrivateRepo: boolean,
}

export interface FetchProjectsDataParams{
    page?: number,
    limit?: number,
    sortBy?: SortTypeOptionsType,
    projectType?: ProjectTypeOptionsType,
    repoType?: RepoTypeOptionsType,
    previewType?: PreviewTypeOptionsType,
    techAndPackage?: TechAndPackagesOptionsType,
    search?: string,
}

export const fetchProjectsData = ({
    page=1, limit=6, sortBy="desc", projectType="all", repoType="all", previewType="all",
    techAndPackage="all", search="",
}: FetchProjectsDataParams) => {
    let data = [...projects];
    data.sort((a,b) => sortBy === "desc" ? b.id - a.id : a.id - b.id);
    if(projectType !== "all"){
        data = data.filter(item => item.isHighlighted === (projectType === "highlighted"));
    }
    if(repoType !== "all"){
        data = data.filter(item => item.isPrivateRepo === (repoType === "private"));
    }
    if(previewType !== "all"){
        data = data.filter(item => (item.livePreview !== null) === (previewType === "available"));
    }
    if(techAndPackage !== "all"){
        data = data.filter(item => item.techAndPackages.includes(techAndPackage));
    }
    if(search !== ""){
        const searchTerm = search.trim().toLowerCase();
        data = data.filter(item => item.title.toLowerCase().includes(searchTerm));
    }
    const offset = (page - 1) * limit;
    return {
        filteredProjects: data.slice(offset,offset+limit),
        page,limit,totalRecords: data.length,
        sortBy,projectType,repoType,previewType,techAndPackage,search,
    }
}

export type InitialStateType = ReturnType<typeof fetchProjectsData>;
export type ActionType = {type:"HANDLE_CHANGE"|"PAGINATE"|"RESET",payload:any};
export type HandleChange = (name:string,value:string) => void;
export type HandlePaginationType = (param:"next"|"prev") => void;
export type ChangeEventType = React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
export type HandleChangeEventType = (e:ChangeEventType) => void;
export type FilterNames = "sortBy" | "projectType" | "repoType" | "previewType" | "techAndPackage" | "search";
export type NestedArrayType<T,U> = readonly (readonly [T,U])[]
const techAndPackages = [
    
] as const;

export type TechAndPackagesOptionsType = typeof techAndPackages[number] | "all";

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
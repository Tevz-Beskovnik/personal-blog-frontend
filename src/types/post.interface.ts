import React from "react";

export interface Post{
    id: number,
    title: string,
    description: string,
    date: string,
    views: number,
    childComp?: React.ReactNode
};

export interface BlogInterface
{
    id: number,
    title: string,
    description: string,
    content: string,
    date: string,
    views: number,
}

export interface PostPreview
{
    id: number,
    title: string,
    description: string,
    date: string,
    views: number
}
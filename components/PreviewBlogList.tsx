'use client'

import { usePreview } from "../lib/sanity.preview";
import Bloglist from "./BlogList";

type Props = {
    query: string;
}

export default function PreviewBlogList({query}: Props) {
    const posts =usePreview(null, query);
       
    console.log("loading preview data....", posts)
    return<Bloglist posts={posts} />;}
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import ShowCategory from "./Pages/Category/ShowCategory";
import ShowForum from "./Pages/Forum/ShowForum";

export default function AdminList () {
    return(
        <Admin >
        <Resource name="Categories" list={ShowCategory} />
        <Resource name="Forums" list={ShowForum} />
    </Admin>
    )
   
}
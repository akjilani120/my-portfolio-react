import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomProfileLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" , color: match? "red" : "white", padding:"10px" ,  borderRadius:"10px"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
};

export default CustomProfileLink;
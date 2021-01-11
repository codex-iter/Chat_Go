import React from "react";
const Homepage = React.lazy(() => import("../Containers/Homepage"));
export const routes = [{ id: 0, path: "/", component: Homepage }];

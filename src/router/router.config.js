import loadable from "react-loadable";
import React, { useEffect } from "react";

// function Loading() {
//     useEffect(() => {
//         Toast.loading('Loading...', 1, () => {
//         })
//     }, [])
//     return <div>

//     </div>
// }

function Loading() {
  return <div>loading...</div>;
}

const Home = loadable({
  loader: () => import("../views/pages/home"),
  loading: Loading
});

const Page = loadable({
  loader: () => import("../views/pages/page"),
  loading: Loading
});

const My = loadable({
  loader: () => import("../views/pages/my"),
  loading: Loading
});

const route = [
  {
    path: "/page",
    component: Page,
    children: [
      {
        path: "/page/page",
        component: Home,
        LinkName: "首页"
      },
      {
        path: "/page/my",
        component: My,
        LinkName: "我的"
      },
      {
        from: "/page",
        to: "/page/page"
      }
    ]
  },
  {
    from: "/",
    to: "/page"
  }
];

export default route;

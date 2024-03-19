import { lazy } from "react";
import BlogDetailsPage from "../pages/BlogDetailsPage";

const AboutPage = lazy(() => import("../pages/About"));
const TourDetailPage = lazy( () => import('../pages/TourDetailPage') )
const SignupPage = lazy( () => import('../pages/Signup') )
const LoginPage = lazy( () => import('../pages/Login') )
const ContactPage = lazy( () => import('../pages/Contact') )
const DashboardPage = lazy( () => import('../pages/dashboard/Dashboard') )
const BlogsPage = lazy( () => import('../pages/Blogs') )

const coreRoutes = [
  {
    path: "/about",
    title: "About",
    component: AboutPage,
  },
  {
    path: "/tour/:id",
    title: "Tour",
    component: TourDetailPage,
  },
  {
    path: "/blogs/:id",
    title: "Blogs Details",
    component: BlogDetailsPage,
  },
  {
    path: "/signup",
    title: "Signup",
    component:  SignupPage,
  },
  {
    path: "/login",
    title: "Login",
    component:  LoginPage,
  },

  {
    path: "/contact",
    title: "Contact",
    component:  ContactPage,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component:  DashboardPage,
  },
  {
    path: "/blogs",
    title: "Blogs",
    component:  BlogsPage,
  },
];

const routes = [...coreRoutes];

export default routes;

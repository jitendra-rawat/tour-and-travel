import { lazy } from "react";
import BlogDetailsPage from "../pages/BlogDetailsPage";

const AboutPage = lazy(() => import("../pages/About"));
const TourDetailPage = lazy( () => import('../pages/TourDetailPage') )
const SignupPage = lazy( () => import('../pages/Signup') )
const LoginPage = lazy( () => import('../pages/Login') )
const ContactPage = lazy( () => import('../pages/Contact') )

const BlogsPage = lazy( () => import('../pages/Blogs') )

const BlogsDetailPage = lazy( () => import('../pages/BlogDetailsPage') )

const TourPage = lazy( () => import('../components/Tours') )

const coreRoutes = [
  {
    path: "/about",
    title: "About",
    component: AboutPage,
  },
  {
    path: "/tour/:id",
    title: "Tour id",
    component: TourDetailPage,
  },
  {
    path: "/tour",
    title: "Tour",
    component: TourPage,
  },
  {
    path: "/blogs/:id",
    title: "Blogs Detail",
    component: BlogsDetailPage,
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
    path: "/blogs",
    title: "Blogs",
    component:  BlogsPage,
  },
];

const routes = [...coreRoutes];

export default routes;

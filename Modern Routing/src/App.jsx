import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ContactInfo from "./component/ContactInfo";
import ContactForm from "./component/ContactForm";
import NotFound from "./component/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { JobDetailsLoader } from "./component/JobDetails";
import Error from "./component/Error";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="about" element={<About />} />
          <Route path="form" element={<ContactForm />} />
          <Route path="info" element={<ContactInfo />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={JobDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

// Created Routing using createBrowserRouter, createRoutesFromElements, RouterProvider
// Showed the use useNavigate to navigate the pages programatically
// implemented nested layouts using layouts
// Page not Found -> Backup UI
// React Router Loader -> Fetch Data for a route before route is loaded for easy rendering
// +  Simulating API using /asset/jobs -> npx json-server npx json-server --watch data.json --port 5000
// +  http://localhost:5000/jobs

// ROute Parameters
// useParams -> use to retrive dynamic segments directly from the URL
// Router Error Elements ->

// searchParams -> ? -> useSearchParams  ->Pending
// stateParams -> ? -> useLocation  ->Pending

import React from "react";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import HomeCards from "./components/homeCards";
import JobListings from "./components/jobListings";
import ViewAllJobs from "./components/viewAllJobs";

//Main App Component
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};
export default App;

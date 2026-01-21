import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJob";
import EditJobPage from "./pages/EditJobPage";
import JobPage, { jobloader } from "./pages/JobPage";

//Main App Component
const App = () => {
  //AddJob function
  const addNewJob = async (newJob) => {
    const res = await fetch("/api/jobs/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //DeleteJob function
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    console.log("Delete", id);
    return;
  };

  //EditJob function
  const editJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    });

    console.log("Update", job);
    return;
  };
  //Routing system
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobloader}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addNewJob} />}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updatedJobSubmit={editJob} />}
          loader={jobloader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;

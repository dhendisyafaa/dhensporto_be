import express from "express";
import {
  createProject,
  deleteProjectById,
  editProjectById,
  getAllProjects,
  getProjectById,
} from "./project.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.send(projects);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = await getProjectById(parseInt(projectId));

    res.send(project);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProjectData = req.body;

    const project = await createProject(newProjectData);

    res.send({
      data: project,
      message: "create project success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const projectData = req.body;

    const project = await editProjectById(parseInt(projectId), projectData);

    res.send({
      data: project,
      message: "edit project success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;

    await deleteProjectById(parseInt(projectId));

    res.send("project deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;

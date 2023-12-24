import {
  deleteProject,
  editProject,
  findProjectById,
  findProjects,
  insertProject,
} from "./project.repository.js";

export const getAllProjects = async () => {
  const projects = await findProjects();

  return projects;
};

export const getProjectById = async (id) => {
  const project = await findProjectById(id);

  if (!project) {
    throw Error("Project not found");
  }

  return project;
};

export const createProject = async (newProjectData) => {
  const project = await insertProject(newProjectData);

  return project;
};

export const editProjectById = async (id, projectData) => {
  await getProjectById(id);

  const project = await editProject(id, projectData);

  return project;
};

export const deleteProjectById = async (id) => {
  await getProjectById(id);

  await deleteProject(id);
};

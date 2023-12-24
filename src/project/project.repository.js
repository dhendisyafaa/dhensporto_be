import prisma from "../db/index.js";

export const findProjects = async () => {
  const projects = await prisma.project.findMany();

  return projects;
};

export const findProjectById = async (id) => {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  return project;
};

export const insertProject = async (projectData) => {
  const project_url =
    projectData.project_repository_url === "" ||
    projectData.project_repository_url === null
      ? "private"
      : projectData.project_repository_url;

  const project = await prisma.project.create({
    data: {
      project_name: projectData.project_name,
      project_description_short: projectData.project_description_short,
      project_description: projectData.project_description,
      project_url: projectData.project_url,
      project_repository_url: project_url,
      project_thumbnail: projectData.project_thumbnail,
    },
  });

  return project;
};

export const deleteProject = async (id) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
};

export const editProject = async (id, projectData) => {
  const project_url =
    projectData.project_repository_url === "" ||
    projectData.project_repository_url === null
      ? "private"
      : projectData.project_repository_url;

  const project = await prisma.project.update({
    where: {
      id: parseInt(id),
    },
    data: {
      project_name: projectData.project_name,
      project_description_short: projectData.project_description_short,
      project_description: projectData.project_description,
      project_url: projectData.project_url,
      project_repository_url: project_url,
      project_thumbnail: projectData.project_thumbnail,
    },
  });

  return project;
};

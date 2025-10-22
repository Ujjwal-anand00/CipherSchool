

import axios from "axios";


const API_URL = "/api/projects";


export type FilesObject = {
  [key: string]: string | { code: string; hidden?: boolean; active?: boolean };
};


export const saveProject = async (name: string, files: FilesObject) => {
  console.log("Saving new project:", { name, files });
  const { data } = await axios.post(API_URL, { name, files });
  return data;
};


export const updateProject = async (
  id: string,
  name: string,
  files: FilesObject
) => {
  console.log("Updating project:", { id, name, files });
  const { data } = await axios.put(`${API_URL}/${id}`, { name, files });
  return data;
};


export const getProject = async (id: string) => {

  const cacheBuster = `_=${new Date().getTime()}`;
  const { data } = await axios.get(`${API_URL}/${id}?${cacheBuster}`);
  return data;
};

export const getAllProjects = async () => {
  const cacheBuster = `_=${new Date().getTime()}`;
  const { data } = await axios.get(`${API_URL}?${cacheBuster}`);
  return data;
};


export const deleteProject = async (id: string) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

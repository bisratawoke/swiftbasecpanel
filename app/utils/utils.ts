export function setCurrentProjectIdInLocalStorage(projectId: string) {
  localStorage.setItem("currentProjectId", projectId);
}

export function getCurrentProjectIdFromLocalStorage() {
  return localStorage.getItem("currentProjectId");
}

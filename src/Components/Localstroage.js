
const STORAGE_KEY = "installedApps";


export const getInstalledApps = () => {
  const apps = localStorage.getItem(STORAGE_KEY);
  return apps ? JSON.parse(apps) : [];
};

export const installApp = (app) => {
  const installed = getInstalledApps();


  const exists = installed.find(i => i.id === app.id);
  if (exists) return false;

  installed.push(app);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
  return true;
};

export const removeApp = (appId) => {
  const installed = getInstalledApps();
  const filtered = installed.filter(app => app.id !== appId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
export const getFirstWord = str => {
  let spaceIndex = str.indexOf(" ");
  return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};
export const shuffle = () => {};

export const changeTheme = () => {
  const html = document.querySelector("html");
  if (html.classList.contains("light")) {
    html.classList.add("dark");
    html.classList.remove("light");
  } else if (html.classList.contains("dark")) {
    html.classList.add("light");
    html.classList.remove("dark");
  }
};

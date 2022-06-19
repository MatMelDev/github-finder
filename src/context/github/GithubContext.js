import { createContext, useState } from "react";

const GithubContext = createContext();

// const GITHUB_URL = process.env.RACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`);
    /*, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }*/

    const data = await response.json();

    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        isLoading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

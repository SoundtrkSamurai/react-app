import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError, AxiosError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  return { 
    users,
    setUsers,
    error, 
    setError,
    isLoading,
    setIsLoading 
  };
};

export default useUsers;
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["me"],
  });
}

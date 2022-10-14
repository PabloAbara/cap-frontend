import useSWR from 'swr';

export default function useUsers() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`https://cap-paraffin.herokuapp.com/api/current_user`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

import useSWR from 'swr';

export default function useCompletedLearningUnit(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/learning_units/${id}/completed`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
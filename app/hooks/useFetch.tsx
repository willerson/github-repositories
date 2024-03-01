import React from 'react';

export interface ApiResponse {
  pushed_at: string;
  language?: string;
  id?: number;
  name?: string | undefined;
  key?: string;
  title?: string;
  description?: string;
  technology?: string;
  date?: string;
  dotColor?: string;
  checked?: boolean;
  favorite?: boolean | undefined;
  onClick?: () => void;
  avatar_url?: string;
  twitter_username?: string;
  bio?: string;
}

const useFetch = () => {
  const [data, setData] = React.useState<ApiResponse[] | null>(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = async (url: string, options: object) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err: any) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  };

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;

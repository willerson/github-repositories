export const API_URL = 'https://api.github.com/';

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export function USER_GET(user: string | null) {
  return {
    url: API_URL + `users/${user}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${token}`,
      },
    },
  };
}

export function USER_REPOS_GET(user: string | null) {
  return {
    url: API_URL + `users/${user}/repos`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${token}`,
      },
    },
  };
}

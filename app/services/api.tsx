export const API_URL = 'https://api.github.com/';

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export function USER_GET(user: string) {
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

export function USER_REPOS_GET(user: string) {
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

export function USER_STARRED_GET(user: string) {
  return {
    url: API_URL + `users/${user}/starred`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${token}`,
      },
    },
  };
}

export function STARRED() {
  return {
    url: API_URL + `user/starred`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${token}`,
      },
    },
  };
}

export function STARRED_REPO(URL: string) {
  return {
    url: URL,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${token}`,
      },
    },
  };
}

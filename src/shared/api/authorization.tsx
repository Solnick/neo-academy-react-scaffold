import axios from 'axios';

const PATH = 'https://backend.com/auth';// example path to the backend

// below there are some example requests
export function whoAmI() {
  return axios.get(`${PATH}/user/me`,
    {
      withCredentials: true
    });
}

export function login(ticket: string | null) {
  return axios.post(
    `${PATH}/login`,
    {
      ticket
    }
  );
}

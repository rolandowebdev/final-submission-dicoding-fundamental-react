export const BASE_URL = 'https://notes-api.dicoding.dev/v1'

function getAccessToken() {
  return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken)
}

function removeAccessToken() {
  return localStorage.removeItem('accessToken')
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  })
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson.message }
  }

  return { error: false, data: responseJson.data }
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson.message }
  }

  return { error: false }
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

export {
  fetchWithToken,
  getAccessToken,
  putAccessToken,
  removeAccessToken,
  login,
  register,
  getUserLogged,
}

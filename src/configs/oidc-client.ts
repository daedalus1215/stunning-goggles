import { UserManager, WebStorageStateStore } from 'oidc-client-ts'

const oidcConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  response_type: 'code',
  scope: 'email openid phone',
  post_logout_redirect_uri: 'http://localhost:8080',
  stateStore: new WebStorageStateStore({ store: window.localStorage }),
}

const userManager = new UserManager(oidcConfig)

export const signIn = async () => {
  await userManager.signinRedirect()
}

export const signOut = async () => {
  await userManager.signoutRedirect()
}

export const getUser = async () => {
  return await userManager.getUser()
}

export default userManager

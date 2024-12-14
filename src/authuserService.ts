import { UserManager } from 'oidc-client-ts';

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  response_type: "code",
  scope: "email openid phone"
}

export const userManager = new UserManager(cognitoAuthConfig);

export async function signInRedirect() {
  await userManager.signinRedirect();
}

export async function handleSignInCallback() {
  const user = await userManager.signinCallback();
  return user;
}

export function signOutRedirect() {
  const clientId = cognitoAuthConfig.client_id;
  const logoutUri = cognitoAuthConfig.redirect_uri;
  const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN

  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}

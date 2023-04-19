# React Authentication on Vercel

This JavaScript template demonstrates **how to implement user authentication** in React applications using Auth0. This template uses the React Router 6 library.

This template is based on a code sample is part of the ["Auth0 Developer Center"](https://developer.auth0.com/resources/code-samples/spa/react), a place where you can explore the authentication and authorization features of the Auth0 Identity Platform.

## Quick Auth0 Set Up

**First and foremost, if you haven't already, [sign up for an Auth0 account](https://auth0.com/signup?utm_source=partner&utm_medium=vercel&utm_campaign=2023-03%7CINB-ORG%7CVercel-Auth0-SignupUserCreationForm-SU&ocid=7014z000000zJItAAM-aPA4z0000008OZeGAM&utm_id=aNK4z000000blT4GAI) to connect your application with the Auth0 Identity Platform.**

Next, you'll connect your Single-Page Application (SPA) with Auth0. You'll need to create an application registration in the Auth0 Dashboard and get two configuration values: the **Auth0 Domain** and the **Auth0 Client ID**.

### Get the Auth0 domain and client ID

- Open the [Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **Create Application** button and fill out the form with the following values:
  - **Name**: `React Authentication on Vercel`
  - **Application Type**: `Single Page Web Applications`
- Click on the **Create** button.

> Visit the ["Register Applications"](https://auth0.com/docs/applications/set-up-an-application) document for more details.

An Auth0 Application page loads up.

As such, click on the **"Settings"** tab of your Auth0 Application page, locate the **"Application URIs"** section, and fill in the following values:

- **Allowed Callback URLs**: `https://*.vercel.app/callback`
- **Allowed Logout URLs**: `https://*.vercel.app`
- **Allowed Web Origins**: `https://*.vercel.app`

🚨🚨🚨 **WARNING: Once you have deployed this template, please replace `https://*.vercel.app` with your Vercel deploy URL for better security.** 🚨🚨🚨

Scroll down and click the **"Save Changes"** button.

Next, locate the **"Basic Information"** section. You will need the **"Domain"** and **"Client ID"** values to deploy this template correctly.

![Auth0 application settings to enable user authentication](https://cdn.auth0.com/blog/developer-hub/dashboard/auth0-spa-configuration.png)

Once you click the "Deploy" button, the Vercel deploy workflow will show up. On the **"Configure Project"** section, ensure that you use the following values for the **"Required Environment Variables"**:

- `REACT_APP_AUTH0_DOMAIN` is the value of the **"Domain"** field from the Auth0 settings.
- `REACT_APP_AUTH0_CLIENT_ID` is the value of the **"Client ID"** field from the Auth0 settings.

## After Deploy

**Remember to replace `https://*.vercel.app` with your Vercel deploy URL in the Auth0 application settings.**

### Use the React Sample Application

Your Vercel deploy URL gives you access to the application.

If you want to learn **how to implement user authentication in React step by step**, check out the ["React Authentication By Example" developer guide](https://developer.auth0.com/resources/guides/spa/react/basic-authentication).

When you click on the **"Log In"** button, React takes you to the [Auth0 Universal Login page](https://auth0.com/docs/login/universal-login). Your users can log in to your application through a page hosted by Auth0, which provides them with a secure, standards-based login experience that you can customize with your own branding and various authentication methods, such as logging in with a username and password or with a social provider like Facebook or Google.

Once you log in, visit the protected **"Profile"** page to see all the user profile information that Auth0 securely shares with your application using [ID tokens](https://auth0.com/docs/security/tokens/id-tokens).

Click on the **"Log Out"** button and try to access the [Profile page](http://localhost:4040/profile).

If everything is working as expected, React redirects you to log in with Auth0.

## Why Use Auth0?

Auth0 is a flexible drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users. We offer tons of guidance and SDKs for you to get started and [integrate Auth0 into your stack easily](https://auth0.com/developers/hub/code-samples/full-stack).

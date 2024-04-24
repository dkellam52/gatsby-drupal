
<h1 align="center">
  Automation & Optimization with GitHub
</h1>

## 🚀 GitHub Actions

### 🚦Workflow Steps

The `.github/workflows/build-and-deploy.yml` file defines our GitHub Actions workflow for building and deploying a Gatsby site, which includes the following steps:

1. **Checkout Code**: Uses the `actions/checkout@v2.3.1` to check out the current repository code into the runner.
2. **Install Node.js**: Sets up Node.js version 18.x using `actions/setup-node@v1`.
3. **Install Project Dependencies**: Runs `npm ci` to install the project dependencies ensuring a clean, consistent installation.
4. **Install Gatsby CLI**: Installs a specific version of the Gatsby CLI (5.13.2) globally to facilitate building the site.
5. **Build**: Executes `gatsby build` to compile the static site assets.
6. **Verify Build**: Lists the files in the `public` directory post-build to verify successful build.
7. **Setup SSH for Deployment**: Prepares SSH configuration for secure file transfer, including setting up private keys and known hosts.
8. **SFTP Upload**: Uploads the built site files to the deployment server using Secure File Transfer Protocol (SFTP).

This workflow is triggered on every push to the `main` branch, ensuring that updates are automatically built and deployed, maintaining the live site up-to-date.

### 🎯 Deployment

Deployment involves transferring the `public` directory files to a remote server via SFTP. It uses SSH keys for secure connection, which are stored as secrets in the GitHub repository settings. Ensure that the deployment secrets like `ssh_private_key`, `host`, `deploy_user`, and `destination_path` are correctly set up in your repository's secrets settings for a smooth deployment process.

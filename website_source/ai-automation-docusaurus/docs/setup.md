---
sidebar_position: 3
---

# Setup and Installation

This guide will walk you through setting up GitHub Copilot Agent and Azure AI Foundry for your development environment.

## GitHub Copilot Agent Setup

### Step 1: Enable GitHub Copilot Agent for Your Organization

1. Navigate to your organization settings on GitHub:
   ```
   https://github.com/organizations/YOUR-ORGANIZATION/settings/copilot
   ```

2. Click on "Enable GitHub Copilot Agent" and select the repositories you want to enable it for

3. Choose your licensing model:
   - Per-seat license
   - Organization-wide license
   - Repository-specific license

4. Accept the terms of service for the autonomous agent capabilities

### Step 2: Install the Latest IDE Extension

#### For Visual Studio Code:

1. Open VS Code
2. Go to the Extensions marketplace (Ctrl+Shift+X)
3. Search for "GitHub Copilot Agent"
4. Click "Install"
5. Restart VS Code

#### For Visual Studio 2025:

1. Open Visual Studio 2025
2. Navigate to Extensions → Manage Extensions
3. Select "Online" from the left panel
4. Search for "GitHub Copilot Agent"
5. Click "Download"
6. Restart Visual Studio

#### For JetBrains IDEs:

1. Open your JetBrains IDE
2. Go to Settings → Plugins
3. Select "Marketplace" tab
4. Search for "GitHub Copilot Agent"
5. Click "Install"
6. Restart your IDE

### Step 3: Configure the Asynchronous Agent

1. Open your IDE's settings/preferences
2. Navigate to the GitHub Copilot Agent section
3. Configure the following settings:

   a. **Autonomy Level**:
      - `limited`: Agent asks for permission before making changes
      - `balanced`: Agent makes changes but requires review before commit
      - `autonomous`: Agent can automatically commit changes (with safeguards)

   b. **Task Processing**:
      - Enable "Background Task Processing"
      - Set "Maximum Background Tasks" (recommended: 3-5)
      - Set "Resource Allocation" (recommended: 30-50% of system resources)

   c. **Code Standards**:
      - Link to your organization's coding standards repository
      - Enable "Enforce Code Standards"
      - Select style guides for supported languages

   d. **Security Settings**:
      - Enable "Security Vulnerability Scanning"
      - Configure "Sensitive Data Detection"
      - Set permissions for automated fixes

### Step 4: Set Up the Command Line Interface

1. Open a terminal or command prompt
2. Update the GitHub CLI:
   ```bash
   gh extension upgrade --all
   ```

3. Install the Copilot Agent extension:
   ```bash
   gh extension install github/gh-copilot-agent
   ```

4. Authenticate the CLI with your GitHub account:
   ```bash
   gh auth login
   ```

5. Verify the installation:
   ```bash
   gh copilot-agent --version
   ```

## Azure AI Foundry Setup

### Step 1: Create an Azure AI Foundry Resource

1. Log in to the Azure Portal
2. Click on "Create a resource"
3. Search for "Azure AI Foundry" and select it
4. Click "Create"
5. Fill in the following details:
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Region**: Choose a region with AI Foundry support
   - **Name**: Enter a unique name for your AI Foundry resource
   - **Pricing Tier**: Select appropriate tier (Standard or Premium recommended for enterprises)
6. Click "Review + create"
7. After validation passes, click "Create"

### Step 2: Configure Code Analysis Models

1. Once your Azure AI Foundry resource is created, navigate to it in the Azure Portal
2. In the left menu, select "Models"
3. Click "Add model"
4. Select the following models for code analysis:
   - **CodeAnalyst-Pro**: For general code optimization
   - **SecurityScan-Enterprise**: For security vulnerability detection
   - **PerformanceOptimizer**: For performance bottleneck identification
   - **CodeRefactor**: For automated refactoring suggestions
5. For each model, configure:
   - Compute resources (recommended: at least Standard_DS4_v2)
   - Scaling options (Auto-scale recommended)
   - Monitoring settings
6. Click "Apply"

### Step 3: Set Up a Development Environment

#### Using Visual Studio 2025:

1. Open Visual Studio 2025
2. Go to Extensions → Manage Extensions
3. Search for "Azure AI Foundry Tools"
4. Click "Download" and follow installation instructions
5. Restart Visual Studio
6. Go to Tools → Options → Azure AI Foundry
7. Click "Sign in" and authenticate with your Azure account
8. Select your Azure AI Foundry resource

#### Using Visual Studio Code:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Azure AI Foundry"
4. Click "Install"
5. After installation, click on the Azure icon in the Activity Bar
6. Sign in to your Azure account
7. Select your subscription and AI Foundry resource

### Step 4: Set Up the AI Foundry Command Line Interface

1. Open a terminal or command prompt
2. Install the Azure AI Foundry CLI:
   ```bash
   az extension add --name ai-foundry
   ```

3. Log in to Azure:
   ```bash
   az login
   ```

4. Set your subscription:
   ```bash
   az account set --subscription <subscription-id>
   ```

5. Initialize AI Foundry for your project:
   ```bash
   az ai-foundry init --resource-group <resource-group> --name <foundry-name>
   ```

## Next Steps

Now that you have set up GitHub Copilot Agent and Azure AI Foundry, you can proceed to implementing [Automation Workflows](module1) for your development environment.

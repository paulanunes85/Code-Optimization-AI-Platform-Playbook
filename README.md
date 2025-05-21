# 🚀 Enterprise AI-Assisted Code Optimization Playbook

This repository contains a comprehensive, hands-on guide for intermediate to advanced developers working in enterprise environments. The playbook provides parallel examples for both Java and .NET (C#) codebases, demonstrating AI-assisted optimization techniques using GitHub Copilot Agent and Azure AI Foundry.

## 📖 Introduction

The Enterprise AI-Assisted Code Optimization Playbook is designed to help development teams leverage the latest AI tools announced at Microsoft Build 2025 to improve code quality, performance, and security. This guide demonstrates practical examples of how AI can assist in:

- Performance optimization with autonomous AI code analysis
- Code maintainability through AI-driven refactoring
- Security enhancement with GitHub Advanced Security, Microsoft Defender, and Sentinel
- End-to-end automation with GitHub Copilot's asynchronous coding agent

### 🔍 What's New in Microsoft Build 2025

This playbook incorporates the latest AI development technologies announced at Microsoft Build 2025:

- **GitHub Copilot Agent**: The next evolution of GitHub Copilot featuring asynchronous coding capabilities that allow the agent to work autonomously on complex tasks
- **Azure AI Foundry**: Microsoft's unified platform for AI application management, providing advanced code analysis and optimization
- **Model Context Protocol (MCP)**: A standardized way for AI systems to share context and capabilities across different tools
- **Windows AI Foundry**: Support for optimizing applications with Windows-native AI capabilities

## 🎁 Free and Trial Options for Workshop Participants

You can complete this workshop using free tiers and trial versions:

- **GitHub Copilot**: Sign up for the [30-day free trial](https://github.com/features/copilot) for individual developers
- **Azure Free Account**: New users get [$200 in free credits](https://azure.microsoft.com/free/) for 30 days
- **GitHub Codespaces**: Free tier includes up to 60 hours/month with 2-core machine
- **Local Setup Alternative**: All examples can be run locally without Azure by using the included sample datasets

For workshop participants without enterprise subscriptions, we've included alternative approaches in each example.

## ✅ Prerequisites

Before beginning this playbook, ensure you have:

- GitHub account with access to GitHub Copilot (Free trial, Individual plan, or Enterprise plan)
- One of the following:
  - Azure subscription (Free tier or paid)
  - Local development environment for running examples
- Development environment set up for:
  - Java 17+ and Spring Boot 3.x
  - .NET 8+ and ASP.NET Core
- Basic knowledge of:
  - GitHub Actions or Azure DevOps Pipelines (or willingness to learn)
  - Code optimization principles
  - Enterprise application architecture

### Alternative Setups

- **For Copilot**: If you don't have GitHub Copilot access, we've documented all the prompts and their results so you can follow along
- **For Azure**: Local alternatives for all Azure services are provided in the `/alternative-setups` directory
- **For Local Setup**: Docker compose files are included for running all necessary services locally

## 🛠️ Setup Instructions

### GitHub Copilot Agent Setup

1. Enable GitHub Copilot Agent in your GitHub organization:
   - Navigate to [GitHub Copilot settings](https://github.com/organizations/YOUR-ORGANIZATION/settings/copilot)
   - Follow the subscription process for the Agent tier if not already subscribed
   - Install the GitHub Copilot Agent extension for your IDE:
     - [VS Code extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-agent)
     - [Visual Studio extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs-agent)
     - [JetBrains IDEs plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot-agent)

2. Configure Copilot Agent settings in your IDE:
   - Set Autonomy Level (Limited, Balanced, or Autonomous)
   - Configure Task Processing settings
   - Set up Code Standards integration
   - Enable Security Vulnerability Remediation

For detailed setup instructions, see [GitHub Copilot Agent Setup](docs/github-copilot-agent-setup.md).

### Azure AI Foundry Setup

1. Provision Azure AI Foundry:
   - Log in to the [Azure Portal](https://portal.azure.com)
   - Create a new Azure AI Foundry resource
   - Select appropriate region and pricing tier

2. Configure AI models:
   - Set up model endpoints for code analysis
   - Configure authentication and API keys
   - Test connectivity from your development environment

3. Integrate with your IDE:
   - Install Azure extensions for your IDE
   - Configure connection settings
   - Verify successful connection

For detailed setup instructions, see [Azure AI Foundry Configuration](docs/azure-ai-foundry-configuration.md).

## ⏱️ Workshop Timeline Breakdown

This playbook can be completed in approximately 2-3 hours, depending on your setup:

| Time | Activity | Description | Notes for Free/Trial Users |
|------|----------|-------------|-----------------------------|
| 0:00 - 0:15 | Introduction | Overview of the playbook and objectives | Same for all users |
| 0:15 - 0:45 | Environment Setup | Configure GitHub Copilot and services | Trial users may need extra 15-30 mins for setup |
| 0:45 - 1:15 | Java Scenario 1 | Spring Boot web application optimization | Use standard Copilot or documented examples |
| 1:15 - 1:45 | .NET Scenario 1 | ASP.NET Core web application optimization | Use standard Copilot or documented examples |
| 1:45 - 2:15 | Java Scenario 2 | Data processing pipeline optimization | Use local alternatives if needed |
| 2:15 - 2:45 | .NET Scenario 2 | Data processing pipeline optimization | Use local alternatives if needed |
| 2:45 - 3:00 | Review and Next Steps | Summary and advanced topics | Same for all users |

> **Note**: Free/trial users may need additional time for setup, especially if using local alternatives to Azure services. The core optimization concepts remain the same regardless of your setup.

## 📂 Repository Structure

This repository is organized as follows:

- `/java-examples` - Java and Spring Boot optimization examples
- `/dotnet-examples` - .NET and C# optimization examples
- `/workflows` - CI/CD pipeline examples for both Java and .NET
- `/docs` - Additional documentation and guides:
  - [GitHub Copilot Agent Setup](docs/github-copilot-agent-setup.md)
  - [Azure AI Foundry Configuration](docs/azure-ai-foundry-configuration.md)
  - [Security Integration](docs/security-integration.md)
  - [Enterprise Governance](docs/enterprise-governance.md)
- `/alternative-setups` - Options for users with free/trial accounts:
  - [Free/Trial Setup Guide](alternative-setups/README.md)
  - [Using Standard GitHub Copilot](alternative-setups/standard-copilot/README.md)
  - [Local Docker Environment](alternative-setups/docker/docker-compose.yml)

## 📝 Scenarios

The playbook covers the following scenarios for both Java and .NET:

### Scenario 1: Enterprise Web Application Optimization
- Performance improvements for REST API endpoints
- Memory optimization for high-throughput services
- Response time reduction techniques
- Security hardening with parameterized queries and proper authorization

### Scenario 2: Data Processing Pipeline Optimization
- Java streams vs C# LINQ optimizations
- Batch processing efficiency improvements
- Memory usage optimization for large datasets
- Integration with security monitoring

## 🔄 Workflow Examples

The playbook demonstrates two distinct workflows for each language:

### Full AI Automation
Step-by-step guide for setting up fully automated code optimization with minimal developer intervention using GitHub Copilot Agent's autonomous mode.

### Interactive Developer-AI Collaboration
Processes and best practices for effective collaboration between developers and AI assistants, leveraging Model Context Protocol (MCP) for seamless interactions.

## 🚦 Getting Started

To begin the playbook, navigate to the language-specific folder of your choice:
- [Java Examples](/java-examples/README.md)
- [.NET Examples](/dotnet-examples/README.md)

Each section contains before/after code examples, detailed explanations, and hands-on exercises.

## 🔄 CI/CD Integration

The playbook includes examples for integrating AI-assisted optimization into CI/CD pipelines:
- GitHub Actions workflows
- Azure DevOps pipeline templates

## 🔒 Security Integration

Learn how to integrate GitHub Advanced Security, Microsoft Defender, and Microsoft Sentinel to create a comprehensive security solution:
- Automated vulnerability detection
- AI-assisted remediation
- Security monitoring and response

For detailed instructions, see [Security Integration](docs/security-integration.md).

## 🏢 Enterprise Governance

Implement a governance framework for AI-assisted development in your organization:
- Policy and standards for AI tool usage
- Risk management and compliance
- Security and data protection
- Quality assurance and metrics

For detailed guidance, see [Enterprise Governance](docs/enterprise-governance.md).

## 🤝 Contributing

Contributions to this playbook are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for more information.

## 📜 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 👏 Credits

This Enterprise AI-Assisted Code Optimization Playbook was developed by [@paulanunes85](https://github.com/paulanunes85). 
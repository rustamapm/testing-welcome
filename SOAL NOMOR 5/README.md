# CLOUD INFRA - GCP
Explanation of what tools are used and Flow the ci/cd process

### Tools

Code Repository : Github  
CICD Tools : Github Actions  
Image Registry : Google Artifact Registry  
Kubernetes Orchestration : Google Kubernetes Engine

### CI/CD Flow & Explanation
![gambar](https://github.com/rustamapm/testing-welcome/blob/main/GCP.png)
- Developer pushes and updates the latest code to github
- Github Actions detects changes in the repository and runs the pipeline
- Inside the pipeline is the process of Setup connection to Google Cloud, Building Docker Images, Publishing images to GAR and Deploying to GKE
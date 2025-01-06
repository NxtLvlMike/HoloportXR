import os

# Define the folder and file structure
structure = {
    "public": {
        "index.html": "",
        "assets": {
            "logo.png": ""
        }
    },
    "src": {
        "components": {
            "AICreativityStudio.tsx": "",
            "AvatarPreview.tsx": "",
            "ChatInterface.tsx": "",
            "Map.tsx": "",
            "index.ts": ""
        },
        "services": {
            "DialogflowService.ts": ""
        },
        "App.tsx": "",
        "main.tsx": "",
        "vite-env.d.ts": ""
    },
    ".env": "",
    ".gitignore": "",
    "package.json": "",
    "tsconfig.json": "",
    "vite.config.ts": "",
    "README.md": ""
}

# Function to create folders and files
def create_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            # Create a folder
            os.makedirs(path, exist_ok=True)
            print(f"Created folder: {path}")
            # Recursively create contents of the folder
            create_structure(path, content)
        else:
            # Create a file
            with open(path, "w") as file:
                file.write(content)
            print(f"Created file: {path}")

# Main function
def main():
    repo_name = input("Enter the name of the repository: ")
    base_path = os.path.join(os.getcwd(), repo_name)
    
    # Create the base folder
    os.makedirs(base_path, exist_ok=True)
    print(f"Created repository folder: {base_path}")
    
    # Create the folder and file structure
    create_structure(base_path, structure)
    print("Folder and file structure created successfully!")

if __name__ == "__main__":
    main()
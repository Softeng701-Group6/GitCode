import { Difficulty, Tags } from "../models/enums.ts";
import { Graph, Question } from "../models/types.ts";

export const DUMMY_DATA_QUESTIONS: Question[] = [
  {
    id: "Commit and Push",
    title: "1. Commit and Push",
    hints: [
      "Once your changes are staged, it's time to commit them. Use the git commit command along with a descriptive commit message to document the purpose and nature of your changes. A well-written commit message is essential for clear communication within a development team.",
      "After committing your changes locally, it's time to share them with others by pushing the commits to a remote repository. Use the git push command to send your changes to the designated remote repository, allowing others to access and integrate your work.",
      "If you require further information, check out this git guide provided by Atlassian"
    ],
    summary: [
      "You have successfully completed your first Git commit and push.",
      "Take a moment to reflect on the importance of these actions in version control and collaborative development.",
      "Remember, committing and pushing changes regularly helps maintain a reliable and traceable history of your project.",
      "For more information, checkout the discussion page for this question"
    ],
    description: {
      description: "Welcome to your first lesson on Git, the widely used version control system in the software development industry. In this lesson, we will delve into the fundamental concepts of Git commit and push, which form the backbone of collaborative code management.",
      activityArray: [
        "In this activity, we will guide you through the process of committing and pushing changes to a Git repository.",
        "All changes have already been added and staged, now we need to commit and push our changes onto main.",
      ]
    },
    learningObjective: {
      objective: "By the end of this lesson, you will understand the importance of Git commit and push, and how they enable you to track and share changes in your codebase effectively.",
      outcomeArray: [
        "Familiarity with Git Terminology: Students will become reacquainted with essential Git terminology, including \"commit,\" and \"push.\"",
        "Committing Changes: Students will revisit how to create a commit in Git.",
        "Pushing Commits: Students will grasp the concept of pushing commits to a remote repository, gaining knowledge about the purpose of remotes and the git push command."
      ]
    },
    discussion: {
      statement: "To commit and push changes to a Git repository, you need to follow a series of commands. Let's go through each step, and then we'll provide explanations for each command:",
      commands: [
        "git commit -m \"Enter your commit message here\"",
        "git push origin main"
      ],
      answers: [
        {
          step: "Step 1: Commit the Changes",
          explanation: [
            "Committing changes in Git is like taking a snapshot of your code at a specific point in time. It allows you to document the changes made and provide a clear description of the modifications",
            "The -m flag stands for message and is followed by the commit message enclosed in quotes. The commit message is a brief description that explains what changes were made in the commit. It is important to provide a meaningful and descriptive commit message to help you and others understand the purpose of the commit.",
          ]
        },
        {
          step: "Step 2: Push the Commits",
          explanation: [
            "Once you have committed your changes, it's time to push them to a remote repository. Pushing commits means sending your committed changes to a shared repository that can be accessed by others. Use the command git push origin main to push your commits.",
            "In this command, origin refers to the remote repository's name. You can replace it with the appropriate remote repository name if it differs. main represents the branch you are pushing to, which is typically the main branch in many Git workflows. However, if your repository uses a different main branch name (e.g., master), make sure to replace main with the correct branch name.",
            "By executing git push origin main, you send your commits to the remote repository, making them available to others who have access to the repository. This allows for collaboration and synchronization of code changes among team members.",
            "Remember, the git commit -m command and the git push origin main command are essential for documenting and sharing your code changes. By providing meaningful commit messages and regularly pushing your commits to the remote repository, you can effectively track and collaborate on your codebase."
          ]
        }
      ]
    },
    // commentIds: [],
    initialGraph: null,
    goalGraph: null,
    difficulty: Difficulty.EASY,
    tags: [Tags.commit, Tags.push],
  },
  {
    id: "Checkout and Branching",
    title: "2. Checkout and Branching",
    hints: [
      "When you want to work on a new feature and make commits that do not affect the main codebase, its time to create a new branch. Use the git branch command along with a descriptive branch name to document the purpose and nature of your new branch. Remember, clear communication is key within a development team, so having descriptive branch names describing its purpose is important.",
      "After creating a new branch, it's time start working on it. Use the git checkout command to move your head pointer to the new branch, allowing code changes and commits to only occur on your new branch",
      "If you require further information, check out this git guide provided by Atlassian"
    ],
    summary: [
      "You have successfully completed your first Git checkout and branch.",
      "Take a moment to reflect on the importance of these actions in version control and collaborative development.",
      "Remember, branching and checking out allows a way to work on a new feature without affecting the main code located in the codebase.",
      "For more information, checkout the discussion page for this question"
    ],
    description: {
      description: "Welcome to your second lesson on Git. In this lesson, we will delve into more fundamental concepts of Git checkout and branch, which are essential for collaboration.",
      activityArray: [
        "In this activity, we will guide you through the process of checking out and branching in the Git repository.",
        "All changes have already been added and staged, now we need to branch off main and checkout the newly created branch where we can continue to commit and push our changes.",
      ]
    },
    learningObjective: {
      objective: "By the end of this lesson, you will understand the importance of Git checkout and branch, and how they enable you have multiple versions of your codebase, allowing collaborative work.",
      outcomeArray: [
        "Familiarity with Git Terminology: Students will become reacquainted with essential Git terminology, including \"checkout,\" and \"branch.\"",
        "Creating branches: Students will revisit how to create a branch in Git.",
        "Checking out branches: Students will grasp the concept of checking out branches of remote repository, gaining knowledge about the purpose of git checkout and branch command."
      ]
    },
    discussion: {
      statement: "To branch and checkout in a remote Git repository, you need to follow a series of commands. Let's go through each step, and then we'll provide explanations for each command:",
      commands: [
        "git branch <branch_name>",
        "git checkout <branch_name>"
      ],
      answers: [
        {
          step: "Step 1: Create the branch",
          explanation: [
            "A branch is a chronological chain of commits. Branching in Git is equivalent to having another independant line of development that you are able to work on. Changes can exist on this second line and will not be relfected the first line. This allows for multiple versions of your codebase to exist.",
            "These multiple versions can allow multiple users to each work on the codebase at the same time without affecting each other. When you want to add a new feature or fix a bug, you create a new branch dedicated to your changes.",
            "This helps you to avoid merging any unstable changes into your main codebase",
            "We now have a new branch but before we start making new changes there is one more step"
          ]
        },
        {
          step: "Step 2: Checkout the branch",
          explanation: [
            "Once you have created a new branch, inorder to work on it you must use git checkout to switch from your current branch to the newly created one",
            "In this command <branch_name> refers to the same <branch_name> that was used in creating the branch or it can also refer to any branch you wish to switch to",
            "Branch and checkout can be used togther , reducing two commands to one, git checkout -b <new_branch> <existing_branch>. The -b flag indicates to git that you want to run git branch aswell as checking it out",
            "Dont forget to push your branch to the remote repository so others can also see your work"
          ]
        }
      ]
    },
    // commentIds: [],
    initialGraph: null,
    goalGraph: null,
    difficulty: Difficulty.MEDIUM,
    tags: [Tags.checkout, Tags.branch],
  }
]

export const DUMMY_DATA_GRAPHS: Graph[] = [
  {
    name: `${DUMMY_DATA_QUESTIONS[0].title} - Initial Graph`,
    nodes: ["C1", "C2", "C3"],
    edges: [
      { source: "C1", target: "C2" },
      { source: "C1", target: "C3" }
    ],
    headNode: "C1"
  },
  {
    name: `${DUMMY_DATA_QUESTIONS[0].title} - Goal Graph`,
    nodes: ["C1", "C2", "C3"],
    edges: [
      { source: "C1", target: "C2" },
      { source: "C1", target: "C3" }
    ],
    headNode: "C1"
  }
]

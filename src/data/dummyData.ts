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
      title: "Lesson 1: Introduction to Git Commit and Push",
      activity: "Committing and Pushing Changes",
      plan: [
        "All changes have already been added and staged, now we need to commit and push our changes onto main.",
        "Use git commit commands in the terminal to complete this task and click submit to check!"
      ],
      desiredGraphImgUrl: "src/assets/ActivityCommitGraph.png"
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
        "git commit -m \"Enter your commit message here\"",
        "git commit -m \"Enter your commit message here\"",
        "git push origin main"
      ],
      selectedCommands: [
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
    initialCommands: [
      "git init",
      "git commit",
    ],

    initialGraph: {
      nodes: ['1'],
      edges: [],
      headNode: '1',
      branch: 'main',
      branchHeads: new Map([['main', '1']]),
      remoteNodes: new Set(),
      branchNodes: new Map([['main', ['1']]])
    },
    goalGraph: {
      nodes: ['1', '2', '3', '4'],
      edges: [
        {source: '1', target: '2', branch: 'main'},
        {source: '2', target: '3', branch: 'main'},
        {source: '3', target: '4', branch: 'main'}
      ]
    },
    difficulty: Difficulty.EASY,
    tags: [Tags.commit, Tags.push],
  },
  {
    id: "Checkout and Branching",
    title: "2. Checkout and Branching",
    hints: [
      "When you want to work on a new feature and make commits that do not affect the main codebase, its time to create a new branch. Use the git branch command along with a descriptive branch name to document the purpose and nature of your new branch. Remember, clear communication is key within a development team, so having descriptive branch names describing its purpose is important.",
      "After creating a new branch, it's time start working on it. Use the git checkout command to move your head pointer to the new branch, allowing code changes and commits to only occur on your new branch",
      "Git checkout can also be used to checkout previous commits, just use the commit number you want to visit to change your head to there",
      "If you require further information, check out this git guide provided by Atlassian"
    ],
    summary: [
      "You have successfully completed your first Git checkout and branch.",
      "Take a moment to reflect on the importance of these actions in version control and collaborative development.",
      "Remember, branching and checking out allows a way to work on a new feature without affecting the main code located in the codebase.",
      "For more information, checkout the discussion page for this question"
    ],
    description: {
      title: "Lesson 2: Introduction to Git Checkout and Branching",
      activity: "Checkout and Branch",
      plan: [
        "All changes have already been added and staged, now we need to commit and push our changes on our branches for other to see.",
        "We also want to add another branch for development to fix a bug", 
        "Please name the branch \"bug-fix-branch\" (without apostrophes)",
        "All available branches are visible in the top left of the graph",
        "Use git commit commands in the terminal to complete this task and click submit to check!"
      ],
      desiredGraphImgUrl: "src/assets/checkout-and-branch.png"
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
      statement: "To branch and checkout in a Git repository, you need to follow a series of commands. Let's go through the new key steps, and then we'll provide explanations for each command:",
      commands: [
        "git push",
        "git checkout <branch_name>",
        "git push",
        "git checkout <branch_name>",
        "git branch <branch_name>",
        "git checkout <branch_name>",
        "git commit",
        "git commit",
        "git push",
      ],
      selectedCommands: [
        "git checkout <branch_name>",
        "git branch <branch_name>",
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
    initialCommands: [
      "git init",
      "git commit",
      "git branch feat-branch",
      "...",
      "git commit",
      "git commit",
      "git commit",
    ],
    
    initialGraph: {
      nodes: ['1', '2', '3', '4', '5', '6', '7'],
      edges: [
        {source: '1', target: '2', branch: 'main'},
        {source: '2', target: '3', branch: 'main'},
        {source: '3', target: '4', branch: 'main'},
        {source: '2', target: '5', branch: 'feat-branch'},
        {source: '5', target: '6', branch: 'feat-branch'},
        {source: '6', target: '7', branch: 'feat-branch'}    
      ],
      headNode: '7',
      branch: 'feat-branch',
      branchHeads: new Map([['main', '4'], ['feat-branch', '7']]),
      remoteNodes: new Set(),
      branchNodes: new Map([['main', ['1', '2', '3', '4']], ['feat-branch', ['1', '2', '5', '6', '7']]])
    },
    goalGraph: {
      nodes:['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      edges: [
        {source: '1', target: '2', branch: 'main'},
        {source: '2', target: '3', branch: 'main'},
        {source: '3', target: '4', branch: 'main'},
        {source: '2', target: '5', branch: 'feat-branch'},
        {source: '5', target: '6', branch: 'feat-branch'},
        {source: '6', target: '7', branch: 'feat-branch'},
        {source: '5', target: '8', branch: 'bug-fix-branch'},
        {source: '8', target: '9', branch: 'bug-fix-branch'}          
      ]
    },
    difficulty: Difficulty.MEDIUM,
    tags: [Tags.checkout, Tags.branch],
  },
  {
    id: "Merging",
    title: "3. Merging",
    hints: [
      "When you want to join multiple sequences of commits on two different branches into one unified history, its time to merge your branches. Use the git merge command along with the previous commands you have learnt. Remember, clear communication is key within a development team, so always inform team members when wanting to merge and combine multiple branches.",
      "Merging will merge the name of the chosen branch, included in the command, into the receiving branch, branch you are currently on. If needed, use git checkout <branch_name> first  to switch to the branch that you want to receive the merge."
    ],
    summary: [
      "You have successfully completed your first Git merge.",
      "Take a moment to reflect on the importance of this action in version control and collaborative development.",
      "Remember, merging out allows multiple individual development lines to combine their changes to the codebase.",
      "For more information, checkout the discussion page for this question"
    ],
    description: {
      title: "Lesson 3: Introduction to Git Merge",
      activity: "Merge",
      plan: [
        "Currently we have three active branches we have been working on, but its time to combine the lines of development and our efforts into one",
        "Merge bug-fix-branch then merge into main",
        "Use git commit commands in the terminal to complete this task and click submit to check!"
      ],
      desiredGraphImgUrl: "src/assets/merge-activity.png"
    },
    learningObjective: {
      objective: "After completing this lesson, you will understand the importance of Git merge, and how it enables you converge your multile independant lines of development into one, allowing your team's collaborative work to come together.",
      outcomeArray: [
        "Familiarity with Git Terminology: Students will become reacquainted with essential Git terminology, including \"merge,\"",
        "Merging branches: Students will revisit how to merge branches in Git.",
      ]
    },
    discussion: {
      statement: "To merge in a remote Git repository, you need to go through a series of commands. Let's go through the new key step, and then we'll provide an explanation for the command:",
      commands: [
        "git merge <branch_name>",
        "git push",
        "git merge <branch_name>",
        "git push",
      ],
      selectedCommands: [
        "git merge <branch_name>",
      ],
      answers: [
        {
          step: "Step 1: Merge the branch",
          explanation: [
            "Merging in git will allow you to combine the individual lines of development that have been created by git branch. Merging will combine the commits and development history of each branch into one singular branch. This allows for the multiple versions of your codebase to be joined together into one version.",
            "Git merge will take the branch <branch_name> and merge it into the branch that is currently checked out. If you are on the wrong branch curretly make sure to use git checkout <branch_name> to change your branch to the one you wish to merge the changes into. For more information on git checkout visit the previous level or git checkout Atlassian page",
            "Make sure you converse with your development team before merging to ensure that everyone is ready for the changes to be made, as well to validate that the branches are error free before merging",
            //To include if we want to mention merge conflicts 
            //"Note: If the two branches you're trying to join together both modified the same parts of the same file in the code, a merge conflict will occur. In this Git will not be able to know which version you wish to keep. This will require you to manually resolve the conflict by removing one of the branches changes or accepting both of the changes"
          ]
        },
        {
          step: "Step 2: Push the merges",
          explanation: [
            "After merging the branches, the merge will exist locally but not remotely. Remember to push your changes to the repository to make them available for others who have access to the repository.",
            "As stated in previous levels git push is an essential command for sharing your code changes, allowing for effective collaboration."
          ]
        },
      ]
    },
    // commentIds: [],
    initialCommands: [
      "git init",
      "git commit",
      "git branch feat-branch",
      "...",
      "git checkout bug-fix-branch",
      "git commit",
      "git commit",
      "git push",
    ],
    
    initialGraph: {
      nodes:['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      edges: [
        {source: '1', target: '2', branch: 'main'},
        {source: '2', target: '3', branch: 'main'},
        {source: '3', target: '4', branch: 'main'},
        {source: '2', target: '5', branch: 'feat-branch'},
        {source: '5', target: '6', branch: 'feat-branch'},
        {source: '6', target: '7', branch: 'feat-branch'},
        {source: '5', target: '8', branch: 'bug-fix-branch'},
        {source: '8', target: '9', branch: 'bug-fix-branch'}          
      ],
      headNode: '7',
      branch: 'feat-branch',
      branchHeads: new Map([['main', '4'], ['feat-branch', '7'], ['bug-fix-branch', '9']]),
      remoteNodes: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
      branchNodes: new Map([['main', ['1', '2', '3', '4']], ['feat-branch', ['1', '2', '5', '6', '7']], ['bug-fix-branch', ['8', '9']]])
    },
    goalGraph: {
      nodes:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      edges: [
        {source: '1', target: '2', branch: 'main'},
        {source: '2', target: '3', branch: 'main'},
        {source: '3', target: '4', branch: 'main'},
        {source: '2', target: '5', branch: 'feat-branch'},
        {source: '5', target: '6', branch: 'feat-branch'},
        {source: '6', target: '7', branch: 'feat-branch'},
        {source: '5', target: '8', branch: 'bug-fix-branch'},
        {source: '8', target: '9', branch: 'bug-fix-branch'},
        {source: '9', target: '10', branch: 'bug-fix-branch'},          
        {source: '7', target: '10', branch: 'feat-branch'},
        {source: '4', target: '11', branch: 'main'},  
        {source: '10', target: '11', branch: 'feat-branch'},
      ]
    },
    difficulty: Difficulty.MEDIUM,
    tags: [Tags.merge, Tags.push],
  },

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

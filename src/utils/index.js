
import a1 from "../assets/images/precision-vs-recall-simplifying-complex-metrics-with-everyday-examples.webp";
import a2 from "../assets/images/ouroboros-of-ai-the-peril-of-generative-models-feeding-on-their-creations.webp";
import a3 from "../assets/images/data-scaling-and-transformation-keys-to-effective-data-science.webp";
import aiDeveloperImage from "../assets/images/ai_developer.webp";
import mlopsImplementationImage from "../assets/images/mlops_implementation.webp";
import floraflowImage from "../assets/images/floraflow.webp";
import gitGPT from "../assets/images/gitGPT.webp";
import guruGPT from "../assets/images/guruGPT.webp";
import flutterGPT from "../assets/images/flutterFlowCopilot.webp";


export const headlines = [
    "name",
    "job_title",
    "description"
];


export const fixedNavItems = [
    { name: "nav_home" },
    { name: "nav_about" },
    { name: "nav_projects" },
    { name: "nav_blog" },
    { name: "nav_contact" }
];

export const projects = [
    {
        title: 'ai_developer_project',
        image: aiDeveloperImage,  
        linkGithub: null,  
        linkOnline: null,  
        description: 'ai_developer_description',
        techStack: ['data_preprocessing', 'workflow_automation', 'machine_learning', 'nlp', 'llms', 'clustering']
    },
    {
        title: 'mlops_implementation_project',
        image: mlopsImplementationImage,  
        linkGithub: 'https://github.com/DataScientest-Studio/nov23_rakuten_mlops_0', 
        linkOnline: null,  
        description: 'mlops_implementation_description',
        techStack: ['mlops', 'fastapi', 'oauth', 'jwt', 'docker', 'airflow', 'pytest', 'github_actions']
    },
    {
        title: 'floraflow_project',
        image: floraflowImage,  
        linkGithub: 'https://github.com/gillesdeperetti/AU23_Plantes',  
        linkOnline: 'https://floraflow.streamlit.app/',  
        description: 'floraflow_description',
        techStack: ['data_preprocessing', 'deep_learning', 'transfer_learning', 'fine_tuning']
    },
    {
        title: 'git_gpt_project',
        image: gitGPT,  
        linkGithub: null,  
        linkOnline: 'https://chatgpt.com/g/g-gsrcNqjyL-git-gpt',  
        description: 'git_gpt_description',
        techStack: ['openai', 'gpt', 'custom_gpts']
    },
    {
        title: 'guru_gpt_project',
        image: guruGPT,  
        linkGithub: null, 
        linkOnline: 'https://chatgpt.com/g/g-UfpmMdOV0-guru-gpt',  
        description: 'guru_gpt_description',
        techStack: ['openai', 'gpt', 'custom_gpts']
    },
    {
        title: 'flutterflow_copilot_project',
        image: flutterGPT,  
        linkGithub: null,  
        linkOnline: 'https://chatgpt.com/g/g-k5jkxydCw-flutterflow-copilot',  
        description: 'flutterflow_copilot_description',
        techStack: ['openai', 'gpt', 'custom_gpts']
    }
];

export const skillsWork = [
    // Langages de programmation
    'Python',
    'Bash',
    'SQL',

    // Bibliothèques et Frameworks
    'NumPy',
    'Pandas',
    'SciKit-Learn',
    'Keras',
    'TensorFlow',
    'PySpark',
    'BeautifulSoup',
    'NLTK',
    'Matplotlib',
    'Seaborn',
    'Plotly',
    'FastAPI',
    'Streamlit',

    // Outils de développement
    'Docker',
    'Airflow',
    'Git',
    'GitHub',
];



export const certifications = [
    { title: "Data Scientist", school: "DataScientest x Mines ParisTech", link: "https://files.datascientest.com/diploma/8aa8a81e-5188-4754-9043-130c934d2be1.pdf" },
    { title: "Machine Learning Engineer", school: "DataScientest", link: "https://files.datascientest.com/diploma/d4c6f0fa-8e3e-43af-aeb3-44cd0870e2ed.pdf" },
    { title: "Data Product Manager", school: "DataScientest", link: "https://files.datascientest.com/diploma/525f44a3-36c2-4213-b086-5f0d722cac04.pdf" },
    { title: "AWS Certified Cloud Practitioner Certification", school: "Ongoing", link: "#" },

];


export const articles = [
    {
        title: "precision_vs_recall",
        resume: "precision_vs_recall_resume",
        url: "https://medium.com/@gillesdeperetti/precision-vs-recall-simplifying-complex-metrics-with-everyday-examples-a5acbac9aca4",
        image: a1  
    },
    {
        title: "ouroboros_ai",
        resume: "ouroboros_ai_resume",
        url: "https://medium.com/@gillesdeperetti/ouroboros-of-ai-the-peril-of-generative-models-feeding-on-their-creations-bda62e47ac5f",
        image: a2  
    },
    {
        title: "data_scaling_transformation",
        resume: "data_scaling_transformation_resume",
        url: "https://blog.devgenius.io/data-scaling-and-transformation-keys-to-effective-data-science-a7fa78ffd792",
        image: a3 
    },
];


export const metadata = {
    site: {
      title: "Gilles de PERETTI - Machine Learning Engineer",
      description: "This portfolio showcases the work of Gilles de PERETTI, a Machine Learning Engineer with expertise in Data Science, MLOps, and Data Product Management.",
      imageURL: "../assets/images/portfolio-banner.png",
      pageUrl: "https://portfolio.sparkmind.me"
    },
    sections: {
      home: {
        title: "Home - Gilles de PERETTI",
        description: "Welcome to the portfolio of Gilles de PERETTI, a Machine Learning Engineer showcasing skills and projects in AI and data science.",
        imageURL: "../assets/images/portfolio-banner.png"
      },
      about: {
        title: "About - Gilles de PERETTI",
        description: "Learn more about Gilles de PERETTI, a Machine Learning Engineer with extensive experience in Data Science, MLOps, and Data Product Management.",
        imageURL: "../assets/images/portfolio-banner.png"
      },
      projects: {
        title: "Projects - Gilles de PERETTI",
        description: "Explore the projects and case studies by Gilles de PERETTI, demonstrating expertise in machine learning and data science.",
        imageURL: "../assets/images/portfolio-banner.png"
      },
      blog: {
        title: "Blog - Gilles de PERETTI",
        description: "Read articles, tutorials, and reflections on AI, data science and more by Gilles de PERETTI.",
        imageURL: "../assets/images/portfolio-banner.png"
      },
      contact: {
        title: "Contact - Gilles de PERETTI",
        description: "Get in touch with Gilles de PERETTI for collaboration opportunities and professional inquiries in the field of AI and data science.",
        imageURL: "../assets/images/portfolio-banner.png"
      }
    }
  };
  

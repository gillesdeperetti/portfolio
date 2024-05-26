
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
    "My name is Gilles",
    "I'm a Machine Learning Engineer",
    "I craft innovative AI solutions, ensuring they are scalable and robust for real-world applications."
];


export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Blog" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'AI Developer for E-commerce Project - (Stealth Mode)',
        image: aiDeveloperImage,  
        linkGithub: null,  
        linkOnline: null,  
        description: 'Develop and deploy AI and automation solutions for optimizing e-commerce operations, including content generation, email strategy, customer segmentation and customer service.',
        techStack: ['Data Preprocessing and Analysis', 'Workflow Automation', 'Machine Learning', 'NLP', 'LLMs', 'Clustering']
    },
    {
        title: 'Implementation for Multimodal E-commerce Product Data Classification',
        image: mlopsImplementationImage,  
        linkGithub: 'https://github.com/DataScientest-Studio/nov23_rakuten_mlops_0', 
        linkOnline: null,  
        description: 'Developed a product classification application for Rakuten, using NLP for textual descriptions and computer vision for product images.',
        techStack: ['MLOps','FastAPI', 'OAuth 2.0', 'JWT', 'Docker', 'AirFlow', 'PyTest', 'GitHub Actions']
    },
    {
        title: "FLORAFLOW - Plant Recognition using Kaggle's 'V2 Plant Seedlings Dataset'",
        image: floraflowImage,  
        linkGithub: 'https://github.com/gillesdeperetti/AU23_Plantes',  
        linkOnline: 'https://floraflow.streamlit.app/',  
        description: 'Plant recognition using Deep Learning and Computer Vision algorithms. Achieved 97% accuracy with MobileNetV3Large.',
        techStack: ['Data Preprocessing and Analysis','Deep Learning', 'Computer Vision','Transfer Learning', 'Fine Tuning']
    },
    {
        title: 'Git GPT',
        image: gitGPT,  
        linkGithub: null,  
        linkOnline: 'https://chatgpt.com/g/g-gsrcNqjyL-git-gpt',  
        description: 'GitHub expert offering tailored advice and clear explanations',
        techStack: ['OpenAI', 'GPT', 'Custom GPTs']
    },
    {
        title: 'Guru GPT',
        image: guruGPT,  
        linkGithub: null, 
        linkOnline: 'https://chatgpt.com/g/g-UfpmMdOV0-guru-gpt',  
        description: 'Guru GPT is an expert e-commerce consultant, specifically trained for Shopify',
        techStack: ['OpenAI', 'GPT', 'Custom GPTs']
    },
    {
        title: "FlutterFlow Copilot",
        image: flutterGPT,  
        linkGithub: null,  
        linkOnline: 'https://chatgpt.com/g/g-k5jkxydCw-flutterflow-copilot',  
        description: 'Streamlining App Development with Expert Guidance and Interactive Solutions',
        techStack: ['OpenAI', 'GPT', 'Custom GPTs']
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
        title: "Precision vs. Recall: Simplifying Complex Metrics with Everyday Examples",
        resume: "Precision and Recall can be confusing metrics in machine learning. This article uses relatable examples to simplify their understanding and highlight their importance.",
        url: "https://medium.com/@gillesdeperetti/precision-vs-recall-simplifying-complex-metrics-with-everyday-examples-a5acbac9aca4",
        image: a1  
    },
    {
        title: "Ouroboros of AI: The Peril of Generative Models Feeding on Their Creations",
        resume: "Generative models consuming their own creations can lead to significant issues. Explore the implications of AI learning from itself and potential solutions.",
        url: "https://medium.com/@gillesdeperetti/ouroboros-of-ai-the-peril-of-generative-models-feeding-on-their-creations-bda62e47ac5f",
        image: a2  
    },
    {
        title: "Data Scaling and Transformation: Keys to Effective Data Science",
        resume: "Transforming raw data into insights is crucial in data science. Learn the essential concepts of normalization and standardization, and their roles in effective data transformation.",
        url: "https://blog.devgenius.io/data-scaling-and-transformation-keys-to-effective-data-science-a7fa78ffd792",
        image: a3 
    },
];


export const metadata = {
    title: "Gilles de PERETTI - Machine Learning Engineer",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "../assets/images/logo-spark-mind.webp",
    pageUrl: "#" 
};


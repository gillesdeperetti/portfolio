import { FaPython, FaDatabase, FaGit, FaGithub, FaDocker } from 'react-icons/fa';
import { SiNumpy, SiPandas, SiPagespeedinsights, SiGnubash, SiScikitlearn, SiKeras, SiTensorflow, SiApachespark, SiPlotly, SiFastapi, SiStreamlit, SiApacheairflow } from 'react-icons/si';

const skillIcons = {
    // Langages de programmation
    'Python': FaPython,
    'Bash': SiGnubash,
    'SQL': FaDatabase,

    // Bibliothèques et Frameworks
    'NumPy': SiNumpy,
    'Pandas': SiPandas,
    'SciKit-Learn': SiScikitlearn,
    'Keras': SiKeras,
    'TensorFlow': SiTensorflow,
    'PySpark': SiApachespark,
    'BeautifulSoup': FaPython,
    'NLTK': FaPython,
    'Matplotlib': SiPagespeedinsights,
    'Seaborn': SiPagespeedinsights,
    'Plotly': SiPlotly,
    'FastAPI': SiFastapi,
    'Streamlit': SiStreamlit,

    // Outils de développement
    'Docker': FaDocker,
    'Airflow': SiApacheairflow,
    'Git': FaGit,
    'GitHub': FaGithub,
};

export default skillIcons;

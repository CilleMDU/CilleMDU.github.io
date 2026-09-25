import styles from './ProjectProcessPage.module.css';
import projects from "../../Data/projects.json";
import { Link, useParams } from "react-router";
import { getProjectImage, getProjectTitleImage } from "../../utils/resolveProjectImage";
import Coding from "../../img/thumbnails/Coding.svg";
import Designing from "../../img/thumbnails/Designing.svg";
import Researching from "../../img/thumbnails/Researching.svg";

const ProjectProcessPage = () => {
    const { slug } = useParams();
    const project = projects.find(p => String(p.id) === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.projectProcessPage}>
            <div className={styles.projectProcessContent}>
                <div className={styles.titleImage}>
                    <img src={getProjectTitleImage(project.imageTitle)} alt={project.title} />
                </div>
                <nav className={styles.projectProcessNav}>
                    <Link to={`/projects/${project.id}`} className={styles.processCard}>
                        <img src={getProjectImage(project.imageSquare)} alt={project.title} />
                        <p className={styles.processCardLabel}>View Project</p>
                    </Link>
                    <Link to={`/process/${project.id}/research`} className={styles.processCard}>
                        <img src={Researching} alt="Research" />
                        <p className={styles.processCardLabel}>Research</p>
                    </Link>
                    <Link to={`/process/${project.id}/design`} className={styles.processCard}>
                        <img src={Designing} alt="Design" />
                        <p className={styles.processCardLabel}>Design</p>
                    </Link>
                    <Link to={`/process/${project.id}/code`} className={styles.processCard}>
                        <img src={Coding} alt="Code" />
                        <p className={styles.processCardLabel}>Code</p>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default ProjectProcessPage;
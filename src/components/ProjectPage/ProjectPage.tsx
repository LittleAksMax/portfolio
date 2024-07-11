import { FC } from "react";
import { useParams } from "react-router-dom";
import { ExperienceState, ProjectState, ProjectType } from "../../types";
import NotFound from "../Status/NotFound";
import ProjectBanner from "../Banner/ProjectBanner/ProjectBanner";
import EntriesMap from "../../entries/EntryComponentConfig";
import ProjectRepo from "../../db/ProjectRepo";
import Page from "../Page/Page";
import ExperienceBanner from "../Banner/ProjectBanner/ExperienceBanner";
import ProjectContents from "./ProjectContents";

const createBanner = (
  projectType: ProjectType,
  project: ProjectState | ExperienceState
) => {
  if (projectType === ProjectType.Experiences) {
    return (
      <ExperienceBanner
        projectName={project.name}
        projectSubtitle={project.brief}
        started={(project as ExperienceState).started}
        ended={(project as ExperienceState).ended}
        tags={project.tags}
      />
    );
  } else {
    return (
      <ProjectBanner
        projectName={project.name}
        projectSubtitle={project.brief}
        sourceUrl={(project as ProjectState).source}
        accessUrl={(project as ProjectState).access}
        tags={project.tags}
      />
    );
  }
};

interface ProjectPageProps {
  pageType: "overview" | "details";
}

export const ProjectPage: FC<ProjectPageProps> = ({
  pageType,
}: ProjectPageProps) => {
  const { type, projectId } = useParams();

  // ensure type route parameter is valid
  if (
    (ProjectType.Certifications !== type &&
      ProjectType.Experiences !== type &&
      ProjectType.Projects !== type) ||
    projectId === undefined ||
    projectId === null
  ) {
    return <NotFound />;
  }

  const project = ProjectRepo.getInstance().getProjectById(projectId);

  // project must exist
  if (project === null) {
    return <NotFound />;
  }

  const overviewPage = EntriesMap[projectId].overview;
  const detailsPage = EntriesMap[projectId].details;

  return (
    <Page banner={createBanner(type, project)}>
      <ProjectContents>
        {pageType === "overview" ? overviewPage : detailsPage}
      </ProjectContents>
    </Page>
  );
};

export default ProjectPage;

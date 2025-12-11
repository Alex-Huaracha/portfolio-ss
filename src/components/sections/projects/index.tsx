import { PROJECTS } from '../../../data/projects';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '../../layout/panel';
import { CollapsibleList } from '../../ui/collapsible-list';
import { ProjectItem } from './project-item';

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}

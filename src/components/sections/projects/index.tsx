import { PROJECTS } from '../../../data/projects';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '../../layout/panel';

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>
    </Panel>
  );
}

import { PROFILE } from '../../data/profile';
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../layout/panel';

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>
      <PanelContent>{PROFILE.about}</PanelContent>
    </Panel>
  );
}

import { PROFILE } from '../../data/profile';
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../layout/panel';
import { Markdown } from '../markdown';
import { ProseMono } from '../ui/typography';

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ProseMono>
          <Markdown>{PROFILE.about}</Markdown>
        </ProseMono>
      </PanelContent>
    </Panel>
  );
}

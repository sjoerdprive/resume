import { Typography } from "~/shared/components/typography";
import { Page } from "~/shared/layout/content";
import { SkillCloud } from "./skill-cloud";
import { List } from "~/shared/components/list";

export function SkillsPage() {
  return (
    <Page.Content>
      <Typography.Title>Vaardigheden</Typography.Title>

      <Page.Section>
        <SkillCloud />
      </Page.Section>

      <Page.Section>
        <Typography.H2>Visie</Typography.H2>
        <p>
          Als developer ben ik altijd op zoek naar duurzame oplossingen, voor
          zowel bestaande problemen als nieuwe features. Ik vind het belangrijk
          om goed na te denken over de code die ik wil schrijven, omdat ik
          geloof dat hoe minder code ik schrijf, hoe vriendelijker het
          eindproduct zal zijn voor onderhoud, schaalbaarheid en testbaarheid.
        </p>

        <Typography.H3>Feature Sliced Design</Typography.H3>
        <p>
          Ik probeer mijn werk, waar van toepassing, zo veel mogelijk op te
          bouwen op een manier dat logica hergebruikt kan worden. Dat doe ik
          door goed te kijken wat een stuk code moet doen, of die code niet al
          bestaat, en of die code opgedeeld moet worden in kleinere stukken.
        </p>
        <p>
          Feature Sliced Design is een architectuurpatroon dat daarbij helpt.
          Het dwingt me om na te denken over welke logica en UI waarbij hoort,
          en hoe die logica en UI hergebruikt kan worden. Het helpt me om mijn
          code te structureren op een manier die schaalbaar en leesbaar is, en
          die het makkelijker maakt om nieuwe features toe te voegen.
        </p>
      </Page.Section>
      <Page.Section>
        <Typography.H2>Stack</Typography.H2>

        <Typography.H3>Front end</Typography.H3>

        <List.Ul>
          <List.Item>Typescript</List.Item>
          <List.Item>React</List.Item>
          <List.Item>TanStack</List.Item>
          <List.Item>Tailwind</List.Item>
        </List.Ul>

        <Typography.H3>Full Stack</Typography.H3>

        <List.Ul>
          <List.Item>Docker Compose</List.Item>
          <List.Item>Prisma</List.Item>
          <List.Item>PostgresQL</List.Item>
          <List.Item>Node.js</List.Item>
        </List.Ul>
      </Page.Section>
    </Page.Content>
  );
}

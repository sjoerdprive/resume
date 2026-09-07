import { Card } from "~/shared/components/card";
import { List } from "~/shared/components/list";
import { Typography } from "~/shared/components/typography";
import { Page } from "~/shared/layout/content";

export function MePage() {
  return (
    <Page.Content>
      <img
        className="h-100 w-120 overflow-hidden rounded-br-4xl rounded-tl-4xl object-cover mb-4 object-[center_20%]"
        src="/me.jpg"
        srcSet="/me-md.jpg 1x, /me-lg.jpg 2x"
        sizes="auto"
        alt="Studiofoto van Sjoerd Willemsen. Hij staat met zijn armen over elkaar en lacht in de camera."
      />

      <Typography.Title>Sjoerd Willemsen</Typography.Title>

      <Page.Section className="flex flex-col gap-6 py-6">
        <Typography.H2>In het kort</Typography.H2>

        <p>
          Geboren in Amsterdam in 1997. Ik woon in Nijmegen met mijn vriendin
          Sarah en onze poes Eve. Ik kook graag, en in mijn vrije tijd ben ik
          bezig met het developen van hobbyprojecten die ik nooit afmaak. Ik heb
          ook periodes dat ik veel achter de computer zit om games van vroeger
          te herspelen.
        </p>
        <p>
          Ik heb in Zutphen op het Isendoorn College gezeten, waarna ik in
          Enschede de HBO bachelor Creative Media & Game Technology heb gedaan
          aan het Saxion. Dat is een brede opleiding, waar ik in contact ben
          gekomen met verschillende disciplines binnen de
          creatieve-technologieindustrie. Ik heb er kennis opgedaan over onder
          andere marketing en psychologie, grafisch 2D- en 3D-ontwerp, en
          electronica. Ik heb me verdiept in webtechnologieën, en ben ik me gaan
          specialiseren in frontend development.
        </p>

        <div className="flex flex-wrap gap-5 *:basis-80 *:grow">
          <Card>
            <Typography.H3>Werkverleden</Typography.H3>
            <List.Ul>
              <List.Item>
                Adviseur digitale toegankelijkheid (FirmGround, Dieren)
              </List.Item>
              <List.Item>Frontend developer (Kolibri, Arnhem)</List.Item>
              <List.Item>
                Vrijwilliger, teamleider, bestuurslid (Scouting KDG, Zutphen)
              </List.Item>
            </List.Ul>
          </Card>

          <Card>
            <Typography.H3>Vaardigheden</Typography.H3>
            <List.Ul>
              <List.Item>TypeScript</List.Item>
              <List.Item>React</List.Item>
              <List.Item>Tailwind</List.Item>
              <List.Item>NextJS</List.Item>
              <List.Item>A11y</List.Item>
              <List.Item>NodeJS</List.Item>
              <List.Item>Docker Compose</List.Item>
              <List.Item>Prisma</List.Item>
              <List.Item>Copilot / Claude Code</List.Item>
              <List.Item>(S)CSS</List.Item>
            </List.Ul>
          </Card>

          <Card>
            <Typography.H3>Soft skills</Typography.H3>
            <List.Ul>
              <List.Item>
                Ik spreek me uit en breng eigen ideeën en inzichten in
              </List.Item>
              <List.Item>
                Ik neem verantwoordelijkheid en pak waar nodig het voortouw
              </List.Item>
              <List.Item>
                Ik ben analytisch en gericht op duurzame oplossingen
              </List.Item>
              <List.Item>Ik ben direct en duidelijk in communicatie</List.Item>
              <List.Item>
                Ik ben praktisch ingesteld en gericht op resultaat
              </List.Item>
            </List.Ul>
          </Card>
        </div>
      </Page.Section>
    </Page.Content>
  );
}

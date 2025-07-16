import { profile, skills, education, experience } from "../assets/data.json";
import { Badge, Section } from "../components";

export default function RootPage() {
  return (
    <>
      <Section>
        <div className="container">
          <Section.Title>Profile</Section.Title>
          <Section.Content>
            {profile.map((text, i) => (
              <p key={i} className="indent-4">
                {text}
              </p>
            ))}
          </Section.Content>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Section.Title>Skills</Section.Title>
          <Section.Content>
            <ul className="flex flex-col gap-y-1 list-disc">
              {skills.map(({ name, value }) => (
                <li key={name}>
                  <strong className="text-md">{name}:</strong> <span className="text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </Section.Content>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Section.Title>Experience</Section.Title>
          <Section.Content>
            <ul className="space-y-4">
              {experience.map(({ name, project, description, role, stack, path }, i) => (
                <li key={i}>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                      <h3 className="md:text-xl font-medium">
                        <a href={path}>{project}</a>
                      </h3>
                      <span className="hidden md:block">&#8729;</span>
                      <div className="text-xs uppercase tracking-wide font-semibold text-neutral-600">{name}</div>
                    </div>

                    <p className="text-sm font-thin text-neutral-600 italic py-2">{description}</p>

                    <ul className="list-disc list-outside">
                      {role.map((value, i) => (
                        <li key={i}>
                          <p className="text-sm">{value}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="py-2">
                      <ul className="flex flex-wrap items-center gap-2">
                        {stack.map((value, i) => (
                          <li key={i}>
                            <Badge>{value}</Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Section.Content>
        </div>
      </Section>

      <Section>
        <div className="container">
          <Section.Title>Education and Courses</Section.Title>
          <Section.Content>
            <ul className="flex flex-col gap-y-2 list-outside list-disc">
              {education.map(({ name, value }) => (
                <li key={name}>
                  <a className="underline hover:no-underline" href={value} target="_blank">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </Section.Content>
        </div>
      </Section>
    </>
  );
}

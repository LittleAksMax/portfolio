import { FC } from "react";
import { OverviewTemplate } from "../Templates";

const PortfolioOverview: FC = () => {
    return (
        <OverviewTemplate showDetailsPrompt="Take a more detailed look at how I made this website">
            <h2>Why did I build this project?</h2>
            
            <p>
                As someone that tends to gravitate towards backend developer, my
                decision to build this portfolio website stemmed from a desire to
                deepen my understanding of frontend technologies and design principles.
                It was a deliberate challenge to myself, aimed at breaking out of my
                comfort zone, diversifying my skill set to become a
                more well-rounded developer.
            </p>

            <p>
                A CV simply isn't enough space to really showcase someone's whole arsenal
                of skills. Having a portfolio like this can really allow me to make a note
                of all of my achievements and projects, in a lot more detail than I could
                on a single A4 page.
            </p>

            <h2>Next Steps</h2>

            <p>
                Naturally, I will update my personal portfolio as I go through my career -- tweaking
                styling, adjusting structure, adding more projects.
                Still, right now, I find myself reflecting on the development of this website. Not just in the
                context of developing a portfolio but as a significant milestone in my growth as a
                software developer.
            </p>

            <p>
                Coming from backend development, the foray frontend development posed a unique
                set of challenges and learning opportunities.

                Fortunately, there is still a long
                way to go I am looking forward to showcasing everything I learn, things I achieve and the
                projects I will build on this website!
            </p>

            <p>NOTE: due to my lack of experience, I took a lot of inspiration from <a href="https://armaizadenwala.com">armaizadenwala.com</a></p>

        </OverviewTemplate>
    );
};

export default PortfolioOverview;
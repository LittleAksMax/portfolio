import { FC } from "react";
import { DetailsTemplate } from "../Templates";
import { SubprojectDefinition } from "../Util/Subproject";

const PortfolioDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt="Take a look at the overview">
            <h2>What was this built with?</h2>

            <p>
                I built this website with <strong>React</strong> with <strong>Typescript</strong>.
                I didn't want to use plain HTML and CSS because the components
                in React allow for easy recycling of existing code. React also
                allows me to introduce state easily (if I require) with hooks.
            </p>

            <p>
                I also deployed the application in an AWS <strong>EC2</strong> instance.
                The project also required that I purchase a domain under my name,
                and obtain an SSL certificate (using <a href="https://letsencrypt.org/">Let's Encrypt</a>)
                to ensure that the traffic is secure.
            </p>

            <h2>What did I learn?</h2>

            <p>
                Before this project I had never deployed a live application on the Internet.
                Learning to <strong>register a domain</strong>, obtain <strong>SSL certificates</strong>, and set up a server
                in the cloud were entirely new tasks for me. This process provided a practical
                introduction to web deployment and security, marking a significant step in my
                development journey as I navigated these essential aspects of making a website
                accessible on the Internet for the first time.
            </p>

            <p>
                Over the project, I developed an intuitive understanding of CSS and how to structure styles
                in a document. Although basic, I never got extensive experience with manipulating styles and
                fine-graining them until something looks exactly like I wanted it to.
            </p>

            <p>
                In my second refactor of the project I improved the styling and made use of media queries
                more liberally to practice <strong>responsive web design</strong>. I also made sure to consolidate some of the
                knowledge I learned from my <a href="https://warwick.ac.uk/fac/sci/dcs/teaching/modules/cs139/">Web Development Technologies module (CS139)</a> regarding <strong>accessibility</strong> in websites, by attempting to cover a variety of screen sizes
                and using <strong>semantic HTML</strong> where appropriate.
            </p>

            <p>
                I realised after the first time that I deployed the portfolio manually that it was a tiresome process.
                I took the opportunity to hone my CI skills (as it is one of my interests right now). I
                set up a <strong>CI pipeline</strong> to push the Docker image to an ECR repository. This also
                allowed me to practice standard security practices in cloud service management (such as strictly
                enforcing the principle of least privilege among access keys, roles, users utilised).

                I could not set up a CD part of the pipeline because my application is deployed on a single EC2 server.
                This means that you need to be SSH'd into the server to pull the image and run it in a container. 
            </p>

            <h2>What were the Biggest Challenges?</h2>

            <SubprojectDefinition title="Consistent Styling">
                <p>
                    Making a visually appealing website is necessarily for capturing
                    people's attention. A lot of my time went into figuring out which
                    colours to use.
                    Another key aspect was deciding which font suits the style of the
                    website most (I went with <a href="https://fonts.google.com/specimen/Roboto">Roboto</a>).
                </p>
            </SubprojectDefinition>

            <SubprojectDefinition title="Intuitive Interface">
                <p>

                    It was also important that the website is easily navigable.
                    I ensured to use as few route definitions as possible, because
                    that forces me to work my website into a fixed mold that stays
                    consistent.
                    
                    The structure of the website had to be logical and easy to follow.
                    A simple way I achieved this was to keep the styling minimalistic
                    to keep the website effectively static.
                </p>
            </SubprojectDefinition>

            <SubprojectDefinition title="Effective CI">
                <p>
                    Making the change from total manual deployment to a pipeline that
                    automatically packages my code and stores it in a remote repository was a new
                    concept to me, and therefore a great challenge.
                    Despite it's difficulty it was a fun and educational
                    experience.
                    I had to familiarise myself with <strong>GitHub Actions</strong> and
                    the best practices for managing access keys (as opposed to STS and Roles).
                </p>
            </SubprojectDefinition>
        </DetailsTemplate>
    );
};

export default PortfolioDetails;
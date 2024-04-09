import { FC } from "react";
import { DetailsTemplate } from "../Templates";
import { SubprojectDefinition } from "../Util/Subproject";

const PortfolioDetails: FC = () => {
    return (
        <DetailsTemplate showOverviewPrompt="Take a look at the overview">
            <h2>What was this built with?</h2>

            <p>
                I built this website with <b>ReactJS</b> with <b>Typescript</b>.
                I didn't want to use plain HTML and CSS because the components
                in React allow for easy recycling of existing code. React also
                allows me to introduce state where I might need it really easily
                with hooks.
            </p>

            <p>
                I also deployed the application in an AWS <b>EC2</b> instance.
                The project also required that I purchase a domain under my name,
                and obtain an SSL certificate to ensure that the traffic is secure.
            </p>

            <h2>What did I learn?</h2>

            <p>
                Before this project I had never deployed a live application on the Internet.
                Learning to <b>register a domain</b>, obtain <b>SSL certificates</b>, and set up a server
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

            <h2>What were the Biggest Challenges?</h2>

            <SubprojectDefinition title="Consistent Styling">
                <p>
                    Making a visually appealing website is necessarily for capturing
                    people's attention. A lot of my time went into figuring out which
                    colours to use.
                    Another key aspect was deciding which font suits the style of the
                    website most (I went with <i>Roboto</i>).
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
        </DetailsTemplate>
    );
};

export default PortfolioDetails;
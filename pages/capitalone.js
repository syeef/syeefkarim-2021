import PortfolioLayout from "@layouts/portfolio";
import Link from "next/link";
import Work from "@includes/work";
import { getConfig, getAllPosts } from "@api";
import styles from "@layouts/portfolio.module.scss";
import stylesSpecific from "@layouts/capitalone.module.scss";

export default function Blog(props) {
  return (
    <PortfolioLayout title={props.title} description={props.description}>
      <div className={styles.logo}>
        <img src="../images/portfolio/capitalone/C1Logo.svg"></img>
      </div>

      <h2>Manage your account on the go</h2>
      <p className={styles.tag}>
        In 2015 Capital One released a brand new mobile app to help customers
        manage their account. Today the app is used by more than a million
        customers to view recent transactions, update account detials, and
        arrange payments. This case study is broken down into smaller challenges
        and what my role and input was to overcome those challenges and progress
        forward.
      </p>

      <div className={styles.details}>
        <p>
          <span>Product Goals</span>
          Create a mobile app to allow customers to easily service their
          accounts, receive relevant information regarding account health and
          increase overall engagement with Capital One.
        </p>
        <div className={styles.specificDetails}>
          <ul>
            <span>Results Achieved</span>
            <li>
              • Shipped both an iOS and Android app within 6 months, earlier
              than anticipated.
            </li>
            <li>
              • Advocated for and implemented a human centred design culture.
            </li>
            <li>
              • Influenced the product roadmap to cater for user needs rather
              than business oriented requirements.
            </li>
          </ul>
          <ul>
            <span>Skills Displayed</span>
            <li>Product concept</li>
            <li>Product roadmap</li>
            <li>Accessibility</li>
            <li>Interaction design</li>
            <li>Visual design</li>
            <li>Icon design</li>
          </ul>
        </div>
      </div>

      <div className={stylesSpecific.hero}>
        <div className={stylesSpecific.heroImg1}></div>
        <div className={stylesSpecific.heroImg2}></div>
      </div>

      <div className={stylesSpecific.hero}>
        <div className={stylesSpecific.heroImg3}></div>
        <div className={stylesSpecific.heroImg4}></div>
      </div>

      {/* 
      <div className={styles.card}>
        <div className={styles.meta}>
          <h2>Familiar and convenient</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tincidunt ornare massa eget. Sem et tortor consequat id porta.
          </p>
        </div>
        <div className={styles.visuals}>
          <div className={styles.cardVisuals}></div>
        </div>
      </div> */}

      <div className={styles.moreInformation}>
        <h3>Execute an information re-architecture of the existing apps</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              The existing app allowed customers to view their previous
              transactions, account balance and next payment date, but
              fundamentally failed to help customers make a payment and navigate
              the app in a meaningful way.
            </p>
            <p>
              Our goal was to allow customers to make a payment via the app as
              well as update the Information architecture (IA) to help customers
              easily see and browse to the content that they need.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Actions I Took</h4>
            <p>
              <ul>
                <li>
                  • Implemented a process to be able to conduct user interviews
                  in-house.
                </li>
                <li>• Gathered user needs and use cases first hand.</li>
                <li>• Analysed existing IA's from direct competitors.</li>
                <li>
                  • Created multiple options of potential IA's, reviewed with
                  internal stakeholders and customers, further iterated and
                  refined with engineers and product owner.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>The Outcome</h4>
            <p>
              <ul>
                <li>
                  • A diagram of the existing IA of the application, suitable to
                  be expanded to meet future features and requirements.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <h3>
          Create an experience which respects platform norms and conventions
        </h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              Roughly one third of customers had an Android device, however
              initial appetite from the business to create a native Android
              application was low. It was thought this would slow down
              development, and add additional unnecessary risk and complexity.
            </p>
            <p>
              My partners in Engineering were becoming increasingly demotivated
              by the notion of a hybrid app, with heavy usage of non-native
              elements for the Android platform.
            </p>
            <p>
              Essentially, Product was happy to progress with a subpar solution
              for Android, however Engineering wasn't bought in to the idea.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Actions I Took</h4>
            <p>
              <ul>
                <li>
                  • Conducted user interviews to hear first-hand what customers
                  thoughts and expectations included.
                </li>
                <li>
                  • Studied and became a subject matter expert of Material
                  Design by Google and how through its adoption we'd be able to
                  create a consistent experience, even across platforms.
                </li>
                <li>
                  • Gathered and analysed customer device usage statistics to
                  get buy in and reassure Product counterparts with regards to
                  my design decisions.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>The Outcome</h4>
            <p>
              <ul>
                <li>
                  • Became the first financial services app on the Google Play
                  store to launch with Material Design principles.
                </li>
              </ul>
            </p>
          </div>
          <script
            async
            class="speakerdeck-embed"
            data-id="bf378b409cad424494ef5a75d7fbaf72"
            data-ratio="1.77777777777778"
            src="//speakerdeck.com/assets/embed.js"
          ></script>
          {/* <div className={styles.overlay}>
            <img
              className={styles.ia}
              src="../images/portfolio/cloudflare-warp/WARP-IA.png"
            ></img>
          </div> */}
        </div>

        <h3>Apply an appropriate brand style for the app</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              The existing Capital One brand guidelines and assets were created
              and optimised to work for print and the web, but not for mobile
              applications.
            </p>
            <p>
              The challenge was to modernise the existing standards, suggest
              improvements, and execute on these recommendations.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Actions I Took</h4>
            <p>
              <ul>
                <li>
                  • Worked with the existing brand colour palette to find
                  appropriate uses of colours throughout the apps.
                </li>
                <li>
                  • Collected and studied multiple font options, considering how
                  this could also work with feature icons, line icons, and
                  imagery.
                </li>
                <li>
                  • Collaborate with the existing Brand team to ensure buy in
                  and build a long term relationship.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <h3>Improve the accessibility of the app</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              The app was put forward for accessibility review as part of the
              usual Capital One quality process and had come back non-compliant,
              particularly with regards to colour contrast. Product counterparts
              were also reluctant to make any large noticeable changes to the UI
              with fears of causing customer confusion and uncertainty.
            </p>
            <p>
              The challenge was to modernise the existing standards, suggest
              improvements, and execute on these recommendations.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Actions I Took</h4>
            <p>
              <ul>
                <li>
                  • Deconstructed the colours and their usage criteria within
                  the app, looking for similar hues from the enterprise colour
                  scheme.
                </li>
                <li>
                  • Once appropriate replacement shades were found, I compared
                  the foreground and background colours to make sure they passed
                  at least a WCAG 2 AA rating.
                </li>
                <li>
                  • Implemented the new colours closely with partners in
                  Engineering and Quality Assurance to quickly address the
                  non-compliant colour accessibility issue, whilst minimising UI
                  change.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>The Outcome</h4>
            <p>
              <ul>
                <li>• The app is now compliant with WGAC 2 AA rating.</li>
                <li>
                  • A rooted attitude within the product development team that a
                  user with accessibility tools enabaled shouldn't be treated as
                  a second class citizen.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <h3>My Design Process</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              <ul>
                <li>• Understand the initial purpose of the feature</li>
                <li>
                  • Review existing solutions from both direct and non-direct
                  competitors
                </li>
                <li>
                  • Create a vision piece to act as a stake in the ground, and
                  gold standard solution
                </li>
                <li>
                  • Distribute a user process diagram, to be shared with wider
                  business stakeholders and gauge any concerns or
                  recommendations
                </li>
                <li>
                  • Regularly review concepts with users to gain insights and
                  make any required adjustments
                </li>
                <li>
                  • Work closely with partners within Product and Engineering to
                  ensure buy-in and alignment from day 1
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <p>
              My process is based of the teachings and methods of Jesse James
              Garrett from The Elements of User Experience. The process is
              broken into 5 phases.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Phase 1: Strategy</h4>
            <p>
              The earliest stage of product or feature development, attempting
              to understand the needs of the user and business. Methods such as
              data analysis, direct and non-direct competitor landscaping, and
              user research, etc are used.
            </p>
            <p>
              <ul>
                <li>
                  • What are the users actual needs?
                  <ul>
                    <li>
                      — Conduct research session with users, using a range of
                      methods such as 1:1 interviews, ethnographic research,
                      diary studies, etc.
                    </li>
                  </ul>
                </li>
                <li>
                  • How does this align with the business or product aims?
                  <ul>
                    <li>
                      — Conduct workshops and interviews with key stakeholders
                      to gather further understanding of business opportunities
                      and implications.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Phase 2: Scope</h4>
            <p>
              Working as a team of designs, engineers and produt owners, we
              discount and prioritise solutions, looking to specify the
              functional and content requirements and define the scope.
            </p>
            <p>
              • How can our product or platform actually solve this problem?
              <ul>
                <li>
                  — Work closely with partners in engineering and product to
                  understand technical limitations and business
                  opportunities/risks to prioritise potential solutions.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Phase 3: Structure</h4>
            <p>
              At this stage, the concept transitions from being less abstract
              towards more concrete.
            </p>
            <p>
              • Information Architecture
              <ul>
                <li>
                  — The core structure of where features, tools and information
                  are held, and how the user can access it from within the
                  product. Methods such as tree-testing or card sorting are used
                  to verify or influence this structure.
                </li>
              </ul>
              • User Flow
              <ul>
                <li>
                  — The process of mapping out the journey throughout the
                  product to help the user complete the task. To further verfiy
                  this, methods such as objective based testing are used during
                  user research.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Phase 4: Skeleton</h4>
            <p>
              The objective during this phase is to fines the interface or
              tangible design. Multiple iterations might be done at a
              low-fidelity or greyscale to demonstrate the intent of a
              particular layout or element. The main focus is to further refine
              and optimise the information, interface and interaction design.
              Guerilla testing methods can be used to access the usability of
              particular interactions.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Phase 5: Surface</h4>
            <p>
              The final phase looks to refine the presentation layer of the
              product with a particular focus on typography, colour and
              animations. The purpose of this phase is to present the product in
              a form which aligns with the company brand, product, value and
              purpose in a concise and cohesive way.
            </p>
          </div>
        </div>

        <h3>Host ideation sessions with the development team</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>Methods Used</h4>
            <p>
              <ul>
                <li>• Storyboarding</li>
                <li>• Crazy 8's</li>
                <li>• Mindmapping</li>
                <li>• Role playing</li>
                <li>• "Yes and"</li>
                <li>• Information Architecture mapping</li>
              </ul>
            </p>
          </div>
        </div>

        <h3>Use multiple techniques to create high-fidelity mockups</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>Methods Used</h4>
            <p>
              <ul>
                <li>• Produce redline & spec documents</li>
                <li>• Create interactive prototypes</li>
              </ul>
            </p>
          </div>
        </div>

        <h3>Community Work</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              In early 2014, Capital One found itself in a place of change.
              Waterfall was quickly becoming dated, and Agile adoption was
              growing rapidly. The mobile app was said to be the flagship
              product showcasing the new, quicker, leaner, more agile way of
              working. Capital One was relatively unknown, particularly amongst
              the technology sector. The challenge was to be able to grow the
              reputation.
            </p>
          </div>
          <div className={styles.meta}>
            <h4>Actions I Took</h4>
            <p>
              <ul>
                <li>
                  • Worked the HR and Engineering to form a group of advocates,
                  and create a process allowing Engineers to easily speak at
                  events and conferences.
                </li>
                <li>
                  • Influenced key stakeholders in Engineering to use a portion
                  of their budget to sponsor and attend student hackathons,
                  suggesting this would help grow the graduate pipeline years
                  down the line (I was right.)
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.meta}>
            <h4>The Outcome</h4>
            <p>
              <ul>
                <li>
                  • Attended multiple student hackathons, part of the Major
                  League Hacking circuit representing Capital One.
                </li>
                <li>
                  • Influenced the strategy Capital One took with regards to
                  attending events.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className={styles.details}>
          <p>
            To comply with my non-disclosure agreement, I have omitted and
            obfuscated confidential and proprietary information. The information
            in this case study is my own and does not necessarily reflect the
            views of Capital One.
          </p>
        </div>
      </div>
    </PortfolioLayout>
  );
}

// export async function getStaticProps() {
//   const config = await getConfig();
//   const allPosts = await getAllPosts();

//   return {
//     props: {
//       posts: allPosts,
//       title: config.title,
//       description: config.description,
//     },
//   };
// }

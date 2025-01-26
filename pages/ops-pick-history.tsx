import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import SectionInner from '../src/components/Content/SectionInner';
import IndentInner from '../src/components/Content/IndentInner';
import List from '../src/components/Content/List';
import Banner from '../src/components/Content/Banner';
import FrostedGlass from '../src/components/Content/FrostedGlass';
import ImageFluid from '../src/components/Content/ImageFluid';
import Image from '../src/components/Content/Image';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';

const History = () => (
    <>
        <Head
            title='Ops Pick History'
            description="Leading the end-to-end transformation of an order validation module used by Loblaw, Canada's largest grocery retailer."
            url='https://sethvm.com/ops-pick-history'
        />
        <Section ends>
            <Heading type={2}>Ops Pick History</Heading>
            <SubHeading>Loblaw Digital</SubHeading>
            <Paragraph>
                <br />
                Loblaw's Ops Pick History is a tool used to validate customer order statuses and
                fulfillment completion times. It is used in the day-to-day operations of PC Express
                (<abbr>PCX</abbr>), a grocery click-and-collect and delivery service that spans over
                700 locations across Canada.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platform:</span>
                &nbsp;Desktop Web
            </Paragraph>
            <Paragraph>
                <span className='bold'>Launched:</span>
                &nbsp;May 2021
            </Paragraph>
            <Paragraph>
                <span className='bold'>Result:</span>
                &nbsp;Validation of over 10K orders per week across 13 grocery store chains
            </Paragraph>
        </Section>

        <Banner img='/loblaw/ph_banner.png' alt='Screenshot of the final Pick History interface' />

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                With COVID-19 driving demand for online grocery services through the roof, Loblaw
                looked to enhance the extensibility of their internal operation tools—an Ops Portal
                initiative served a critical role in fulfilling this objective by driving a complete
                in-house rebuild of its grocery platform's components.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The Pick History module is an evolution of Loblaw's previous operation tool's
                    transaction log module.
                </Strong>
            </IndentInner>
            <Paragraph>
                Working with 1 product designer, 2 product managers and 5 engineers, I led the
                zero-to-one design of the Pick History module, from discovery, to validation to
                iteration.
            </Paragraph>
        </Section>

        <Section>
            <Heading type={3}>The Previous Module</Heading>
            <Paragraph>
                Transaction logs—collectively referred to as <abbr>TRX</abbr>—were key elements of
                the previous operations platform. They recorded every task performed by store
                colleagues (also known as <abbr>PCX</abbr> specialists) throughout the preparation
                process of a customer order.
            </Paragraph>
            <IndentInner>
                <Strong>
                    <abbr>TRX</abbr> was a tool used by <abbr>PCX</abbr> specialists to ensure
                    consistent and timely fulfillment of customer orders.
                </Strong>
            </IndentInner>
            <Paragraph>
                Through the details presented by “transaction” entries, specialists were able to
                validate orders by:
            </Paragraph>
            <List numbered>
                <li>
                    <Paragraph>Pinpointing substituted or unfulfilled items</Paragraph>
                </li>
                <li>
                    <Paragraph>
                        Following up with pickers regarding any given task or status
                    </Paragraph>
                </li>
                <li>
                    <Paragraph>Verifying staging and loading times</Paragraph>
                </li>
            </List>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Log Interface
                </Heading>
                <Paragraph>Transactions were paginated and sorted earliest-first.</Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/trx_action_display.png'
                    alt='Screenshot of a transaction log page'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Entry Point
                </Heading>
                <Paragraph>
                    Logs were attached to every order within the previous platform's “All Orders
                    Summary” Page.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    end
                    src='/loblaw/trx_entry.png'
                    alt='Screenshot of the TRX entry point in the orders dashboard'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Problems Uncovered</Heading>
            <Paragraph>
                My first few weeks on this project were spent learning about our problem space. I
                took an in-depth look at the end-to-end journey of an online grocery order and the
                role served by <abbr>TRX</abbr> within the <abbr>PCX</abbr> ecosystem.
            </Paragraph>
            <IndentInner>
                <Strong>
                    New hires were faced with a steep learning curve upon understanding how to use
                    the <abbr>TRX</abbr> module.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Ambiguous Information
                </Heading>
                <Paragraph>
                    Location changes and transaction descriptions were presented as raw, tabulated
                    data in the form of numbers.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/trx_properties.png'
                    alt='Transaction log screenshot describing its property columns'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Tedious Item Tracking
                </Heading>
                <Paragraph>
                    Transaction codes represented the different stages of the pick lifecycle and
                    were paired with a very short description.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/trx_code_description_pairs.png'
                    alt='Transaction log screenshot highlighting the transaction code and description properties'
                />
            </ImageFluid>
            <SectionInner>
                <Paragraph>
                    Entries connected to the same item journey were ungrouped and tracked by
                    cross-referencing with their “Line” property.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    end
                    src='/loblaw/trx_line_property.png'
                    alt='Transaction log screenshot highlighting transactions with the same Line property value'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Laborious Navigation
                </Heading>
                <Paragraph>
                    Transaction logs for larger orders could span over 15 pages in length —
                    navigation interactions were limited to two sets of “Next” and “Previous”
                    buttons.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    end
                    src='/loblaw/trx_navigation.png'
                    alt='Snippet of the TRX page jump feature'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Design Approach</Heading>
            <Paragraph>
                After uncovering problems with <abbr>TRX</abbr>, we outlined three areas for a new
                design to innovate in:
            </Paragraph>
            <List numbered>
                <li>
                    <Paragraph>
                        <span className='bold'>Clarity</span>
                        <br />
                        Leverage natural language to make transactions easier to understand
                    </Paragraph>
                </li>
                <li>
                    <Paragraph>
                        <span className='bold'>Cohesiveness</span>
                        <br />
                        Simplify item tracking by connecting transactions of the same journey(s)
                    </Paragraph>
                </li>
                <li>
                    <Paragraph>
                        <span className='bold'>Scalability</span>
                        <br />
                        Enhance navigation by enabling it to adapt to varying order sizes
                    </Paragraph>
                </li>
            </List>
            <IndentInner>
                <Strong>
                    As <abbr>PCX</abbr> specialists, we need to be able to quickly find any item
                    within a customer order so that we can identify what has happened to it.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Reworked Interface Layout
                </Heading>
                <Paragraph>
                    I elected to split up the Pick History module into two layers of information:
                    the transaction level and the item level.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/loblaw/ph_initial_redesign.png'
                    alt="Medium-fidelity prototype of the Pick History's layout"
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Unified Item Journey
                </Heading>
                <Paragraph>
                    To streamline item tracking, I grouped transactions based on the items they
                    belong to. Each transaction set is sorted latest-first so that the most
                    “current” state of each item is available to users upfront.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/ph_redesign_sub.png'
                    alt='New transaction card highlighting item names, quantities, and actions'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Surfaced Item Status
                </Heading>
                <Paragraph>
                    A navigation column facilitates one-click access to any transaction regardless
                    of how many items are present within an order log. Additionally, cards provide
                    insight into an item's latest status without the need to select it.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/ph_item_cards.png'
                    alt='New item selection cards showing latest status'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    New Search Function
                </Heading>
                <Paragraph>
                    Colleagues will often go into <abbr>TRX</abbr> knowing exactly which items they
                    want to look into. We introduced a search function to enable access to these
                    items without the need for too much scrolling.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image screen end src='/loblaw/ph_redesign_navbar.png' alt='New search bar' />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Validation Results</Heading>
            <Paragraph>
                I ran moderated usability tests and had several <abbr>PCX</abbr> specialists conduct
                mock order investigations using a prototype of our redesign. My script outlined
                scenarios they would encounter during a typical day at a store.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The Pick History's design excelled in cutting the overall interaction cost of
                    item status identification. However, some elements of our new interface were
                    found to be unintuitive.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    🦾 Strengths
                </Heading>
                <List>
                    <li>
                        <Paragraph>Action descriptions were easy to understand</Paragraph>
                    </li>
                    <li>
                        <Paragraph>Current statuses took less time to verify</Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            Reworked navigation yielded quicker timestamp confirmation
                        </Paragraph>
                    </li>
                </List>
            </SectionInner>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    🩹 Weaknesses
                </Heading>
                <List ends>
                    <li>
                        <Paragraph>
                            Pick actions and load actions were difficult to distinguish from one
                            another
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            Journeys involving substituted items were confusing to follow
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            Latest-first transaction sequencing felt like a “backwards flow”
                        </Paragraph>
                    </li>
                </List>
            </SectionInner>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Design Refinements</Heading>
            <Paragraph>
                My approach to polishing our solution encompassed two core foundations:
            </Paragraph>
            <List numbered>
                <li>
                    <Paragraph>A continuous stream of feedback from store colleagues</Paragraph>
                </li>
                <li>
                    <Paragraph>
                        Close collaboration with developers to preserve alignment on technical
                        feasibility
                    </Paragraph>
                </li>
            </List>
            <IndentInner>
                <Strong>
                    I focused on addressing aspects of our new layout that did not align with our
                    users' mental model—store colleagues cared not only about a given item's current
                    status, but also how it got there.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Transaction Card Iterations
                </Heading>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/loblaw/ph_transaction_iterations.png'
                    alt='Diagram showing and explaining transaction card design changes'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Navigation Column Iterations
                </Heading>
            </SectionInner>
            <ImageFluid>
                <Image
                    end
                    src='/loblaw/ph_item_list_changes.png'
                    alt='Diagram showing and explaining navigation design changes'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>New Visual Elements</Heading>
            <Paragraph>
                Upon iterating our transaction designs, I opted to capitalize on iconography and
                colour—domains untouched by <abbr>TRX</abbr> nor the Pick History module's design
                prior to testing.
            </Paragraph>
            <IndentInner>
                <Strong>
                    I designed and introduced key visuals to call out transactions of concern and
                    “isolate” timelines for different item journeys.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    "[An icon] is Worth a Thousand Words"
                </Heading>
                <Paragraph>
                    In adherence to a classic aphorism, timeline icons serve as indicators for
                    transactions that fall outside of the expected pick actions as well as
                    preparation completion.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/ph_transaction_icons.png'
                    alt='Diagram showcasing new transaction  icons'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Traffic Light Colour Sequence
                </Heading>
                <Paragraph>
                    A traffic light colour system classifies transactions based on the levels of
                    fulfillment they contribute to the customer order.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    end
                    src='/loblaw/ph_colours.png'
                    alt='Infographic explaining traffic light colours and urgency levels'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Contextualized Search</Heading>
            <Paragraph>
                It was confirmed later down our project roadmap that the search function within our
                new module would be contextualized to each individual order.
            </Paragraph>
            <IndentInner>
                <Strong>
                    As users, we will be able to search through a customer order by item name or
                    item number.
                </Strong>
            </IndentInner>
            <Paragraph>
                This opened opportunities for me to make changes that better facilitate successive
                search queries.
            </Paragraph>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    If it Fitts's, it Ships
                </Heading>
                <Paragraph>
                    The search bar was made wider and relocated into our navigation column—closer to
                    where other user interactions would take place.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    src='/loblaw/ph_search_placement.png'
                    alt='Diagram describing placement change of search bar'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Microcopy that Teaches
                </Heading>
                <Paragraph>
                    The final searchbar's states incorporate helper text that informs new colleagues
                    about what they can use the search function for.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    end
                    src='/loblaw/ph_search_states.png'
                    alt='Detailed breakdown of search bar states and microcopy'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Preparing for Takeoff</Heading>
            <Paragraph>
                During the closing phases of the transformation project, I constructed a pattern
                library to serve as the single source of truth during the development of the Pick
                History's frontend components.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The Pick History module was shipped and deployed to stores as part of the Ops
                    Portal rollout.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Pattern Library
                </Heading>
                <Paragraph>
                    Components have been styled in accordance with the <abbr>PCX</abbr> design
                    system.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image src='/loblaw/ph_pattern_library.png' alt='Pattern library components' />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Launch-Ready Design
                </Heading>
                <Paragraph>
                    We presented our final design at the Ops Roundup, a weekly forum attended by
                    colleagues from the wider <abbr>PCX</abbr> operations branch.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    screen
                    end
                    src='/loblaw/ph_final_design.png'
                    alt='Screenshot the launched design'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends>
            <Heading type={3}>Next Steps</Heading>
            <br />
            <IndentInner>
                <Heading type={4}>Capture post-launch user feedback</Heading>
            </IndentInner>
            <Paragraph>
                Some design opportunities don't reveal themselves until after a product undergoes
                extensive unmoderated usage. Getting the Ops Portal into the hands of stores opens
                up a wider pool of users to collect feedback from, and in turn a wider pool of
                unseen insights.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>
                    Explore a potential merger with another Ops Portal component
                </Heading>
            </IndentInner>
            <Paragraph>
                Colleagues refer to an Order Details page to check ordered item quantities—a key
                piece of information missing from the Pick History module. I would study the
                feasibility of consolidating the data provided across both components to create a
                unified investigation tool.
            </Paragraph>
        </Section>
        <Section ends>
            <Heading type={3}>Reflection</Heading>
            <br />
            <IndentInner>
                <Heading type={4}>Drive form with function</Heading>
            </IndentInner>
            <Paragraph>
                The “form follows function” principle is easily extended into any form of design.
                Every creation or change throughout the project—from palette changes to reformed
                interactions—was driven by an intended function or goal, ensuring that every
                decision made was informed.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Observe, don't (just) listen</Heading>
            </IndentInner>
            <Paragraph>
                Watching users carry out tasks in real-time reveals crucial aspects of the
                decision-making process behind how they work towards objectives. Not only did design
                validation confirm the importance of a <abbr>PCX</abbr> specialist's ability to
                identify item statuses, it also proved pivotal in determining how interactions
                within the Pick History module can contribute to simplifying the everyday operation
                of a store.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Ambiguity is to be embraced</Heading>
            </IndentInner>
            <Paragraph>
                Taking ownership of the Pick History design process instilled me with confidence in
                my ability to navigate ambiguity and taught me about the importance of seeking
                context to solving a problem. <abbr>TRX</abbr> presented a simple-looking interface
                that belied a complex layer of information—an understanding of <abbr>PCX</abbr> as a
                business was fundamental to identifying challenges and opportunities associated with
                its role in fulfillment operations.
            </Paragraph>
        </Section>
    </>
);

export default History;

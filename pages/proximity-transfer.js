// layout
import Section from '../src/components/Content/Section'
import IndentInner from '../src/components/Content/IndentInner'
// typography
import Heading from '../src/components/Typography/Heading'
import SubHeading from '../src/components/Typography/SubHeading'
import Paragraph from '../src/components/Typography/Paragraph'
import Strong from '../src/components/Typography/Strong'
// images
import Banner from '../src/components/Content/Banner'

const Interac = () => {

    return (
        <>
        <Section
        ends>
            <Heading type={2}>Proximity Transfer</Heading>
            <SubHeading>Interac Corp</SubHeading>
            <Paragraph>
                <br />
                Interac’s Proximity Transfer project aims to provide a new, versatile method for Canadians to send and
                receive money by leveraging near-field communication (<abbr>NFC</abbr>) technology. It is being designed for
                integration within Interac’s existing payment infrastructure. For more information, please feel free to reach out!
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Sole designer with 2 developers
            </Paragraph>
            <Paragraph>
                <span className='bold'>Status:</span>
                &nbsp;Ongoing {'\u{1F6A7}'}
            </Paragraph>
        </Section>

        <Banner
        img='/interac/interac-banner.svg'
        alt='Banner depicting communication between two mobile devices' />

        <Section
        ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                An industry leader in electronic transactions, Interac Corp operates Canada’s debit card
                system and is one of the nation’s most trusted financial service brands. For the fall of 2021,
                I am interning as a designer within the Innovation Labs & New Ventures (<abbr>ILNV</abbr>) team.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Interac’s products and services aim to provide Canadians with “The Easy Way To Pay”.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Context</Heading>
            <Paragraph>
                Interac is on a constant push to future-proof digital payments within Canadian banking. One of
                the lab’s ongoing initiatives revolves around exploring how we might provide a new way to facilitate
                physical transactions without the need for cash.
            </Paragraph>
            <IndentInner>
                <Strong>
                    I’m leading research and design exploration for Proximity Transfer,
                    a contactless peer-to-peer transaction channel within Interac Debit.
                </Strong>
            </IndentInner>
        </Section>
        </>
    );
}

export default Interac

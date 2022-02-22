import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import IndentInner from '../src/components/Content/IndentInner';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';
// images
import Banner from '../src/components/Content/Banner';

const Interac = () => (
    <>
        <Head
            title='Proximity Transfer'
            description="Spearheading the design exploration of a new contactless transaction channel within Interac, Canada's leading debit payment platform."
            url='https://sethvm.com/proximity-transfer'
        />
        <Section ends>
            <Heading type={2}>Proximity Transfer</Heading>
            <SubHeading>Interac Corp</SubHeading>
            <Paragraph>
                <br />
                Interac's Proximity Transfer is an exploratory peer-to-peer transaction experience
                within Interac Debit, a platform that serves over 15 million Canadians every month.
                It aims to provide a new, versatile method for sending money by leveraging
                near-field communication (<abbr>NFC</abbr>) technology present in today's mobile
                devices.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Sole designer with 2 developers
            </Paragraph>
            <Paragraph>
                <span className='bold'>Timeline:</span>
                &nbsp;6 weeks
            </Paragraph>
            <Paragraph>
                <span className='bold'>Status:</span>
                &nbsp;Completed {'\u{1F3C1}'}
                <br />
                <br />
            </Paragraph>
            <IndentInner>
                <Paragraph>
                    <span className='italic'>
                        Due to a non-disclosure agreement, I can't go in-depth about certain aspects
                        of the project here. Please feel free to reach out for more information!
                    </span>
                </Paragraph>
            </IndentInner>
        </Section>

        <Banner
            img='/interac/interac-banner.svg'
            alt='Banner depicting communication between two mobile devices'
        />

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                An industry leader in electronic transactions, Interac Corp operates Canada's debit
                card system and is one of the nation's most trusted financial service brands. During
                the fall of 2021, I interned as a designer within the Innovation Labs & New Ventures
                (<abbr>ILNV</abbr>) team.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Interac's products and services aim to provide Canadians with “The Easy Way To
                    Pay”.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Challenge</Heading>
            <Paragraph>
                Traditionally easy and quick, cash transactions have grown increasingly hazardous
                due to their unhygienic nature as well as COVID-19. While existing digital
                alternatives eliminate the need for physical contact, they lack the swiftness
                offered by sending or receiving cash.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How might we bring the “face-to-face” convenience provided by cash payments over
                    to the digital space?
                </Strong>
            </IndentInner>
        </Section>
    </>
);

export default Interac;

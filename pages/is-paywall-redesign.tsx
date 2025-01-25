import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';


const Paywall = () => (
    <>
        <Head
            title='Paywall Redesign'
            description='Generated 18% lift in free-to-paid conversion'
            url='https://sethvm.com/is-paywall-redesign'
        />
        <Section ends>
            <Heading type={2}>Paywall Redesign</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                <br />
                Short blurb about project and teammates
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platform:</span>
                &nbsp;Web & Mobile
            </Paragraph>
        </Section>
    </>
);

export default Paywall;

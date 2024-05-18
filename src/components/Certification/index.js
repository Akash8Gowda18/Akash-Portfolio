import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import { certification, } from '../../data/constants';
import CertificateCard from '../Cards/CertificationCard';
import { ResumeButton } from '../HeroSection/HeroStyle';
import { Bio } from '../../data/constants';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;


const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;



const index = () => {
    return (
        <Container id="certification">
            <Wrapper>
                <Title>Certifcates</Title>
                <Desc>
                Continuously enhancing skills and knowledge through diverse courses, I have gained certificates.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {certification.map((certification) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <CertificateCard certification={certification}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                    <ResumeButton href={Bio.certificate} target='display'>See More</ResumeButton> 
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}
export default index;
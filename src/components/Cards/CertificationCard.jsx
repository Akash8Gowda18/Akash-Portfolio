import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    border: 0.1px solid #854CE6;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Description = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;


  
const CertificateCard = ({ certification }) => {
    return (
        <Card>
            <Top>
                <Image src={certification.img} />
                <Body>
                    <Title>{certification.title}</Title>
                    {/* Add more details if needed, like organization, date, etc. */}
                </Body>
            </Top>
            <Description>
                <Span>{certification.description}</Span>
            </Description>
        </Card>
    );
};

export default CertificateCard;

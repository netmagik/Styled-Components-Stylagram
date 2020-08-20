import React from 'react';
import styled from 'styled-components';
import SingleImage from './Image.js';

const feedsource = [
    {
        source: 
        'https://scontent-mia3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/59824306_2184367361650506_8307142787337778800_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=bEdHqE9I_yAAX--Srln&oh=61922f3914145e02a10a55c4a96595be&oe=5F692CC9',
        likes: '43',
        comments: '3',
        isVideo: false,
        id: 0,
    },
    {
        source:
        'https://scontent-mia3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/50254466_960185574186056_6819769904877531265_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=OaEYAbbY-HcAX8nMHnF&oh=140ef809e75b1860aa0546ce4ad9969a&oe=5F686438',
        likes: '313',
        comments: '10',
        isVideo: true,
        id: 1,
    },
    {
        source:
        'https://scontent-mia3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/41265389_339038813333994_6973804838160883265_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=rg9ZYJdkswIAX_imy3i&oh=5fe8b1de2582d646b19ab5fb96934dae&oe=5F6A0473',
        likes: '29',
        comments: '2',
        isVideo: false,
        id: 2,
    },
    {
        source:
        'https://scontent-mia3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/37965830_228130187814650_8606626041798066176_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=ZJlcTIpmgK0AX_9OVY6&oh=8055b653d687c8922db1689b1f06d297&oe=5F6802AD',
        likes: '18',
        comments: '2',
        isVideo: false,
        id: 3,
    },
    {
        source:
        'https://scontent-mia3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/27581876_2041666136078557_5118957059500408832_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=GNsU2qkukQ8AX8Q_Pkr&oh=d027a6766f316af1e14008b286224392&oe=5F68F59C',
        likes: '30',
        comments: '4',
        isVideo: false,
        id: 4,
    },
];

const ProfileContainer = styled.div`
    max-width: 1010px;
    width: 100%;
    margin: 20px auto;
`;

const ProfileDetails = styled.div`
    display: flex;
`;

const ProfileDetailsLeft = styled.div`
    margin-right: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileDetailsRight = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 150px;
    border: 1px solid #ccc;
    padding: 5px;
`;

const ProfileDetailsUsername = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EditProfileButton = styled.div`
    background-color: transparent;
    border: 1px solid #dbdbdb;
    color: #262626;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    padding: 5px 9px;
    text-transform: capitalize;
    font-size: 14px;
    margin-left: 20px;
    `;

const HeadingThreeText = styled.h3``;

const ParagraphText = styled.p`
    margin-right: 25px;
`;

const ProfileDetailsMeta = styled.div`
    display: flex;
    justify-content: center;
`;

const ProfileDetailsName = styled.div`
    text-align: left;
`;

const ImageWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`;

function Profile() {
    return(
        <ProfileContainer>
            <ProfileDetails>
                <ProfileDetailsLeft>
                    <ProfileImage src="https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/11849779_413957958791282_1319610355_a.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_ohc=nsiJfMSKLVkAX9yXJMC&oh=2fbe5dff700659077bb528234d405e71&oe=5F67BF06"></ProfileImage>
                </ProfileDetailsLeft>

                <ProfileDetailsRight>
                    <ProfileDetailsUsername>
                        <HeadingThreeText>gflabel</HeadingThreeText>
                        <EditProfileButton>Edit profile</EditProfileButton>
                    </ProfileDetailsUsername>

                    <ProfileDetailsMeta>
                        <ParagraphText>
                            <strong>5</strong> posts
                        </ParagraphText>
                        <ParagraphText>
                            <strong>296</strong> followers
                        </ParagraphText>
                        <ParagraphText>
                            <strong>269</strong> following
                        </ParagraphText>
                    </ProfileDetailsMeta>

                    <ProfileDetailsName>
                        <ParagraphText>
                            <strong>Irina</strong>
                        </ParagraphText>
                    </ProfileDetailsName>
                </ProfileDetailsRight>
            </ProfileDetails>

            <ImageWrapper>
                {feedsource.map(item => (
                    <SingleImage image={item} key={item.id} /> 
                ))}
            </ImageWrapper>

        </ProfileContainer>
    );
}


export default Profile;
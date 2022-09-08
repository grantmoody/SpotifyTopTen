import './App.css';

function TutorialBody() {
    return (
        <>
            <div className='link'>
                <a href="http://localhost:3000/">
                    BACK
                </a>
            </div>
            <br />
            <div className='link'>
                <a target="_blank" href="https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/">
                    Click to go to Spotify
                </a>
            </div>
            <div className='center-content'>
                <div className='divider' />
                <img alt="Token Arrow Image" src="/images/GetTokenArrow.png" />
                <br />
                <div className='divider' />
                <img alt="Token Arrow Image" src="/images/ScopesRequestToken.png" />
                <br />
                <div className='divider' />
                <img alt="Token Arrow Image" src="/images/LoginScreen.png" />
                <br />
                <div className='divider' />
                <img alt="Token Arrow Image" src="/images/CopyToken.png" />
                <br />
                <div className='divider' />
            </div>
            <div className='link'>
                <a href="http://localhost:3000/">
                    BACK
                </a>
            </div>
            <br />
        </>
    );
}

export default TutorialBody;
import { React} from 'react';
import MatchDetailCard from '../components/MatchDetailCard';
import { MatchSmallDetail } from '../components/MatchSmallDetail';


export const TeamPage = () => {
    return (
        <div className = "TeamPage">
        <h1>Team Name</h1>
        <MatchDetailCard></MatchDetailCard>
        <MatchSmallDetail></MatchSmallDetail>
        </div>

    );
}

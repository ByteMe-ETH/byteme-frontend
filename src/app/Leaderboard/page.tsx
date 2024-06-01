import {WagerOverview} from "@/components/WagerOverview";
import Leaderboard from "@/components/Leaderboard";

export default function LeaderboardPage() {
    return (
        <div className="flex flex-col justify-start h-fit pt-20 w-3/4 ">
            <div className="w-full max-w-3xl mx-auto h-fit">
                <Leaderboard/>
            </div>
        </div>
    );
}
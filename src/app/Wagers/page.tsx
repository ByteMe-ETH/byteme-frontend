import {WagerOverview} from "@/components/WagerOverview";

export default function Wagers() {
    return (
        <div className="flex flex-col justify-start min-h-screen py-10 ">
            <div className="w-full max-w-4xl mx-auto">
                <WagerOverview/>
            </div>
        </div>
    );
}
import { NFTCollection } from "@/components/NFTCollection";

export default function Collection() {
    return (
        <div className="flex flex-col justify-start min-h-screen py-10 ">
            <div className="w-full max-w-4xl mx-auto">
                <NFTCollection/>
            </div>
        </div>
    );
}

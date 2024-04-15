"use client";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiURL = "https://www.dta32.my.id/api/v2/spotify/nowPlaying";

export default function Spotify() {
    const { data, error, isLoading } = useSWR(`${apiURL}`, fetcher);
    if (isLoading)
        return (
            <div className="hidden lg:block h-2/3 select-none w-[360px]">
                <div className="flex flex-row px-2 h-full w-full items-center gap-x-2 animate-pulse">
                    <div className="bg-slate-700 h-10 w-10 rounded"></div>
                    <div className="grid grid-rows-2 h-full gap-y-2">
                        <div className="bg-slate-700 h-2 w-28 rounded self-end"></div>
                        <div className="bg-slate-700 h-4 w-72 rounded"></div>
                    </div>
                </div>
            </div>
        );
    if (error || !data) {
        console.log(error);
        return (
            <div className="hidden h-2/3 select-none w-[360px]">
                <div className="flex flex-row px-2 h-full w-full items-center gap-x-2 ">
                    <div className="bg-slate-700 h-10 w-10 rounded"></div>
                    <div className="grid grid-rows-2 h-full">
                        <p className="text-gray-300 text-xs self-end">Spotify listening activity</p>
                        <p className="truncate w-full text-sm">Error fetching data</p>
                    </div>
                </div>
            </div>
        );
    }
    const isPlaying = data.data.playing_data !== null;
    const isSong = data.data.playing_data?.type === "track";
    return (
        <a
            href={
                isPlaying && isSong
                    ? data.data.playing_data.item.href
                    : "https://open.spotify.com/user/t56tgotgnyyhud9rkhvbabz7a"
            }
            target="_blank"
            rel="noreferrer noopener"
            className={`hidden ${isPlaying && "lg:block"} h-2/3 select-none min-w-[240px] max-w-[360px]`}
        >
            <div className="group relative h-full w-full">
                <div className="flex flex-row px-2 h-full w-full items-center gap-x-2 group-hover:brightness-[0.25] duration-300">
                    <div>
                        {isPlaying && isSong && (
                            <Image
                                src={data.data.playing_data.item.album.imageUrl}
                                alt={`${data.data.playing_data.item.name} album art`}
                                width={40}
                                height={40}
                                className="min-w-[40px]"
                                unoptimized={true}
                            />
                        )}
                    </div>
                    <div className="grid grid-rows-2 h-full">
                        <p className="text-gray-300 text-xs self-end">Currently listening to</p>
                        <p className="truncate w-full text-white">
                            {isPlaying && isSong
                                ? `${data.data.playing_data.item.artist.name} - ${data.data.playing_data.item.name}`
                                : !isPlaying
                                ? "Offline"
                                : "Either an ad or a podcast"}
                        </p>
                    </div>
                </div>
                <div className="flex opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full duration-300">
                    <p className="my-auto mx-auto text-center py-1 px-2 text-sky-300 after:content-['_↗']">
                        Open in Spotify
                    </p>
                </div>
            </div>
        </a>
    );
}

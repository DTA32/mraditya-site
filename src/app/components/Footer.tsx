"use client";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-1 bg-slate-950 px-4 py-2 text-neutral-200">
            <div className="flex text-sm">
                <small>Disclaimer: Logo used on this website is copyright of Google, retrieved from&nbsp;
                    <a href="https://google.com/404" target="_blank" rel="noreferrer noopener" className="underline underline-offset-2">
                        Google 404 page
                    </a>
                </small>
            </div>
            <div className="flex flex-row items-center justify-between">
                <small>
                    also check my&nbsp;
                    <a className="underline underline-offset-2" href="https://dta32.my.id/" aria-label="Redirect to MRaditya personal website" target="_blank">
                        personal web
                    </a>
                </small>
                <small>&#169; 2025 MRaditya</small>
            </div>
        </footer>
    );
}

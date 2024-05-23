function LogomarkPaths() {
    return (
        <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
            <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
            <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
        </g>
    )
}

export function Logomark(props) {
    return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
            <LogomarkPaths />
        </svg>
    )
}

// Assuming the SVG is saved in the public directory as odin-teal-transparent.svg
export function Logo(props) {
    return (
        <svg aria-hidden="true" viewBox="0 0 280 50" fill="none" {...props}>
            <image
                href="/logo/odin-teal-transparent.svg"
                x="0"
                y="0"
                height="50"
                width="50"
            />
            <text
                x="58"
                y="25.5"
                fill="#ffffff"
                fontWeight="bold"
                fontSize="x-large"
            >
                ODIN
            </text>
            <text
                x="58"
                y="45.5"
                fill="#ffffff"
                fontWeight="bold"
                fontSize="small"
            >
                Collaborative Impact Innovation {/* !!!customize */}
            </text>
        </svg>
    )
}

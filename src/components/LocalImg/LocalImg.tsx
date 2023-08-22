interface LocalImgProps {
    src: string;
    alt: string;
    className?: string;
}

export default function LocalImg({ src, alt, className }: LocalImgProps) {
    return <img src={src} alt={alt} className={className} />;
}
